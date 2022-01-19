<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import "./ClusterBubble";
interface Window {
  TMap: Object;
  ClusterBubble: any;
}
const store = useStore();
const TMap = (window as any).TMap;
const mapDom = ref(null);
const buildingList = ref<any[]>();
const componentMap = ref<object>({});
let markerCluster: any = null;
const mapInit = () => {
  const center = new TMap.LatLng(35.86711521382821, 107.61635904902096);
  componentMap.value = new TMap.Map(mapDom.value, {
    center,
    zoom: 4,
    mapStyleId: "style2",
  });
  // 2D显示
  (componentMap as any).value.setViewMode("2D");
};
const initMarkerCluster = () => {
  const option = {
    id: "MarkerCluster",
    map: componentMap.value,
    enableDefaultStyle: false,
    minimumClusterSize: 3,
    geometries: buildingList.value,
    zoomOnClick: false,
    // gridSize: 60,
    averageCenter: false,
    // maxZoom: 16,
  };
  markerCluster = new TMap.MarkerCluster(option);
  markerCluster.on("click", onClickMark);
  markerCluster.on("cluster_changed", clusterChange);
};
let clusterBubbleList: any[] = [];
let markerGeometries: any[] = [];
let marker: any;
const onClickMark = (e: any) => {
  console.log(e);
};
const clusterChange = (e: any) => {
  const map = componentMap.value;
  if (clusterBubbleList.length) {
    clusterBubbleList.forEach((item) => {
      item.destroy();
    });
    clusterBubbleList = [];
  }
  const clusters = markerCluster.getClusters();
  clusters.forEach((item: any) => {
    if (item.geometries.length > 1) {
      const clusterBubble = new (window as any).ClusterBubble({
        map,
        position: item.center,
        content: item.geometries.length,
        // 控制聚合样式背景图片
        eqptType: item.geometries[0].properties.eqptType,
      });
      clusterBubble.on("click", () => {
        (map as any).fitBounds(item.bounds);
      });
      clusterBubbleList.push(clusterBubble);
    } else {
      markerGeometries.push({
        position: item.center,
      });
    }
    //
    if (marker) {
      marker.setGeometries(markerGeometries);
    } else {
      // 创建点标记图层
      const styles = {};
      for (let i = 1; i < 10; i++) {
        (styles as any)[i] = new TMap.MarkerStyle({
          width: 42,
          height: 42,
          anchor: {
            x: 17,
            y: 21,
          },
          src: "/image/deviceType/" + i + ".png",
        });
      }
      marker = new TMap.MultiMarker({
        map,
        styles: {
          default: new TMap.MarkerStyle({
            width: 42,
            height: 42,
            anchor: {
              x: 17,
              y: 21,
            },
            src: "/image/deviceType/undefined.png",
          }),
          ...styles,
        },
        geometries: markerGeometries,
      });
      console.log(219, marker);
      // marker.on('click', onClickMark)
    }
  });
};
onMounted(() => {
  mapInit();
  store.dispatch("bigscreen/getAlarmanalysisBuildStatistics").then((res) => {
    const data = res.data.result;
    buildingList.value = data.map((el: any, i: number) => {
      const obj = {
        id: i,
        styleId: "label",
        position: new TMap.LatLng(el.lat, el.lng),
        properties: { ...el },
        content: {
          addr: el.addr,
          name: el.name,
          id: el.id,
          provinces: el.provinces,
          departId: el.departId,
        },
      };
      return obj;
    });
    initMarkerCluster();
    console.log(res);
  });
});
</script>

<template>
  <div id="map" ref="mapDom"></div>
</template>

<style scoped lang="scss"></style>
