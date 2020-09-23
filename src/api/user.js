import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.Login,
    method: 'post',
    data
  })
}

// 用户信息 post 方法
export function getUserInfo(data) {
  return request({
    url: api.UserInfo,
    method: 'post',
    data,
    hideloading: true
  })
}

// 登录
export function Authorization() {
  return request({
    url: api.Authorization + '?username=13306036804&password=123456&grant_type=password&scope=all&type=account',
    method: 'post',
    hideloading: true
  })
}
