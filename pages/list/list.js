// list.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  onBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?id=' + e.currentTarget.id
    })
  }
})