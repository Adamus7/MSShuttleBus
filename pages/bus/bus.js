// bus.js
var app = getApp()

Page({
  data: {
    targetBus: 0,
    isLiked: false,
    idx:0
  },
  onLoad: function (option) {
    var that = this
    app.getShuttlBusList(function (ShuttleBusList) {
      that.setData({
        targetBus: ShuttleBusList[option.id],
        idx: option.id
      })
    })

    wx.getStorage({
      key: 'likedRoute',
      success: function (res) {
        var data = res.data
        var targetBus = that.data.targetBus

        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == targetBus.id && data[i].type == targetBus.type) {
            found = true;
            that.setData({
              isLiked: true
            })
            break;
          }
        }

      }

    })
  },

  onLikeTap: function (e) {
    var that = this

    wx.getStorage({
      key: 'likedRoute',
      success: function (res) {
        var data = res.data
        var targetBus = that.data.targetBus

        //Check if targetBus is in Liked array
        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id == targetBus.id && data[i].type == targetBus.type) {
            found = true;
            //If found, remoted it from the Liked array
            //Set isLiked to false 
            data.splice(i, 1);
            wx.setStorage({
              key: 'likedRoute',
              data: data
            })
            that.setData({
              isLiked: false
            })
            break;
          }
        }

        //If not found, add it
        if (!found) {
          data.push(targetBus)
          wx.setStorage({
            key: 'likedRoute',
            data: data
          })
          that.setData({
            isLiked: true
          })
        }

      },
      //If can't get it, set the current one into Liked list
      fail: function () {
        wx.setStorage({
          key: 'likedRoute',
          data: [that.data.targetBus]
        })
      }
    })
  },

  onStationSectionTap: function(e){
    wx.navigateTo({
      url: '../station/station'
    })
  },
  onShareAppMessage: function(){
    var that = this
    //console.log(that.data.idx)
    return {
      title: that.data.targetBus.name,
      path: '/pages/bus/bus?id=' + that.data.idx,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})