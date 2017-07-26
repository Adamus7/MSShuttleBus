Page({
  data: {
    markers: [{
      iconPath: "/resource/icon/marker.png",
      id: 0,
      latitude: 31.020343,
      longitude: 121.450575,
      width: 30,
      height: 50
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})