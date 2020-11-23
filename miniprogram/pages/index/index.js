var app = getApp()
const innerAudioContext = wx.createInnerAudioContext()

const time = []
for (let i = 0; i <= 60; i=i+15) {
  time.push(i)
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      ''
    ],
    title: [
      "新疆风情",
      "内蒙风情",
      "延边风情",
      "西藏风情",
      "云南风情",
      "江浙风情"
    ],
    content1: [
      "丰富多样的旋律调式",
      "蒙古族的长调音乐结构自由，",
      "伽倻琴和长鼓，",
      "藏族传统乐器碧旺的演奏",
      "葫芦丝，",
      "丝竹音乐流传于江浙一带，"
    ],
    content2: [
      "给新疆音乐带来异域、",
      "配合传统乐器马头琴的演奏， ",
      "是聚居在延边的朝鲜族人民",
      "伴随颂钵的轻轻敲打，",
      "作为云南少数民族特色乐器，",
      "音色纤细、节奏平稳，"
    ],
    content3: [
      "神秘的色彩、",
      "曲调绵长起伏，",
      "常用的民族乐器。",
      "这是来自雪域高原的声音。",
      "音色圆润婉转，",
      "以曲笛为代表的"
    ],
    content4: [
      " ",
      " 音色婉转悠扬。",
      "在鼓点和琴声的伴随下，",
      " ",
      "适合演奏流畅抒情的民族小调。",
      "丝竹类乐器更显其特色。"
    ],
    content5: [
      "聆听维族传统乐器",
      " ",
      " ",
      "细细聆听，",
      " ",
      " "
    ],
    content6: [
      "艾捷克和都塔尔的演奏，",
      "尽情放松，",
      "聆听民间曲调，",
      "净化心灵，净化自我。",
      "闭上眼睛，",
      "伴随流水声，"
    ],
    content7: [
      "感受浓郁的西域风情。",
      "让心灵驰骋在辽阔的大草原上。",
      "体验延边风情。",
      " ",
      "感受苍山洱海的纯净高远。",
      "沉浸于江南水乡的宁静与平和。"
    ],
    musicsrc: "cloud://database-37af44.6461-database-37af44-1258823439/out0.mp3",
    sliderValue: 0, //控制进度条slider的值
    readsrc: '../../images/stop.png',
    loopsrc: '../../images/back.png',
    likesrc: '../../images/like.png',
    timesrc: '../../images/time.png',
    likeflag: 1,
    stopflag: 1,
    timeflag: 0,
    time,
    times: 15,
    place: undefined
  },

  //picker-view选择的时间信息
  bindChange(e) {
    const val = e.detail.value
    this.setData({
      times: this.data.time[val[0]]
    })
  },

  //返回风情区域选择页面
  bindBack:function() {
    wx.navigateTo({
      url: '../home/home',
    })
  },

  //切换到选择时长页面
  bindTime:function() {
    if(this.data.timeflag)
    {
      this.setData({
        timeflag: 0
      })
    }
    else {
      this.setData({
        timeflag: 1
      })
    }
  },

  //目前没有没有实际使用，用来控制音乐播放的进度条
  sliderChange(e) {
    innerAudioContext.pause()
    innerAudioContext.seek(e.detail.value / 100 * innerAudioContext.duration); //完成拖动后，计算对应时间并跳转到指定位置
    innerAudioContext.play() //完成拖动后播放视频
    var that = this
    that.setData({
      sliderValue: e.detail.value,
    })
    console.log(6666)
  },

  //爱心按钮切换功能，目前未提供变换的素材
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

  //播放暂停切换
  bindPlay: function(e) {
    console.log('in')
    if(this.data.readsrc == '../../images/play.png') {
      innerAudioContext.play()
      this.setData ({
        readsrc: '../../images/stop.png'
      })
      innerAudioContext.onPlay(() => {
        console.log('开始播放')
      })
      innerAudioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
    }
    else{
      innerAudioContext.pause()
      this.setData ({
        readsrc: '../../images/play.png'
      })
      innerAudioContext.onPause(
        () =>{
          console.log('停止播放')
          console.log("current",innerAudioContext.currentTime)
          console.log("duration",innerAudioContext.duration)
        }
      )
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData ({
      stopflag: 1,
      likeflag: 1
    })
    
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
    innerAudioContext.autoplay = true
    this.setData({
      place: app.globalData.musicflag-1
    })
    //接收来自地区选择页面的数据，并设置背景图、地区名
    switch ( app.globalData.musicflag ) {
      case 1:
        console.log("新疆");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/xj-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Xinjiang.png',
        })
        break;
      case 2:
        console.log("蒙古");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/north-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Neimeng.png',
        })
        break;
      case 3:
        console.log("延边");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/ne-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Yanbian.png',
        })
        break;
      case 4:
        console.log("西藏");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/tibet-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Tibet.png'
        })
        break;
      case 5:
        console.log("云南");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/yunnan-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Yunnan.png',
        })
        break;
      case 6:
        console.log("江浙");
        innerAudioContext.src = 'cloud://database-37af44.6461-database-37af44-1258823439/music/se-music.mp3'
        this.setData ({
          imgUrls: 'cloud://database-37af44.6461-database-37af44-1258823439/backg/Background-Jiangzhe.png'
        })
        break;
      case undefined:
        console.log("var exp");
        break;
      default:
        console.log("default");
      }
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