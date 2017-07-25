// bus.js
var app = getApp()

Page({
  data: {
    targetBus: 0
  },
  onLoad: function (option) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getShuttlBusList(function (ShuttleBusList) {
      //更新数据
      that.setData({
        targetBus: ShuttleBusList.RoundTripShuttle[option.id]
      })
    })

  }
})