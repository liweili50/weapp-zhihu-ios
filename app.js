//app.js
App({
  onLaunch: function() {
    var _this = this;
    if (wx.getStorageSync('openId')) {
      wx.checkSession({
        success: function () {
          //session_key 未过期，并且在本生命周期一直有效
          console.log('没有失效！')
        },
        fail: function () {
          // session_key 已经失效，需要重新执行登录流程
          console.log('失效！')
         //重新登录
          _this.login()
        }
      })
    }else {
      // 登录
      this.login()
    }
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
  login: function () {
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: 'https://wx.com/wechat/user/login',
          method: 'GET',
          data: {
            code: res.code
          },
          success: function (res) {
            console.log(res)
            wx.setStorageSync('openId', res.data.result)
          }
        })
      }
    })
  }
})