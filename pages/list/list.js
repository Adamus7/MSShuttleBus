// list.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ShuttleBusList:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("list load")
    var that = this
    //调用应用实例的方法获取全局数据
    app.getShuttlBusList(function (ShuttleBusList) {
      //更新数据
      that.setData({
        ShuttleBusList: ShuttleBusList
      })
    })
  },
  onBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?type=r&id=' + e.currentTarget.id
    })
  },
  onRTBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus-rt/bus-rt?id=' + e.currentTarget.id
    })
  },
  onWSBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?type=ws&id=' + e.currentTarget.id
    })
  },
  onPHBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?type=ph&id=' + e.currentTarget.id
    })
  }
})