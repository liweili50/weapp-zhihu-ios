const baseURL = 'https://5b6bb6a0c06fb600146273e8.mockapi.io';
// 封装请求函数
function $http (obj) {
  return new Promise(function (resolve,reject){
    wx.request({
      url: baseURL + obj.url,
      method: obj.method,
      data: obj.data,
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
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
  return new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve({
        data: [
          {
            title: "标题1",
            content: '文字性描述文字性描述文字性描述文字性描述文字性描述文字性描述'
          },
          {
            title: "标题2",
            content: '文字性描述文字性描述文字性描述文字性描述文字性描述文字性描述'
          },
          {
            title: "标题3",
            content: '文字性描述文字性描述文字性描述文字性描述文字性描述文字性描述'
          },
          {
            title: "标题4",
            content: '文字性描述文字性描述文字性描述文字性描述文字性描述文字性描述'
          },
          {
            title: "标题5",
            content: '文字性描述文字性描述文字性描述文字性描述文字性描述文字性描述'
          }
        ]
      })
    },3000)
  })
}
