import axios from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// 根据环境不同引入不同api地址
import { baseApi } from '@/config'
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000, // request timeout
  headers: {
    'Access-Control-Allow-Headers': '*',
    Authorization: 'Basic YXBwOmFwcF9zZWNyZXQ='
  }
})

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['Ezoonet-Auth'] = ''
    }
    return config
  },
  error => {
    // 返回错误信息
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 200) {
      return res
    } else {
      // 错误信息
      if (
        (res.code && res.code === 400) ||
        (res.status && res.status === 400) ||
        (res.code && res.code === 500) ||
        (res.status && res.status === 500)
      ) {
        Toast.fail(res.msg)
        return Promise.reject(res)
      }
    }
    if (res.msg) {
      if (res.msg.indexOf('重新登录') > -1) {
        // resetlogin()
      }
    }
    return response
  },
  error => {
    Toast.clear()
    return Promise.reject(error)
  }
)

export default service
