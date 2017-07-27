// mine.js
var app = getApp()
Page({
  data: {
    likedBusList:0,
    ShuttleBusList:[]
  },
  onLoad: function (options) {
    var that = this
    app.getShuttlBusList(function (ShuttleBusList) {
      that.setData({
        ShuttleBusList: ShuttleBusList
      })
    })
  },
  onShow: function () {
    var that = this
    wx.getStorage({
      key: 'likedRoute',
      success: function (res) {
      that.setData({
        likedBusList:res.data
      })
      }
    })
  },

  onBusSectionTap: function (e) {
    var that  = this
    
    var currentTargetBus = that.data.likedBusList[e.currentTarget.id]
    var ShuttleBusList = that.data.ShuttleBusList
    var idx = -1
    for (var i = 0; i < ShuttleBusList.length; i++) {
      if (ShuttleBusList[i].id == currentTargetBus.id && ShuttleBusList[i].type == currentTargetBus.type) {
        idx = i
        break
      }
    }
    wx.navigateTo({
      url: '../bus/bus?id=' + idx
    })
  }
})