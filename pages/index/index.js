//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    tabs: ["关注", "推荐", "热榜"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    clientWidth: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    currentIndex: 1
  },
  onLoad: function() {
    var that = this;
    var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientWidth: res.windowWidth,
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    // 获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
  },
  //事件处理函数
  tabClick: function(e) {
    console.log(e)
    let that = this;
    this.setData({
      activeIndex: Number(e.currentTarget.id),
      currentIndex: Number(e.currentTarget.id),
      sliderOffset: that.data.clientWidth / that.data.tabs.length * Number(e.currentTarget.id),
    });
  },
  slideChange: function(e) {
    let that = this;
    this.setData({
      activeIndex: e.detail.current,
      currentIndex: e.detail.current,
      sliderOffset: that.data.clientWidth / that.data.tabs.length * e.detail.current
    });
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  onShareAppMessage: function() {
    return {
      title: '微信',
      desc: '',
      path: ''
    }
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  error(e) {
    console.log(e.detail)
  }
})