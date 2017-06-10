// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{
      id: '1',
      start: '徐家汇',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '2',
      start: '成山路',
      destination: '微软紫竹园区'
    }, {
      id: '3',
      start: '世纪公园',
      destination: '微软紫竹园区'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  ,

  onBusSectionTap: function (e) {
    wx.navigateTo({
      url: '../bus/bus?id=' + e.currentTarget.id
    })
  }
})