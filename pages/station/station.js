let app = getApp()
Page({
  data: {
    latitude: 0,
    longitude: 0,
    markers: [{}],
    hasMarkers: false
  },
  onLoad(option) {
    var that = this
    app.getLocationList(function (LocationList) {
      let stationInfo = LocationList.find(obj => obj.name == "Test");
      let mark = {}
      mark.id = 0;
      mark.iconPath = "/resource/icon/marker.png";
      mark.latitude = stationInfo.latitude;
      mark.longiude = stationInfo.longitude;
      mark.width = 50;
      mark.height = 50;
      let tmpMarkers = [mark];
      that.setData({
        latitude: stationInfo.latitude,
        longitude: stationInfo.longitude,
        markers: tmpMarkers,
        hasMarkers: true
      })
      console.log(that.data.markers);

    })
  },
  onTap(e) {
    console.log(e)
  },
})