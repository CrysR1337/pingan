Component({
  data: {
    selected: 0,
    color: "#fff",
    selectedColor: "#3cc51f",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "冥想",
      "iconPath": "../images/think.png",
      "selectedIconPath": "../images/think.png"
    },
    {
      "pagePath": "/pages/user/user",
      "text": "空间",
      "iconPath": "../images//home.png",
      "selectedIconPath": "../images/home.png"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})