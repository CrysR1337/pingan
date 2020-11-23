// miniprogram/pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'cloud://database-37af44.6461-database-37af44-1258823439/backg1.png',
      'cloud://database-37af44.6461-database-37af44-1258823439/backg2.png',
      'cloud://database-37af44.6461-database-37af44-1258823439/backg3.png'
    ],
    title: [
      "地域印象",
      "民乐地图",
      "曲调介绍"
    ],
    favsrc: '../../images/fav.png',
    readsrc: '../../images/read.png',
    likeflag: 1,
    stopflag: 1
  },

  bindNextTap:function() {
    wx.navigateTo({
      url: '../home/home',
    })
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