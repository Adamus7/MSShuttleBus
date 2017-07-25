// bus.js
var app = getApp()

Page({
  data: {
    targetBus: 0
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
    console.log(option.type)
    app.getShuttlBusList(function (ShuttleBusList) {
      //更新数据
      switch (option.type) {
        case 'r':
          that.setData({
            targetBus: ShuttleBusList.RegularRouteShuttle[option.id]
          })
          break
        case 'ws':
          that.setData({
            targetBus: ShuttleBusList.WeekendShuttle[option.id]
          })
          break
        case 'ph':
          that.setData({
            targetBus: ShuttleBusList.PublicHolidayShuttle[option.id]
          })
          break
      }
    })
  },
  onLikeTap: function (e) {
    var that = this
    console.log("onLikeTab")
    // wx.setStorage({
    //   key: "likedRegularRoute",
    //   data: "value"
    // })
    // wx.setStorage({
    //   key: 'likedRegularRoute',
    //   data: [that.data.targetBus]
    // })
    wx.getStorage({
      key: 'likedRegularRoute',
      success: function (res) {
        var data = res.data
        console.log(data)
        console.log(that.data.targetBus)
        if (!data.includes(that.data.targetBus)) {
          //data.push(that.data.targetBus)
          // wx.setStorage({
          //   key: 'likedRegularRoute',
          //   data: data
          // })
        }
      },
      fail: function () {
        wx.setStorage({
          key: 'likedRegularRoute',
          data: [that.data.targetBus]
        })
      }
    })
  }
})