import { computed, onMounted, ref } from "vue"

export default function (getData: any) {
  const dataSource = ref([])
  const queryParam = ref({})
  const ipagination = ref({
    current: 1,
    pageSize: 10,
    pageSizeOptions: ['10', '20', '30'],
    showTotal: (total: string, range: string[]) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条'
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0
  })
  const lodIpagination = Object.assign({}, ipagination.value)
  const comQueryParam = computed(() => {
    const obj = Object.assign({ pageNo: 0, pageSize: 10 }, queryParam.value)
    obj.pageSize = ipagination.value.pageSize
    obj.pageNo = ipagination.value.current
    return obj
  })
  const loading = ref(false)
  const filters = ref({})
  const isorter = ref({
    column: 'create_time',
    order: 'desc'
  })
  const getList = () => {
    loading.value = true;
    const queryParam = comQueryParam.value
    getData(queryParam).then((res: { data: { result: { records: any; total: number } } }) => {
      dataSource.value = res.data.result.records || res.data.result;
      ipagination.value.total = res.data.result.total;
    }).finally(() => {
      loading.value = false;
    })
  }
  // 执行
  onMounted(() => {
    getList()
  })
  // 页数发生变化
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    ipagination.value = pagination
    getList()
  }
  // 重置
  const resetChange = () => {
    ipagination.value = lodIpagination
    queryParam.value = {}
    getList()
  }
  return {
    // 
    queryParam,
    // 数据源
    dataSource,
    // 分页
    ipagination,
    /* 排序参数 */
    isorter,
    /* 筛选参数 */
    filters,
    /* table加载状态 */
    loading,
    // 查询
    getList,
    // 翻页触发
    handleTableChange,
    // 查询参数重置
    resetChange
  }
}