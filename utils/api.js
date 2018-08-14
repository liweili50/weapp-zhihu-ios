const baseURL = 'https://5b6bb6a0c06fb600146273e8.mockapi.io';
var Mock = require('./mock.js')
// 封装请求函数
function $http(obj) {
  return new Promise(function(resolve, reject) {
    wx.request({
      url: baseURL + obj.url,
      method: obj.method,
      data: obj.data,
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}
export function login(data) {
  return $http({
    url: '/user/login',
    method: 'get',
    data: data
  })
}
export function getNewsList(data) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Mock.mock({
        'error_code': '',
        'error_msg': '',
        'data|10': [{
          'id|+1': 1,
          'title': '@ctitle(3,8)',
          'content': '@ctitle(20,40)'
        }]
      }))
    }, 3000)
  })
}