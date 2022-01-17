import { ref } from "vue"

export default function XX() {
  const dataSource = ref([])
  const queryParam = ref({})
  const ipagination = ref({
    current: 1,
    pageSize: 2,
    pageSizeOptions: ['10', '20', '30'],
    showTotal: (total: string, range: string[]) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条'
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0
  })
  const loading = ref(false)
  const filters = ref({})
  const isorter = ref({
    column: 'create_time',
    order: 'desc'
  })
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    console.log(pagination);
    ipagination.value = pagination
  }
  return {
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
    // 翻页触发
    handleTableChange,
  }
}