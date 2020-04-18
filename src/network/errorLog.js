import axios from 'axios'
function request(config) {
  const instance = axios.create({
    // baseURL: 'http://suen.xyz:3001',
    baseURL:'http://localhost:3001',
    timeout: 10000,
  })
  // axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // 这里可以处理config中不符合服务器要求的信息
    // 发送请求时，显示请求图标
    // 某些网络请求（比如登陆token），必须携带一些特殊信息
    // console.log(config);

    return config //必须return
  }, err => {

  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res
  }, err => {
    return err
  })
  //axios本身返回的就是promise
  return instance(config)
}

export function errorLog(str) {
  return request({
    url: '/mall',
    params: {
      str
    }
  })
}