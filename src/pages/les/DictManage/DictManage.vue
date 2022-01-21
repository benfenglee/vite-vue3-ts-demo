<script lang="ts">
import {
  Table,
  Input,
  Row,
  Col,
  Button,
  Popconfirm,
  Divider,
} from "ant-design-vue";
import { useStore } from "vuex";
import MinTable from "@/public/table";
import MinCache from "@/public/cache";
import AddDict from "./modules/AddDict.vue";
import { ref } from "@vue/reactivity";
const columns = [
  {
    title: "#",
    dataIndex: "",
    key: "rowIndex",
    width: 120,
    align: "center",
    customRender: function (text: any) {
      return parseInt(text.index) + 1;
    },
  },
  {
    dataIndex: "dictName",
    title: "字典名称",
    key: "dictName",
  },
  {
    title: "字典编号",
    dataIndex: "dictCode",
    key: "dictCode",
  },
  {
    title: "描述",
    key: "description",
    dataIndex: "description",
    width: "30%",
  },
  {
    title: "操作",
    align: "center",
    key: "action",
    slots: { customRender: "action" },
  },
];
export default {
  name: "DictManage",
  setup() {
    const store = useStore();
    const getData = (data: any) => store.dispatch("dict/getDictList", data);
    const {
      ipagination,
      loading,
      dataSource,
      queryParam,
      handleTableChange,
      resetChange,
      getList,
    } = MinTable(getData);
    const { refrechCache } = MinCache();
    const isModal = ref(false);
    return {
      columns,
      dataSource,
      loading,
      ipagination,
      handleTableChange,
      editDict() {},
      resetChange,
      queryParam,
      getList,
      refrechCache,
      isModal,
      addDictClick() {
        isModal.value = !isModal.value;
      },
      hideModel() {
        isModal.value = !isModal.value;
      },
    };
  },
  components: { Table, Input, Row, Col, Button, Popconfirm, Divider, AddDict },
};
</script>
<template>
  <div class="dict-manage">
    <div class="dict-select">
      <Row class="flex align-center">
        <p class="font-14">字典名称：</p>
        <Input
          style="width: 200px; margin-right: 20px"
          placeholder="Basic usage"
          v-model:value="queryParam.dictName"
        />
        <p class="font-14">字典编号：</p>
        <Input
          style="width: 200px; margin-right: 20px"
          placeholder="Basic usage"
          v-model:value="queryParam.dictCode"
        />
        <Col :span="12" class="flex align-center">
          <Button class="margin-right" type="primary" @click="getList">
            <i class="iconfont icon-search margin-right-xs" />
            查询</Button
          >
          <Button type="primary" @click="resetChange">
            <i class="iconfont icon-leftalignment margin-right-xs" />
            重置</Button
          >
        </Col>
      </Row>
      <Row class="margin-top">
        <Button class="margin-right" type="primary" @click="addDictClick">
          <i class="iconfont icon-add margin-right-xs" />
          添加</Button
        >
        <Button class="margin-right" type="primary">
          <i class="iconfont icon-exl-fill margin-right-xs" />
          导出</Button
        >
        <Button class="margin-right" type="primary">
          <i class="iconfont icon-descending margin-right-xs" />
          导入</Button
        >
        <Button class="margin-right" type="primary" @click="refrechCache">
          <i class="iconfont icon-exchangerate margin-right-xs" />
          缓存刷新</Button
        >
        <Button type="primary">
          <i class="iconfont icon-ashbin-fill margin-right-xs" />
          回收站</Button
        >
      </Row>
    </div>
    <Table
      :columns="columns"
      :row-key="(record) => record.dictCode"
      :data-source="dataSource"
      :pagination="ipagination"
      :loading="loading"
      class="table"
      @change="handleTableChange"
      size="middle"
    >
      <template #action="{ record }">
        <a @click="editDict(record)" class="margin-right">
          <i class="iconfont icon-editor" />
          编辑
        </a>
        <a @click="editDict(record)" class="margin-right">
          <i class="iconfont icon-category" />
          字典配置
        </a>
        <a @click="editDict(record)" class="margin-right">
          <i class="iconfont icon-ashbin" /> 删除</a
        >
      </template>
    </Table>
    <AddDict :isModal="isModal" @hideModel="hideModel" />
  </div>
</template>
<style lang="scss" scoped>
.dict-manage {
  height: 100%;
  overflow-y: auto;
  background-color: white;
  padding: 20px;
  .table {
    height: calc(100% - 110px);
    overflow-y: auto;
  }
  .dict-select {
    margin-bottom: 20px;
  }
}
</style>
