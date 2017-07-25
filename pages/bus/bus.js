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
      switch(option.type){
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

  }
})