import { message } from 'ant-design-vue'
export default (error: any) => {
  if (error.response) {
    const data = error.response.data
    const status = error.response.status
    const token = ''
    console.error('-------异常响应-------', token);
    switch (status) {
      case 400:
        message.error('请求错误')
        console.error('请求错误');
        break;
      case 401:
        message.error('未授权')
        console.error('未授权');
        break;
      case 403:
        message.error('拒绝访问')
        console.error('拒绝访问');
        break;
      case 404:
        message.error('资源未找到')
        console.error('资源未找到');
        break;
      case 500:
        message.error('服务器内部错误')
        console.error('服务器内部错误');
        break;
      case 501:
        message.error('无法处理请求')
        console.error('无法处理请求');
        break;
      default:
        console.error(data.message);
        break;
    }
  }
  return Promise.reject(error.toString())
}