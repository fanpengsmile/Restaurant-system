// pages/userConsole/userConsole.js
import Dialog from 'vant-weapp/dist/dialog/dialog';
Page({

  data: {
    openid: '',
    showsubmit:false,
    pricesum:0,
    userorderlist:[],
    showsubmitlist:false,
    model:[{
      title:"水果",
      detail:[{id: "465",image: "/images/a.png",tag:"新品",price:43,desc:'多吃水果心情好！！！！！！！！！！！',num: 0,name:"橘子"},
        { id: "46dafda5", image: "/images/a.png", tag: "新品", price: 828, desc: '多吃水果心情好！！！！！！！！！！！', num: 0,name: "西瓜"},
        { id: "4er65", image: "/images/a.png", tag: "新品", price: 145, desc: '多吃水果心情好！！！！！！！！！！！', num: 0,name: "葡萄"}
      ]
    }, {
        title: "零食",
        detail: [{ id: "462525", image: "/images/a.png", tag: "新品", price: 43, desc: '多吃水果心情好！！！！！！', num: 0, name: "坚果"},
          { id: "46da27527fda5", image: "/images/b.png", tag: "新品", price: 828, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "火腿肠" },
          { id: "4e5275275r65", image: "/images/c.png", tag: "新品", price: 145, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "奶茶"}
        ]
      }, {
        title: "饮料",
        detail: [{ id: "46s2525", image: "/images/a.png", tag: "新品", price: 43, desc: '多吃水果心情好！！！！！！', num: 0, name: "可乐"},
          { id: "4455d27fda5", image: "/images/b.png", tag: "新品", price: 28, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "芬达"},
          { id: "4eqqq5r65", image: "/images/c.png", tag: "新品", price: 14, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "王老吉" }
        ]
      }, {
        title: "啤酒",
        detail: [{ id: "45", image: "/images/a.png", tag: "新品", price: 43, desc: '多吃水果心情好！！！！！！', num: 0, name: "青岛" },
          { id: "445a5", image: "/images/b.png", tag: "新品", price: 28, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "雪花"},
          { id: "4eqqq5", image: "/images/c.png", tag: "新品", price: 14, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "乌苏" }
        ]
      },
      {
        title: "烤肉",
        detail: [{ id: "4rty5", image: "/images/a.png", tag: "新品", price: 43, desc: '多吃水果心情好！！！！！！', num: 0, name: "面筋" },
          { id: "4455de", image: "/images/b.png", tag: "新品", price: 28, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "香肠"},
          { id: "sss5", image: "/images/c.png", tag: "新品", price: 14, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "茄子" }
        ]
      },
      {
        title: "其他",
        detail: [{ id: "f5", image: "/images/a.png", tag: "新品", price: 43, desc: '多吃水果心情好！！！！！！', num: 0, name: "KTV"},
          { id: "448", image: "/images/b.png", tag: "新品", price: 28, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "台球"},
          { id: "4aaa5", image: "/images/c.png", tag: "新品", price: 14, desc: '多吃水果心情好！！！！！！！！！！！', num: 0, name: "XBOX"}
        ]
      }
    ]
  },

  onLoad: function (options) {
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
      },
      fail: err => {
        wx.hideLoading();
        Dialog.alert({
          message: '加载失败'
        }).then(() => {
          return;
        });
      }
    })
  },
  onShow:function(){
  },
  onSlotChange:function(e){
    let userorderlist = this.data.userorderlist;
    let differentorder = true;
    for (let i = 0;i < userorderlist.length;i ++) {
      if (userorderlist[i].id === e.target.dataset.id) {
        if (e.detail === 0) {
          userorderlist.splice(i, 1);
          differentorder = false;
          break;
        }else {
          userorderlist[i].num = e.detail;
          differentorder = false;
          break;
        }
      }
    }
    let newlist = {
      name: e.target.dataset.name,
      num: e.detail,
      id: e.target.dataset.id,
      price: e.target.dataset.price
    };
    if (differentorder) {
      userorderlist.push(newlist);
      this.setData({
        userorderlist: userorderlist
      });
    }
    let sum = 0;
    for (let i = 0; i < userorderlist.length; i++) {
      sum = sum + userorderlist[i].price * userorderlist[i].num;
    }
    if (sum > 0) {
      this.setData({
        userorderlist: userorderlist,
        showsubmit: true,
        pricesum: sum
      })
    } else {
      this.setData({
        showsubmit: false,
        showsubmitlist: false
      })
    }
  },
  showorderlist: function(){
    let userorderlist = this.data.userorderlist;
    this.setData({
      userorderlist: userorderlist
    });
    this.setData({
      showsubmitlist: !this.data.showsubmitlist
    });
  },
  updateoderlist:function(){
    let userorderlist = this.data.userorderlist;
    let model = this.data.model;
    let brea = false;
    for (let i = 0; i < userorderlist.length;i++){
      for (let j = 0; j < model.length;j++){
        if (brea) {
          brea = false;
          break;
        }
        for (let k = 0; k < model[j].detail.length;k++){
          if (userorderlist[i].id === model[j].detail[k].id) {
            model[j].detail[k].num = userorderlist[i].num;
            brea = true;
            break;
          }
        }
      }
    }
    this.setData({
      model:model,
      showsubmitlist: false
    });
  }
})