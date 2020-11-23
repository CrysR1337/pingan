// miniprogram/pages/user/user.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {nickName: "点击头像登录"},
    logged: false,
    takeSession: false,
    requestResult: '',
    nums:{
      sub: 10,
      fans:56,
      recentviewer:548,
      history:556,
      id:123456
    },
    favsrc: '../../images/fav.png',
    readsrc: '../../images/read.png',
    likeflag: 1,
    stopflag: 1
  },

  bindFav: function(e) {
    if(this.data.favsrc == '../../images/fav.png') {
      this.setData ({
        favsrc: '../../images/like.png'
      })
    }
    else{
      this.setData ({
        favsrc: '../../images/fav.png'
      })
    }
  },
  bindRead: function(e) {
    if(this.data.readsrc == '../../images/read.png') {
      this.setData ({
        readsrc: '../../images/stop.png'
      })
    }
    else{
      this.setData ({
        readsrc: '../../images/read.png'
      })
    }
  },

  bindSetting:function() {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  Edit: function() {
    wx.navigateTo({
      url: '../user/editDetail/editDetail',
    })
  },

  // bindUserDetail: function() {
  //   wx.navigateTo({
  //     url: '../userDetail/userDetail',
  //   })
  // },

  bindOrderTap: function() {
    wx.navigateTo({
      url: '../my-order/my-order',
    })
  },

  bindWalletTap: function() {
    wx.navigateTo({
      url: '../wallet/wallet',
    })
  },

  bindSchoolTap: function() {
    wx.navigateTo({
      url: '../school-regist/identification/identification',
    })
  },

  bindRegistTap: function() {
    wx.navigateTo({
      url: '../school-regist/registlist/registlist',
    })
  },

  bindHelpTap: function() {
    wx.switchTab({
      url: '../im/im',
    })
  },

  bindSettingTap: function() {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  bindTestTap: function() {
    wx.login({
      success (res) {
        if(res.code) {
          //发起网络请求
          wx.request({
            // url: 'http://128.199.237.0:3000/login',
            url: 'http://128.199.237.0:3000/user/profile',
            header: {
              Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcGVuX2lkIjoiMDAwMDAxIiwiaWF0IjoxNTk1OTYyNDk2fQ.uMsiM2gPWsWcnfBORBT5t8ePVtnqvclS4DQKfgp_B7jLeYVnhRPdl1ToZp_scoLCE3xQxWPFMrLPzulsbOatxQUVlegaUbo5EBzVmQersTnTPqqXjRjEBIVg7YitWVKMw2Xf6j7aXtOsNQrTC-cJk1ubvqteqQQsE8h4Sb7Tra9Fh2fjrv1P8bUiPixLmot8l_1xxDKue47RcVI0U-M1BOF_pIE95iiZFrUdVzZTVyQX7bniIHxl0r2G5_dLwzYwdi0q5bkh-nRxS17H4CDoZy4jN0Zv0LbrxTdt6vPCyw_1Xnt6sg2alI6GXO_1vSDJTrcW8Ie2DRkAHa_QbXIzdA'
            },
            // header: {
            //   'Content-Type': 'application/x-www-form-urlencoded'
            // },
            // data: {
            //   code: res.code
            // },
            success: function(res) {
              console.log(res)
            }
          })
          console.log(res.code)
        } else {
        console.log('登录失败！ ' + res.errMsg)
      }
    }
  })
},

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },


  getUserInfo: function (e) {
    this.setUserInfo(e.detail.userInfo);
  },

  setUserInfo: function (userInfo) {
    if (userInfo != null) {
      app.globalData.userInfo = userInfo
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      })
    }
  }
})