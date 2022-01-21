<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "RouterManage",
});
</script>

<script lang="ts" setup>
import { Button, Row, Table, Dropdown, Menu, MenuItem } from "ant-design-vue";
import MinTable from "@/public/table";
import { useStore } from "vuex";
const store = useStore();
const columns = [
  // {
  //   title: "#",
  //   dataIndex: "",
  //   key: "rowIndex",
  //   width: 120,
  //   align: "center",
  //   customRender: function (text: any) {
  //     return parseInt(text.index) + 1;
  //   },
  // },
  {
    dataIndex: "name",
    title: "菜单名称",
    width: "15%",
    key: "name",
    slots: { customRender: "name" },
  },
  {
    title: "菜单类型",
    dataIndex: "dictCode",
    key: "dictCode",
    slots: { customRender: "dictCode" },
  },
  {
    title: "组件",
    key: "component",
    dataIndex: "component",
    width: "15%",
    slots: { customRender: "component" },
  },
  {
    title: "路径",
    key: "url",
    dataIndex: "url",
    width: "15%",
    slots: { customRender: "url" },
  },
  {
    title: "排序",
    key: "sortNo",
    dataIndex: "sortNo",
  },
  {
    title: "描述",
    key: "description",
    dataIndex: "description",
  },
  {
    title: "操作",
    align: "center",
    key: "action",
    slots: { customRender: "action" },
  },
];
const getData = (data: any) =>
  store.dispatch("routerManage/getPermissionList", data);
const menu_type = store.getters["login/dict"]["menu_type"];
const comMenuType = computed(() => {
  const menuType = {};
  menu_type.forEach((type) => {
    menuType[type.value] = type.text;
  });
  return menuType;
});
console.log(menu_type);

const editDict = () => {};
const {
  ipagination,
  loading,
  dataSource,
  queryParam,
  handleTableChange,
  resetChange,
  getList,
} = MinTable(getData);
console.log(dataSource.value);
</script>

<template>
  <div class="router-manage">
    <Row class="margin-bottom">
      <Button type="primary">新增</Button>
    </Row>
    <Table
      :columns="columns"
      :row-key="(record) => record.id"
      :data-source="dataSource"
      :pagination="ipagination"
      :loading="loading"
      class="table"
      @change="handleTableChange"
      size="middle"
    >
      <template #name="{ record }">
        <span class="text-over">{{ record.name }}</span>
      </template>
      <template #dictCode="{ record }">
        <p>{{ comMenuType[record.menuType] }}</p>
      </template>

      <template #component="{ record }">
        <p class="text-over">{{ record.component }}</p>
      </template>
      <template #url="{ record }">
        <p class="text-over">{{ record.url }}</p>
      </template>
      <template #action="{ record }">
        <Button type="link" class="margin-right" @click="editDict(record)"
          >编辑</Button
        >
        <Dropdown>
          <Button type="link">更多</Button>
          <template #overlay>
            <Menu>
              <MenuItem key="0">
                <Button type="link">详情</Button>
              </MenuItem>
              <MenuItem key="1">
                <Button type="link">添加下级</Button></MenuItem
              >
              <MenuItem key="2">
                <Button type="link">数据规则</Button></MenuItem
              >
              <MenuItem key="3"> <Button type="link">删除</Button></MenuItem>
            </Menu>
          </template>
        </Dropdown>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="scss">
.router-manage {
  background-color: white;
  height: 100%;
  .table {
    transform: translateZ(0);
  }
  // border: 1px solid blue;
}
</style>
