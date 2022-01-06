export default (error: any) => {
  if (error.response) {
    const data = error.response.data
    const status = error.response.status
    const token = ''
    console.error('-------异常响应-------', token);
    switch (status) {
      case 400:
        console.error('请求错误');
        break;
      case 401:
        console.error('未授权');
        break;
      case 403:
        console.error('拒绝访问');
        break;
      case 404:
        console.error('资源未找到');
        break;
      case 500:
        console.error('服务器内部错误');
        break;
      case 500:
        console.error('无法处理请求');
        break;
      default:
        console.error(data.message);
        break;
    }
  }
  return Promise.reject(error)
}