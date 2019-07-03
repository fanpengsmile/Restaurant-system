//index.js
import Dialog from 'vant-weapp/dist/dialog/dialog';
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    username:"",
    userorder:[],
    showorder: true,
    integral :0,
    orderdetail:{},
    show: false,
    showall: false,
    showallorder: true,
    allorder:[],
    allorderdetail: {},
    user:false,
    incomeday:0,
    incomeall:0
  },

  onLoad: function() {
    wx.showLoading({
      title: 'Loading',
    });

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
            wx.navigateTo({
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

  onGetUserInfo: function(e) {
    wx.showLoading({
      title: 'Loading',
    });
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        username: e.detail.userInfo.nickName
      })
    }
    wx.hideLoading();
  },
  showallorder: function () {
    //todo
    let order = [{
      time: "2019-08",
      index: 12,
      price: 21,
      model: "apple"
    },
    {
      time: "2018-08",
      index: 17,
      price: 288,
      model: "noodel"
    }];
    this.setData({
      showallorder: false,
      allorder: order
    });
  },
  showorder: function() {
    //todo
    let order = [{
      time: "2019-08",
      index: 12,
      price: 21,
      model: "apple"
    },
    {
      time: "2018-08",
      index: 17,
      price: 288,
      model: "noodel"
    }];
    this.setData({
      showorder: false,
      userorder: order
    });
  },
  hideorder:function(){
    this.setData({
      showorder: true
    });
  },
  hideallorder: function () {
    this.setData({
      showallorder: true
    });
  },
  showorderdetail:function(){
    //todo
    this.setData({
      show: !this.data.show
    });
    if (this.data.show){
      let detail = {
        time: '2019/08/01',
        integral: 10,
        price: 20,
        index: "153469854521",
        model: [{
          name:'apple',
          price:12
        }, {
            name: 'meat',
            price: 145
          },
          {
            name: 'banana',
            price: 132
          }]
      };
      this.setData({
        orderdetail: detail,
      })
    }
  },
  onClose() {
    this.setData({ show: false,showall:false });
  },
  showallorderdetail: function () {
    //todo
    this.setData({
      showall: !this.data.showall
    });
    if (this.data.showall) {
      let detail = {
        time: '2019/08/01',
        integral: 10,
        price: 20,
        index: "153469854521",
        model: [{
          name: 'apple',
          price: 12
        }, {
          name: 'meat',
          price: 145
        },
        {
          name: 'banana',
          price: 132
        }]
      };
      this.setData({
        allorderdetail: detail,
      })
    }
  }

})
