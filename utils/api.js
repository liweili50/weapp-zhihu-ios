const baseURL = 'https://wx.com/wechat';
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
  return [
    {
      title: '标题',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img:'../../images/icon.png'
    },
    {
      title: '标题一',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: '../../images/icon.png'
    },
    {
      title: '标题二',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: '../../images/icon.png'
    },
    {
      title: '标题',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: '../../images/icon.png'
    }, {
      title: '标题',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: '../../images/icon.png'
    },{
      title: '标题五',
      content: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
      img: '../../images/icon.png'
    }
  ]
}
