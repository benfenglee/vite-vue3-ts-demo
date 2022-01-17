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
import MinTable from "./table";
export default {
  name: "DictManage",
  setup() {
    const { ipagination, loading, handleTableChange } = MinTable();
    const columns = [
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
      },
      {
        title: "操作",
        key: "action",
        width: "30%",
        slots: { customRender: "action" },
      },
    ];
    return {
      columns,
      dataSource: [
        {
          key: "1",
          dictName: "John Brown",
          dictCode: 32,
          description: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          dictName: "Jim Green",
          dictCode: 42,
          description: "London No. 1 Lake Park",
        },
        {
          key: "3",
          dictName: "Joe Black",
          dictCode: 32,
          description: "Sidney No. 1 Lake Park",
        },
      ],
      handleTableChange,
      editDict() {},
      loading,
      ipagination,
    };
  },
  components: { Table, Input, Row, Col, Button, Popconfirm, Divider },
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
        />
        <p class="font-14">字典编号：</p>
        <Input
          style="width: 200px; margin-right: 20px"
          placeholder="Basic usage"
        />
        <Col :span="12" class="flex align-center">
          <Button class="margin-right" type="primary">
            <i class="iconfont icon-search margin-right-xs" />
            查询</Button
          >
          <Button type="primary">
            <i class="iconfont icon-leftalignment margin-right-xs" />
            重置</Button
          >
        </Col>
      </Row>
      <Row class="margin-top">
        <Button class="margin-right" type="primary">
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
        <Button class="margin-right" type="primary">
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
      :row-key="(record) => record.description"
      :data-source="dataSource"
      :pagination="ipagination"
      :loading="loading"
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
  </div>
</template>
<style lang="scss" scoped>
.dict-manage {
  background-color: white;
  padding: 20px;
  .dict-select {
    margin-bottom: 20px;
  }
}
</style>
