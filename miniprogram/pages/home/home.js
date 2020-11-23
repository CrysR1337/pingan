// miniprogram/pages/home/home.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shadow: [
      
    ],
    itemsrc: [
      '../../images/xinjiang.png',
        '../../images/menggu.png',
        '../../images/yanbian.png',
        '../../images/tibet.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe.png'
    ],
    mapsrc: '../../images/map.png',
    flag: 0,
    itemname: ' ',
    show1: 0,
    show2: 0,
    show3: 0,
    show4: 0,
    show5: 0,
    show6: 0,
  },

  select1:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang-s.png',
        '../../images/menggu.png',
        '../../images/yanbian.png',
        '../../images/tibet.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe.png'
      ],
      mapsrc: '../../images/map-xinjiang.png',
      flag: 1,
      itemname: '新疆',
      show1: 1,
      show2: 0,
      show3: 0,
      show4: 0,
      show5: 0,
      show6: 0,
    })
    app.globalData.musicflag = 1;
    console.log(app.globalData.musicflag)
  },
  select2:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang.png',
        '../../images/menggu-s.png',
        '../../images/yanbian.png',
        '../../images/tibet.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe.png'
      ],
      mapsrc: '../../images/map-menggu.png',
      flag: 1,
      itemname: '内蒙',
      show1: 0,
      show2: 1,
      show3: 0,
      show4: 0,
      show5: 0,
      show6: 0,
    })
    app.globalData.musicflag = 2;
    console.log(app.globalData.musicflag)
  },
  select3:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang.png',
        '../../images/menggu.png',
        '../../images/yanbian-s.png',
        '../../images/tibet.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe.png'
      ],
      mapsrc: '../../images/map-yanbian.png',
      flag: 1,
      itemname: '延边',
      show1: 0,
      show2: 0,
      show3: 1,
      show4: 0,
      show5: 0,
      show6: 0,
    })
    app.globalData.musicflag = 3;
    console.log(app.globalData.musicflag)
  },
  select4:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang.png',
        '../../images/menggu.png',
        '../../images/yanbian.png',
        '../../images/tibet-s.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe.png'
      ],
      mapsrc: '../../images/map-tibet.png',
      flag: 1,
      itemname: '西藏',
      show1: 0,
      show2: 0,
      show3: 0,
      show4: 1,
      show5: 0,
      show6: 0,
    })
    app.globalData.musicflag = 4;
    console.log(app.globalData.musicflag)
  },
  select5:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang.png',
        '../../images/menggu.png',
        '../../images/yanbian.png',
        '../../images/tibet.png',
        '../../images/yunnan-s.png',
        '../../images/jiangzhe.png'
      ],
      mapsrc: '../../images/map-yunnan.png',
      flag: 1,
      itemname: '云南',
      show1: 0,
      show2: 0,
      show3: 0,
      show4: 0,
      show5: 1,
      show6: 0,
    })
    app.globalData.musicflag = 5;
    console.log(app.globalData.musicflag)
  },
  select6:function() {
    this.setData ({
      itemsrc: [
        '../../images/xinjiang.png',
        '../../images/menggu.png',
        '../../images/yanbian.png',
        '../../images/tibet.png',
        '../../images/yunnan.png',
        '../../images/jiangzhe-s.png'
      ],
      mapsrc: '../../images/map-jiangzhe.png',
      flag: 1,
      itemname: '江浙',
      show1: 0,
      show2: 0,
      show3: 0,
      show4: 0,
      show5: 0,
      show6: 1,
    })
    app.globalData.musicflag = 6;
    console.log(app.globalData.musicflag)
  },

  bindEnterTap:function() {
    if (this.data.flag) {
      console.log('123')
      wx.switchTab({
        url: '../index/index',
      })
    }
    else {
      wx.showModal({
        cancelColor: 'cancelColor',
        title: '提示',
        content: '请先选择您想了解的地域'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})