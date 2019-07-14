// pages/userConsole/userConsole.js
import Dialog from 'vant-weapp/dist/dialog/dialog';
Page({

  data: {
    openid: '',
    showsubmit: false,
    pricesum: 0,
    userorderlist: [],
    showsubmitlist: false,
    submitText: '购物车',
    hotCommodShow: true,
    hotCommodity: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg'],
    model: [{
        title: "水果",
        detail: [{
            id: "465",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "橘子"
          },
          {
            id: "46da567456fda5",
            image: "/images/a.png",
            tag: "新品",
            price: 828,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "西瓜"
          },
          {
            id: "4rewer65",
            image: "/images/a.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "葡萄"
          },
          {
            id: "4eerwwerwr65",
            image: "/images/a.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "葡萄"
          }, {
            id: "4etrethgr65",
            image: "/images/a.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "葡萄"
          }, {
            id: "4ery6765",
            image: "/images/a.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "葡萄"
          }
        ]
      }, {
        title: "零食",
        detail: [{
            id: "462525",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！',
            num: 0,
            name: "坚果"
          },
          {
            id: "46da27527fda5",
            image: "/images/b.png",
            tag: "新品",
            price: 828,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "火腿肠"
          },
          {
            id: "4e5275275r65",
            image: "/images/c.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "奶茶"
          }, {
            id: "4e52we75275r65",
            image: "/images/c.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "奶茶"
          }, {
            id: "4e52e75275r65",
            image: "/images/c.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "奶茶"
          }, {
            id: "4e75r65",
            image: "/images/c.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "奶茶"
          }, {
            id: "4",
            image: "/images/c.png",
            tag: "新品",
            price: 145,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "奶茶"
          }
        ]
      }, {
        title: "饮料",
        detail: [{
            id: "46s2525",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！',
            num: 0,
            name: "可乐"
          },
          {
            id: "4455d27fda5",
            image: "/images/b.png",
            tag: "新品",
            price: 28,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "芬达"
          },
          {
            id: "4eqqq5r65",
            image: "/images/c.png",
            tag: "新品",
            price: 14,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "王老吉"
          }
        ]
      }, {
        title: "啤酒",
        detail: [{
            id: "45",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！',
            num: 0,
            name: "青岛"
          },
          {
            id: "445a5",
            image: "/images/b.png",
            tag: "新品",
            price: 28,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "雪花"
          },
          {
            id: "4eqqq5",
            image: "/images/c.png",
            tag: "新品",
            price: 14,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "乌苏"
          }
        ]
      },
      {
        title: "烤肉",
        detail: [{
            id: "4rty5",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！',
            num: 0,
            name: "面筋"
          },
          {
            id: "4455de",
            image: "/images/b.png",
            tag: "新品",
            price: 28,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "香肠"
          },
          {
            id: "sss5",
            image: "/images/c.png",
            tag: "新品",
            price: 14,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "茄子"
          }
        ]
      },
      {
        title: "其他",
        detail: [{
            id: "f5",
            image: "/images/a.png",
            tag: "新品",
            price: 43,
            desc: '多吃水果心情好！！！！！！',
            num: 0,
            name: "KTV"
          },
          {
            id: "448",
            image: "/images/b.png",
            tag: "新品",
            price: 28,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "台球"
          },
          {
            id: "4aaa5",
            image: "/images/c.png",
            tag: "新品",
            price: 14,
            desc: '多吃水果心情好！！！！！！！！！！！',
            num: 0,
            name: "XBOX"
          }
        ]
      }
    ]
  },

  onLoad: function(options) {
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo,
                username: JSON.parse(res.rawData).nickName
              });
              wx.hideLoading();
            }
          })
        } else {
          wx.hideLoading();
          Dialog.alert({
            message: '请先登录'
          }).then(() => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          });

        }
      }
    })
  },
  onShow: function() {},
  onSlotChange: function(e) {
    let model = this.data.model;
    let peiceNum = 0;
    for (let i = 0; i < model.length; i++) {
      for (let j = 0; j < model[i].detail.length; j++) {
        let mod = model[i].detail[j];
        if (mod.id === e.target.dataset.id) {
          mod.num = e.detail;
        }
        peiceNum += mod.num * mod.price;
      }
    }
    if (peiceNum > 0) {
      this.setData({
        showsubmit: true,
        pricesum: peiceNum
      })
    } else {
      this.setData({
        showsubmit: false
      })
    }
  },
  showorderlist: function(e) {
    let userorderlist = this.data.userorderlist;
    this.setData({
      userorderlist: userorderlist
    });
    this.setData({
      showsubmitlist: true
    });
  },
  updateoderlist: function() {
    let orderList = this.data.userorderlist;
    let model = this.data.model;
    for (let i = 0; i < model.length; i++) {
      for (let j = 0; j < model[i].detail.length; j++) {
        let mod = model[i].detail[j];
        if (orderList.length === 0) {
          mod.num = 0;
        } else {
          let flag = false;
          for (let k = 0; k < orderList.length; k++) {
            if (orderList[k].id === mod.id) {
              mod.num = orderList[k].num;
              flag = true;
              break;
            }
          }
          if (flag === false) {
            mod.num = 0;
          }
        }
      }
    }
    this.setData({
      showsubmitlist: false,
      model: model,
      submitText: '购物车'
    });
  },
  onSubmitSlotChange: function(e) {
    let orderList = this.data.userorderlist;
    let sum = 0;
    for (let i = orderList.length - 1; i >= 0; i--) {
      if (orderList[i].id === e.target.dataset.id) {
        if (e.detail === 0) {
          orderList.splice(i, 1);
        } else {
          orderList[i].num = e.detail;
        }
        break;
      }
    }
    for (let i = orderList.length - 1; i >= 0; i--) {
      sum += orderList[i].num * orderList[i].price
    }
    if (orderList.length === 0) {
      this.setData({
        showsubmit: false
      })
      this.updateoderlist();
    }
    this.setData({
      userorderlist: orderList,
      pricesum: sum
    })
  },
  onSubmit: function(e) {
    if (!this.data.showsubmitlist) {
      let userorderlist = [];
      let model = this.data.model;
      for (let i = 0; i < model.length; i++) {
        for (let j = 0; j < model[i].detail.length; j++) {
          let mod = model[i].detail[j];
          if (mod.num > 0) {
            userorderlist.push({
              id: mod.id,
              name: mod.name,
              price: mod.price,
              num: mod.num
            });
          }
        }
      }
      this.setData({
        userorderlist: userorderlist,
        showsubmitlist: true,
        submitText: '点击付款'
      })
    } else {
      console.log("daifukuan")
    }
  },
  tabsScroll: function(e) {
    if (e.detail.isFixed) {
      this.setData({
        hotCommodShow: false
      })
    } else {
      this.setData({
        hotCommodShow: true
      })
    }
  },
  // onPullDownRefresh(){
  //   wx.stopPullDownRefresh();
  //   this.setData({
  //     hotCommodShow: true
  //   })
  // }
})