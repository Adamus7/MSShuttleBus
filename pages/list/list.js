// list.js

var app = getApp()

Page({
  // Init data
  data: {
    ShuttleBusList: [],
    //Search Bar
    inputShowed: false,
    searchVal: ""
  },
  onLoad: function (options) {
    var that = this
    app.getShuttlBusList(function (ShuttleBusList) {
      var busList = ShuttleBusList;
      for (var i = 0; i < busList.length; i++) {
        busList[i].found = true;
      }
      that.setData({
        ShuttleBusList: busList
      })
    })
  },
  onBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?id=' + e.currentTarget.id
    })
  },
  //Search
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    let busList = this.data.ShuttleBusList;
    for (let i = 0; i < busList.length; i++) {
      busList[i].found = true;
    }
    this.setData({
      searchVal: "",
      inputShowed: false,
      ShuttleBusList: busList
    });
  },
  clearInput: function () {
    let busList = this.data.ShuttleBusList;
    for (let i = 0; i < busList.length; i++) {
      busList[i].found = true;
    }
    this.setData({
      ShuttleBusList: busList,
      searchVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      searchVal: e.detail.value
    });
    var busList = this.data.ShuttleBusList;
    for (var i = 0; i < busList.length;i++){
      if (JSON.stringify(busList[i]).indexOf(e.detail.value)>-1){
        busList[i].found = true;
      }else{
        busList[i].found = false;
      }
    }
    this.setData({
      ShuttleBusList: busList
    });
  }
})