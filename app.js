//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)
    console.log("test")
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getShuttlBusList:function(cb){
    var that = this
    if (this.globalData.ShuttleBusList) {
      typeof cb == "function" && cb(this.globalData.ShuttleBusList)
    }
  },
  globalData:{
    userInfo:null,
    ShuttleBusList: [
      {
        id: 1,
        type: 'RoundTripShuttle',
        name: '徐家汇 - 微软上海园区',
        start: '徐家汇',
        destination: '微软上海园区',
        ups: {
          'up-1': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '06:15'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '06:18'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '06:55'
            }
          ],
          'up-2': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '07:00'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '07:03'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '07:40'
            }
          ],
          'up-3': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '07:30'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '07:33'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '08:10'
            }
          ],
          'up-4': [
            {
              id: 1,
              name: '静安寺愚园路',
              time: '07:40'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '08:05'
            },
            {
              id: 3,
              name: '虹桥路宜山路',
              time: '08:08'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '09:00'
            }
          ],
          'up-5': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '08:15'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '08:18'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:10'
            }
          ],
          'up-6': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '08:30'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '08:33'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:25'
            }
          ],
          'up-7': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '08:45'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '08:48'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:38'
            }
          ],
          'up-8': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '09:00'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '09:03'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:40'
            }
          ],
          'up-9': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '09:15'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '09:18'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:55'
            }
          ],
          'up-10': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '09:30'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '09:33'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '10:10'
            }
          ],
          'up-11': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '10:00'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '10:03'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '10:40'
            }
          ],
          'up-12': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '11:00'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '11:03'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '11:40'
            }
          ],
          'up-14': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '12:30'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '12:33'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '13:10'
            }
          ],
          'up-15': [
            {
              id: 1,
              name: '虹桥路恭城路',
              time: '15:30'
            },
            {
              id: 2,
              name: '虹桥路宜山路',
              time: '15:33'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '16:10'
            }
          ]
        },
        downs: {
          'down-1': [
            {
              id: 1,
              name: '微软上海园区',
              time: '12:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '13:30'
            }
          ],
          'downs-2': [
            {
              id: 1,
              name: '微软上海园区',
              time: '14:00'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '15:00'
            }
          ],
          'downs-3': [
            {
              id: 1,
              name: '微软上海园区',
              time: '15:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '14:30'
            }
          ],
          'downs-4': [
            {
              id: 1,
              name: '微软上海园区',
              time: '16:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '17:30'
            }
          ],
          'downs-5': [
            {
              id: 1,
              name: '微软上海园区',
              time: '17:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '18:30'
            }
          ],
          'downs-6': [
            {
              id: 1,
              name: '微软上海园区',
              time: '17:40'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '18:40'
            }
          ],
          'downs-7': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:00'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '18:55'
            },
            {
              id: 3,
              name: '虹桥路恭城路',
              time: '19:10'
            }
          ],
          'downs-8': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '19:30'
            }
          ],
          'downs-9': [
            {
              id: 1,
              name: '微软上海园区',
              time: '19:00'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '20:00'
            }
          ],
          'downs-10': [
            {
              id: 1,
              name: '微软上海园区',
              time: '19:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '20:30'
            }
          ],
          'downs-11': [
            {
              id: 1,
              name: '微软上海园区',
              time: '20:30'
            },
            {
              id: 2,
              name: '虹桥路恭城路',
              time: '21:30'
            }
          ]
        }
      },
      {
        id: 2,
        type: 'RoundTripShuttle',
        name: '莲花路地铁站（南广场) - 微软上海园区',
        start: '莲花路地铁站',
        destination: '微软上海园区',
        ups: {
          'up-1': [
            {
              id: 1,
              name: '莲花路地铁站（南广场）',
              time: '06:15'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '06:18'
            },
            {
              id: 3,
              name: '上海春城',
              time: '06:23'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '06:50'
            }
          ],
          'up-2': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '07:15'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '07:18'
            },
            {
              id: 3,
              name: '上海春城',
              time: '07:23'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '07:50'
            }
          ],
          'up-3': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '07:50'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '07:53'
            },
            {
              id: 3,
              name: '上海春城',
              time: '07:58'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '08:33'
            }
          ],
          'up-4': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '08:20'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '08:23'
            },
            {
              id: 3,
              name: '上海春城',
              time: '08:28'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '09:03'
            }
          ],
          'up-5': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '08:40'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '08:43'
            },
            {
              id: 3,
              name: '上海春城',
              time: '08:48'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '09:25'
            }
          ],
          'up-6': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '09:15'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '09:18'
            },
            {
              id: 3,
              name: '上海春城',
              time: '09:23'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '09:50'
            }
          ],
          'up-7': [
            {
              id: 1,
              name: '莲花路地铁站南广场',
              time: '10:15'
            },
            {
              id: 2,
              name: '莲花南路罗锦路',
              time: '10:18'
            },
            {
              id: 3,
              name: '上海春城',
              time: '10:23'
            },
            {
              id: 4,
              name: '微软上海园区',
              time: '10:40'
            }
          ]
        },
        downs: {
          'down-1': [
            {
              id: 1,
              name: '微软上海园区',
              time: '16:30'
            },
            {
              id: 2,
              name: '上海春城',
              time: '17:05'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '17:10'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '17:13'
            }
          ],
          'downs-2': [
            {
              id: 1,
              name: '微软上海园区',
              time: '17:30'
            },
            {
              id: 2,
              name: '上海春城',
              time: '18:05'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '18:08'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '18:13'
            }
          ],
          'downs-3': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:00'
            },
            {
              id: 2,
              name: '上海春城',
              time: '18:35'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '18:38'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '18:43'
            }
          ],
          'downs-4': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:45'
            },
            {
              id: 2,
              name: '上海春城',
              time: '19:20'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '19:25'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '19:28'
            }
          ],
          'downs-5': [
            {
              id: 1,
              name: '微软上海园区',
              time: '19:30'
            },
            {
              id: 2,
              name: '上海春城',
              time: '20:05'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '20:10'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '20:13'
            }
          ],
          'downs-6': [
            {
              id: 1,
              name: '微软上海园区',
              time: '20:15'
            },
            {
              id: 2,
              name: '上海春城',
              time: '20:50'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '20:55'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '20:58'
            }
          ],
          'downs-7': [
            {
              id: 1,
              name: '微软上海园区',
              time: '21:00'
            },
            {
              id: 2,
              name: '上海春城',
              time: '21:35'
            },
            {
              id: 3,
              name: '莲花南路罗锦路',
              time: '21:40'
            },
            {
              id: 4,
              name: '莲花路地铁站南广场',
              time: '21:43'
            }
          ]
        }
      },
      {
        id: 3,
        type: 'RoundTripShuttle',
        name: '莘庄地铁站（北广场） - 微软上海园区',
        start: '莘庄地铁站（北广场）',
        destination: '微软上海园区',
        ups: {
          'up-1': [
            {
              id: 1,
              name: '莘庄地铁站（北广场）',
              time: '08:15'
            },
            {
              id: 2,
              name: '微软上海园区',
              time: '08:40'
            }
          ],
          'up-2': [
            {
              id: 1,
              name: '龙茗路顾戴路',
              time: '08:15'
            },
            {
              id: 2,
              name: '龙茗路古美西路',
              time: '08:20'
            },
            {
              id: 3,
              name: '莘庄地铁站（北广场）',
              time: '08:45'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '08:45'
            },
            {
              id: 5,
              name: '都市路春申路',
              time: '08:56'
            },
            {
              id: 6,
              name: '都市路银都路',
              time: '09:02'
            },
            {
              id: 7,
              name: '微软上海园区',
              time: '09:31'
            }
          ],
          'up-3': [
            {
              id: 1,
              name: '莘庄地铁站（北广场）',
              time: '11:00'
            },
            {
              id: 2,
              name: '名都路宝城路',
              time: '11:08'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '11:25'
            }
          ]
        },
        downs: {
          'down-1': [
            {
              id: 1,
              name: '微软上海园区',
              time: '15:15'
            },
            {
              id: 2,
              name: '都市路银都路',
              time: '15:37'
            },
            {
              id: 3,
              name: '都市路春申路',
              time: '15:40'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '15:45'
            },
            {
              id: 5,
              name: '莘庄地铁站（北广场）',
              time: '15:50'
            },
            {
              id: 6,
              name: '龙茗路古美西路',
              time: '15:55'
            },
            {
              id: 7,
              name: '龙茗路顾戴路',
              time: '16:00'
            }
          ],
          'downs-2': [
            {
              id: 1,
              name: '微软上海园区',
              time: '16:00'
            },
            {
              id: 2,
              name: '都市路银都路',
              time: '16:22'
            },
            {
              id: 3,
              name: '都市路春申路',
              time: '16:25'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '16:30'
            },
            {
              id: 5,
              name: '莘庄地铁站（北广场）',
              time: '16:35'
            },
            {
              id: 6,
              name: '龙茗路古美西路',
              time: '16:40'
            },
            {
              id: 7,
              name: '龙茗路顾戴路',
              time: '16:45'
            }
          ],
          'downs-3': [
            {
              id: 1,
              name: '微软上海园区',
              time: '17:00'
            },
            {
              id: 2,
              name: '都市路银都路',
              time: '17:23'
            },
            {
              id: 3,
              name: '都市路春申路',
              time: '17:25'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '17:30'
            },
            {
              id: 5,
              name: '莘庄地铁站（北广场）',
              time: '17:35'
            },
            {
              id: 6,
              name: '龙茗路古美西路',
              time: '17:40'
            },
            {
              id: 7,
              name: '龙茗路顾戴路',
              time: '17:45'
            }
          ],
          'downs-4': [
            {
              id: 1,
              name: '微软上海园区',
              time: '19:00'
            },
            {
              id: 2,
              name: '都市路银都路',
              time: '19:23'
            },
            {
              id: 3,
              name: '都市路春申路',
              time: '19:25'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '19:30'
            },
            {
              id: 5,
              name: '莘庄地铁站（北广场）',
              time: '19:35'
            },
            {
              id: 6,
              name: '龙茗路古美西路',
              time: '19:40'
            },
            {
              id: 7,
              name: '龙茗路顾戴路',
              time: '19:45'
            }
          ],
          'downs-5': [
            {
              id: 1,
              name: '微软上海园区',
              time: '20:00'
            },
            {
              id: 2,
              name: '都市路银都路',
              time: '20:23'
            },
            {
              id: 3,
              name: '都市路春申路',
              time: '20:25'
            },
            {
              id: 4,
              name: '名都路宝城路',
              time: '20:30'
            },
            {
              id: 5,
              name: '莘庄地铁站（北广场）',
              time: '20:35'
            },
            {
              id: 6,
              name: '龙茗路古美西路',
              time: '20:40'
            },
            {
              id: 7,
              name: '龙茗路顾戴路',
              time: '20:45'
            }
          ]
        }
      },
      {
        id: 4,
        type: 'RoundTripShuttle',
        name: '东川路地铁站 - 微软上海园区',
        start: '东川路地铁站',
        destination: '微软上海园区',
        ups: {
          'up-1': [
            {
              id: 1,
              name: '东川路地铁站',
              time: '08:10'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '08:15'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '08:20'
            }
          ],
          'up-2': [
            {
              id: 1,
              name: '东川路地铁站',
              time: '08:40'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '08:45'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '08:50'
            }
          ],
          'up-3': [
            {
              id: 1,
              name: '东川路地铁站',
              time: '09:10'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '09:15'
            },
            {
              id: 3,
              name: '微软上海园区',
              time: '09:20'
            }
          ]
        },
        downs: {
          'down-1': [
            {
              id: 1,
              name: '微软上海园区',
              time: '17:30'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '17:38'
            },
            {
              id: 3,
              name: '东川路地铁站',
              time: '17:43'
            }
          ],
          'downs-2': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:00'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '18:08'
            },
            {
              id: 3,
              name: '东川路地铁站',
              time: '18:13'
            }
          ],
          'downs-3': [
            {
              id: 1,
              name: '微软上海园区',
              time: '18:30'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '18:38'
            },
            {
              id: 3,
              name: '东川路地铁站',
              time: '18:43'
            }
          ],
          'downs-4': [
            {
              id: 1,
              name: '微软上海园区',
              time: '19:30'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '19:38'
            },
            {
              id: 3,
              name: '东川路地铁站',
              time: '19:43'
            }
          ],
          'downs-5': [
            {
              id: 1,
              name: '微软上海园区',
              time: '20:30'
            },
            {
              id: 2,
              name: '东川路沧源路',
              time: '20:38'
            },
            {
              id: 3,
              name: '东川路地铁站',
              time: '20:43'
            }
          ]
        }
      },
      {
        id: 5,
        type: 'RoundTripShuttle',
        name: '沈杜公路地铁站 - 微软上海园区',
        start: '沈杜公路地铁站',
        destination: '微软上海园区',
        ups: {
          'up-1': [
            {
              id: 1,
              name: '深度公路地铁站',
              time: '09:30'
            },
            {
              id: 2,
              name: '微软上海园区',
              time: '09:58'
            }
          ]
        },
        downs: {
          'down-1': [
            {
              id: 1,
              name: '微软上海园区',
              time: '16:35'
            },
            {
              id: 2,
              name: '深度公路地铁站',
              time: '16:55'
            }
          ]
        }
      },
      {
        id: 1,
        type: 'RegularRouteShuttle',
        name: '东陆路 - 微软上海园区',
        start: '东陆路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '东陆路',
            time: '07:20'
          },
          {
            id: 2,
            name: '张杨路五莲路',
            time: '07:25'
          },
          {
            id: 3,
            name: '张杨北路长岛路',
            time: '07:30'
          },
          {
            id: 4,
            name: '居家桥路',
            time: '07:35'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:47'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '居家桥路',
            time: '18:35'
          },
          {
            id: 3,
            name: '张杨北路长岛路',
            time: '18:40'
          },
          {
            id: 4,
            name: '张杨路五莲路',
            time: '18:44'
          },
          {
            id: 5,
            name: '东陆路',
            time: '18:49'
          }
        ]
      },
      {
        id: 2,
        type: 'RegularRouteShuttle',
        name: '张杨路民生路 - 微软上海园区',
        start: '张杨路民生路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '张杨路民生路',
            time: '07:35'
          },
          {
            id: 2,
            name: '浦电路地铁站',
            time: '07:45'
          },
          {
            id: 3,
            name: '杨高南路三林路',
            time: '08:05'
          },
          {
            id: 4,
            name: '浦江镇',
            time: '08:26'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:50'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '浦江镇',
            time: '17:54'
          },
          {
            id: 3,
            name: '杨高南路三林路',
            time: '18:20'
          },
          {
            id: 4,
            name: '世纪大道地铁站',
            time: '18:39'
          },
          {
            id: 5,
            name: '张杨路民生路',
            time: '18:45'
          }
        ]
      },
      {
        id: 3,
        type: 'RegularRouteShuttle',
        name: '东陆路 - 微软上海园区',
        start: '东陆路',
        destination: '微软上海园区',
        up: null,
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:15'
          },
          {
            id: 2,
            name: '永泰路三林公交站',
            time: '19:00'
          },
          {
            id: 3,
            name: '由由新村',
            time: '19:20'
          },
          {
            id: 4,
            name: '世纪大道地铁站',
            time: '19:35'
          },
          {
            id: 5,
            name: '居家桥路',
            time: '19:50'
          },
          {
            id: 6,
            name: '张杨北路长岛路',
            time: '19:55'
          },
          {
            id: 7,
            name: '东陆路',
            time: '20:05'
          }
        ]
      },
      {
        id: 5,
        type: 'RegularRouteShuttle',
        name: '东方路蓝村路 - 微软上海园区',
        start: '东方路蓝村路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '东方路蓝村路',
            time: '07:50'
          },
          {
            id: 2,
            name: '由由新村',
            time: '07:55'
          },
          {
            id: 3,
            name: '联航路地铁站',
            time: '08:26'
          },
          {
            id: 4,
            name: '沈杜公路地铁站',
            time: '08:28'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '沈杜公路地铁站',
            time: '18:28'
          },
          {
            id: 3,
            name: '联航路地铁站',
            time: '18:30'
          },
          {
            id: 4,
            name: '由由新村',
            time: '19:00'
          },
          {
            id: 5,
            name: '东方路蓝村路',
            time: '19:10'
          }
        ]
      },
      {
        id: 6,
        type: 'RegularRouteShuttle',
        name: '唐安路唐镇路 - 微软上海园区',
        start: '唐安路唐镇路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '唐安路唐镇路',
            time: '07:15'
          },
          {
            id: 2,
            name: '张江路建中路',
            time: '07:35'
          },
          {
            id: 3,
            name: '郭守敬路张江路',
            time: '07:40'
          },
          {
            id: 4,
            name: '金科路祖冲之路',
            time: '07:45'
          },
          {
            id: 5,
            name: '科苑路华佗路',
            time: '07:50'
          },
          {
            id: 6,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '科苑路华佗路',
            time: '18:45'
          },
          {
            id: 3,
            name: '金科路祖冲之路',
            time: '18:40'
          },
          {
            id: 4,
            name: '郭守敬路张江路',
            time: '18:35'
          },
          {
            id: 5,
            name: '张江路建中路',
            time: '18:30'
          },
          {
            id: 6,
            name: '唐安路唐镇路',
            time: '18:15'
          }
        ]
      },
      {
        id: 7,
        type: 'RegularRouteShuttle',
        name: '世纪公园地铁站 - 微软上海园区',
        start: '世纪公园地铁站',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '世纪公园地铁站',
            time: '07:37'
          },
          {
            id: 2,
            name: '龙阳路地铁站',
            time: '07:45'
          },
          {
            id: 3,
            name: '成山路锦绣路',
            time: '07:55'
          },
          {
            id: 4,
            name: '龙吴路广南路',
            time: '08:45'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '龙吴路广南路',
            time: '17:45'
          },
          {
            id: 3,
            name: '成山路锦绣路',
            time: '18:20'
          },
          {
            id: 4,
            name: '龙阳路地铁站',
            time: '18:30'
          },
          {
            id: 5,
            name: '世纪公园地铁站',
            time: '18:45'
          }
        ]
      },
      {
        id: 8,
        type: 'RegularRouteShuttle',
        name: '微软上海园区 - 明月路白桦路',
        start: '微软上海园区',
        destination: '明月路白桦路',
        ups: null,
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:15'
          },
          {
            id: 2,
            name: '成山路锦绣路',
            time: '19:05'
          },
          {
            id: 3,
            name: '龙阳路地铁站',
            time: '19:15'
          },
          {
            id: 4,
            name: '郭守敬张江路',
            time: '19:25'
          },
          {
            id: 5,
            name: '明月路白桦路',
            time: '19:35'
          }
        ]
      },
      {
        id: 9,
        type: 'RegularRouteShuttle',
        name: '高科西路东明路 - 微软上海园区',
        start: '高科西路东明路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '高科西路东明路',
            time: '07:45'
          },
          {
            id: 2,
            name: '东明路昌里路',
            time: '07:48'
          },
          {
            id: 3,
            name: '上南路成山路',
            time: '07:55'
          },
          {
            id: 4,
            name: '上南路杨思路',
            time: '08:00'
          },
          {
            id: 5,
            name: '上南路杨南路',
            time: '08:05'
          },
          {
            id: 6,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '上南路杨南路',
            time: '18:50'
          },
          {
            id: 3,
            name: '上南路成山路',
            time: '19:00'
          },
          {
            id: 4,
            name: '东明路昌里路',
            time: '19:10'
          },
          {
            id: 5,
            name: '高科西路东明路',
            time: '19:13'
          },
          {
            id: 6,
            name: '世纪大道地铁站',
            time: '19:30'
          }
        ]
      },
      {
        id: 10,
        type: 'RegularRouteShuttle',
        name: '天宝路临平路 - 微软上海园区',
        start: '天宝路临平路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '天宝路临平路',
            time: '07:20'
          },
          {
            id: 2,
            name: '赤峰路曲阳路',
            time: '07:35'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '赤峰路曲阳路',
            time: '18:55'
          },
          {
            id: 3,
            name: '天宝路临平路',
            time: '19:10'
          }
        ]
      },
      {
        id: 11,
        type: 'RegularRouteShuttle',
        name: '黄兴路抚顺路 - 微软上海园区',
        start: '黄兴路抚顺路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '黄兴路抚顺路',
            time: '07:22'
          },
          {
            id: 2,
            name: '五角场',
            time: '07:32'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:53'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '五角场',
            time: '18:55'
          },
          {
            id: 3,
            name: '黄兴路抚顺路',
            time: '18:45'
          }
        ]
      },
      {
        id: 12,
        type: 'RegularRouteShuttle',
        name: '水产西路蕰川公路 - 微软上海园区',
        start: '水产西路蕰川公路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '水产西路蕰川公路',
            time: '07:25'
          },
          {
            id: 2,
            name: '通河路地铁站',
            time: '07:33'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '通河路地铁站',
            time: '18:58'
          },
          {
            id: 3,
            name: '水产西路蕰川公路',
            time: '19:06'
          }
        ]
      },
      {
        id: 13,
        type: 'RegularRouteShuttle',
        name: '共和新路大宁路 - 微软上海园区',
        start: '共和新路大宁路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '共和新路大宁路',
            time: '07:35'
          },
          {
            id: 2,
            name: '广中路广延路',
            time: '07:40'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '广中路广延路',
            time: '18:45'
          },
          {
            id: 3,
            name: '共和新路大宁路',
            time: '18:55'
          }
        ]
      },
      {
        id: 14,
        type: 'RegularRouteShuttle',
        name: '锦秋路（上海大学） - 微软上海园区',
        start: '锦秋路（上海大学）',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '锦秋路（上海大学）',
            time: '07:10'
          },
          {
            id: 2,
            name: '真华路新村路',
            time: '07:40'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '真华路新村路',
            time: '18:35'
          },
          {
            id: 3,
            name: '锦秋路（上海大学）',
            time: '18:55'
          }
        ]
      },
      {
        id: 15,
        type: 'RegularRouteShuttle',
        name: '曹杨路白玉路 - 微软上海园区',
        start: '曹杨路白玉路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '曹杨路白玉路',
            time: '07:35'
          },
          {
            id: 2,
            name: '曹杨八村',
            time: '07:40'
          },
          {
            id: 3,
            name: '真北路',
            time: '08:00'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '真北路',
            time: '18:25'
          },
          {
            id: 3,
            name: '曹杨八村',
            time: '18:40'
          },
          {
            id: 4,
            name: '曹杨路白玉路',
            time: '18:50'
          },
          {
            id: 5,
            name: '白玉路宁夏路',
            time: '18:55'
          }
        ]
      },
      {
        id: 16,
        type: 'RegularRouteShuttle',
        name: '叶家宅路 - 微软上海园区',
        start: '叶家宅路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '叶家宅路',
            time: '07:30'
          },
          {
            id: 2,
            name: '中山公里',
            time: '07:50'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '中山公里',
            time: '19:05'
          },
          {
            id: 3,
            name: '叶家宅路',
            time: '19:25'
          }
        ]
      },
      {
        id: 17,
        type: 'RegularRouteShuttle',
        name: '天山路天中路 - 微软上海园区',
        start: '天山路天中路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '天山路天中路',
            time: '07:55'
          },
          {
            id: 2,
            name: '威宁路',
            time: '08:00'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '威宁路',
            time: '18:40'
          },
          {
            id: 3,
            name: '天山路天中路',
            time: '18:50'
          }
        ]
      },
      {
        id: 18,
        type: 'RegularRouteShuttle',
        name: '人民广场 - 微软上海园区',
        start: '人民广场',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '人民广场',
            time: '07:40'
          },
          {
            id: 2,
            name: '西藏南路大林路',
            time: '07:50'
          },
          {
            id: 3,
            name: '徐家汇路局门路',
            time: '07:55'
          },
          {
            id: 4,
            name: '芦恒路地铁站',
            time: '08:18'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:18'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '芦恒路地铁站',
            time: '18:35'
          },
          {
            id: 3,
            name: '徐家汇路局门路',
            time: '19:00'
          },
          {
            id: 4,
            name: '西藏南路陆家浜路',
            time: '19:10'
          },
          {
            id: 5,
            name: '西藏南路大林路',
            time: '19:20'
          },
          {
            id: 6,
            name: '人民广场',
            time: '19:25'
          }
        ]
      },
      {
        id: 19,
        type: 'RegularRouteShuttle',
        name: '宜山路桂林路 - 微软上海园区',
        start: '宜山路桂林路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '宜山路桂林路',
            time: '08:00'
          },
          {
            id: 2,
            name: '柳州路浦北路',
            time: '08:10'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '柳州路浦北路',
            time: '18:45'
          },
          {
            id: 3,
            name: '桂林路漕宝路',
            time: '18:51'
          },
          {
            id: 4,
            name: '宜山路桂林路',
            time: '18:55'
          }
        ]
      },
      {
        id: 21,
        type: 'RegularRouteShuttle',
        name: '万源路顾戴路 - 微软上海园区',
        start: '万源路顾戴路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '万源路顾戴路',
            time: '07:52'
          },
          {
            id: 2,
            name: '龙茗路顾戴路',
            time: '08:00'
          },
          {
            id: 3,
            name: '龙茗路古美西路',
            time: '08:05'
          },
          {
            id: 4,
            name: '名都路宝城路',
            time: '08:30'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:53'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '名都路宝城路',
            time: '18:30'
          },
          {
            id: 3,
            name: '龙茗路古美西路',
            time: '18:40'
          },
          {
            id: 4,
            name: '龙茗路顾戴路',
            time: '18:45'
          },
          {
            id: 5,
            name: '万源路顾戴路',
            time: '18:53'
          }
        ]
      },
      {
        id: 22,
        type: 'RegularRouteShuttle',
        name: '水清路报春路 - 微软上海园区',
        start: '水清路报春路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '水清路报春路',
            time: '07:55'
          },
          {
            id: 2,
            name: '都市路春申路',
            time: '08:16'
          },
          {
            id: 3,
            name: '都市路银都路',
            time: '08:20'
          },
          {
            id: 4,
            name: '都市路都市支路',
            time: '08:25'
          },
          {
            id: 5,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '沪闵路颛桥地铁站',
            time: '18:25'
          },
          {
            id: 3,
            name: '都市路都市支路',
            time: '18:30'
          },
          {
            id: 4,
            name: '都市路银都路',
            time: '18:35'
          },
          {
            id: 5,
            name: '都市路春申路',
            time: '18:49'
          },
          {
            id: 6,
            name: '莘庄地铁站（北广场）',
            time: '18:59'
          },
          {
            id: 7,
            name: '水清路报春路',
            time: '19:04'
          }
        ]
      },
      {
        id: 23,
        type: 'RegularRouteShuttle',
        name: '明中路明兴路 - 微软上海园区',
        start: '明中路明兴路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '明中路明兴路',
            time: '08:06'
          },
          {
            id: 2,
            name: '华宁路银康路',
            time: '08:36'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:55'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '华宁路银康路',
            time: '18:30'
          },
          {
            id: 3,
            name: '明中路明兴路',
            time: '19:20'
          }
        ]
      },
      {
        id: 32,
        type: 'RegularRouteShuttle',
        name: '锦绣路东建路 - 微软上海园区',
        start: '锦绣路东建路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '锦绣路东建路',
            time: '07:30'
          },
          {
            id: 2,
            name: '芳甸路丁香路',
            time: '07:40'
          },
          {
            id: 3,
            name: '永泰路三林公交站',
            time: '08:05'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '08:48'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '永泰路三林公交站',
            time: '18:15'
          },
          {
            id: 3,
            name: '芳甸路丁香路',
            time: '18:40'
          },
          {
            id: 4,
            name: '锦绣路东建路',
            time: '18:50'
          }
        ]
      },
      {
        id: 33,
        type: 'RegularRouteShuttle',
        name: '大柏树三号线地铁站 - 微软上海园区',
        start: '大柏树三号线地铁站',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '大柏树三号线地铁站',
            time: '07:15'
          },
          {
            id: 2,
            name: '控江路双辽路',
            time: '07:35'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '控江路双辽路',
            time: '18:45'
          },
          {
            id: 3,
            name: '大柏树三号线地铁站',
            time: '19:15'
          }
        ]
      },
      {
        id: 34,
        type: 'RegularRouteShuttle',
        name: '金丰路运乐路 - 微软上海园区',
        start: '金丰路运乐路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '金丰路运乐路',
            time: '08:04'
          },
          {
            id: 2,
            name: '金丰路幸乐路',
            time: '08:07'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:45'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '金丰路幸乐路',
            time: '18:12'
          },
          {
            id: 3,
            name: '金丰路运乐路',
            time: '18:15'
          }
        ]
      },
      {
        id: 36,
        type: 'RegularRouteShuttle',
        name: '水产路牡丹江路 - 微软上海园区',
        start: '水产路牡丹江路',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '水产路牡丹江路',
            time: '07:05'
          },
          {
            id: 2,
            name: '殷高路地铁站',
            time: '07:26'
          },
          {
            id: 3,
            name: '仁德路逸仙路',
            time: '07:32'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '08:50'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '仁德路逸仙路',
            time: '18:35'
          },
          {
            id: 3,
            name: '殷高路地铁站',
            time: '18:43'
          },
          {
            id: 4,
            name: '水产路牡丹江路',
            time: '18:58'
          },
          {
            id: 5,
            name: '宝杨路地铁站',
            time: '19:05'
          }
        ]
      },
      {
        id: 37,
        type: 'RegularRouteShuttle',
        name: '九亭地铁站 - 微软上海园区',
        start: '九亭地铁站',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '九亭地铁站',
            time: '07:50'
          },
          {
            id: 2,
            name: '沪亭南路康亭路',
            time: '07:55'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:50'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '沪亭南路康亭路',
            time: '18:50'
          },
          {
            id: 3,
            name: '九亭地铁站',
            time: '18:55'
          }
        ]
      },
      {
        id: 39,
        type: 'RegularRouteShuttle',
        name: '松江大学城 - 微软上海园区',
        start: '松江大学城',
        destination: '微软上海园区',
        ups: [
          {
            id: 1,
            name: '松江大学城地铁站',
            time: '07:50'
          },
          {
            id: 2,
            name: '松江新城地铁站',
            time: '07:57'
          },
          {
            id: 3,
            name: '微软上海园区',
            time: '08:47'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '17:30'
          },
          {
            id: 2,
            name: '松江新城地铁站',
            time: '18:30'
          },
          {
            id: 3,
            name: '松江大学城地铁站',
            time: '18:37'
          }
        ]
      },
      {
        id: 1,
        type: 'WeekendShuttle',
        start: '徐家汇',
        destination: '微软上海园区',
        name: '徐家汇 - 微软上海园区',
        ups: [
          {
            id: 1,
            name: '虹桥路恭城路',
            time: '08:00'
          },
          {
            id: 2,
            name: '莲花路地铁站（北广场）',
            time: '08:20'
          },
          {
            id: 3,
            name: '莘庄地铁站',
            time: '08:35'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '莘庄地铁站',
            time: '18:25'
          },
          {
            id: 3,
            name: '莲花路地铁站（北广场）',
            time: '18:45'
          },
          {
            id: 4,
            name: '虹桥路恭城路',
            time: '19:05'
          }
        ]
      },
      {
        id: 2,
        type: 'WeekendShuttle',
        start: '大柏树',
        destination: '微软上海园区',
        name: '大柏树 - 微软上海园区',
        ups: [
          {
            id: 1,
            name: '大柏树三号线地铁站',
            time: '08:00'
          },
          {
            id: 2,
            name: '上海马戏城',
            time: '08:15'
          },
          {
            id: 3,
            name: '中山公园',
            time: '08:35'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '09:15'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '中山公园',
            time: '18:45'
          },
          {
            id: 3,
            name: '上海马戏城',
            time: '19:10'
          },
          {
            id: 4,
            name: '大柏树三号线地铁站',
            time: '19:25'
          }
        ]
      },
      {
        id: 1,
        type: 'PublicHolidayShuttle',
        start: '徐家汇',
        destination: '微软上海园区',
        name: '徐家汇 - 微软上海园区',
        ups: [
          {
            id: 1,
            name: '虹桥路恭城路',
            time: '08:00'
          },
          {
            id: 2,
            name: '莲花路地铁站（北广场）',
            time: '08:20'
          },
          {
            id: 3,
            name: '莘庄地铁站',
            time: '08:35'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '莘庄地铁站',
            time: '18:25'
          },
          {
            id: 3,
            name: '莲花路地铁站（北广场）',
            time: '18:45'
          },
          {
            id: 4,
            name: '虹桥路恭城路',
            time: '19:05'
          }
        ]
      },
      {
        id: 2,
        type: 'PublicHolidayShuttle',
        start: '大柏树',
        destination: '微软上海园区',
        name: '大柏树 - 微软上海园区',
        ups: [
          {
            id: 1,
            name: '大柏树三号线地铁站',
            time: '08:00'
          },
          {
            id: 2,
            name: '上海马戏城',
            time: '08:15'
          },
          {
            id: 3,
            name: '中山公园',
            time: '08:35'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '09:15'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '中山公园',
            time: '18:45'
          },
          {
            id: 3,
            name: '上海马戏城',
            time: '19:10'
          },
          {
            id: 4,
            name: '大柏树三号线地铁站',
            time: '19:25'
          }
        ]
      },
      {
        id: 3,
        type: 'PublicHolidayShuttle',
        start: '世纪大道地铁站',
        destination: '微软上海园区',
        name: '世纪大道地铁站 - 微软上海园区',
        ups: [
          {
            id: 1,
            name: '世纪大道地铁站',
            time: '08:00'
          },
          {
            id: 2,
            name: '永泰路东明路',
            time: '08:20'
          },
          {
            id: 3,
            name: '沈杜公路地铁站',
            time: '08:32'
          },
          {
            id: 4,
            name: '微软上海园区',
            time: '09:00'
          }
        ],
        downs: [
          {
            id: 1,
            name: '微软上海园区',
            time: '18:00'
          },
          {
            id: 2,
            name: '沈杜公路地铁站',
            time: '18:20'
          },
          {
            id: 3,
            name: '永泰路东明路',
            time: '19:35'
          },
          {
            id: 4,
            name: '世纪大道地铁站',
            time: '19:55'
          }
        ]
      }
    ]
  }
})