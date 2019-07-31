//index.js
import Dialog from 'vant-weapp/dist/dialog/dialog';
const db = wx.cloud.database();
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    userName:"",
    userorder:[],
    showorder: true,
    integral :0,
    orderdetail:{},
    show: false,
    showall: false,
    showallorder: true,
    allorder:[],
    allorderdetail: {},
    userType:null,
    incomeday:0,
    incomeall:0
  },

  onLoad: function() {
    const app = getApp();
    wx.cloud.callFunction({
      name: 'requestSever',
      data:{
        userid: app.userInfo.openid
      }
    }).then(res => {
      let user = JSON.parse(res.result);
      if (user.length >0){
        this.setData({
          userType: user[0].user_type,
          userName: user[0].user_name,
          avatarUrl: user[0].user_img
        });
      }
    }).catch(err => {
      console.log(err)
    })
  },

  onGetUserInfo: function(e) {
    const app = getApp();
    wx.showLoading({
      title: 'Loading',
    });
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo,
        username: e.detail.userInfo.nickName,
        userType: app.userInfo.openid === "o3ikC5dvBW-FeITuFXcoXoQHirV8" ? 'adminUser' : "normalUser"
      });
      wx.cloud.callFunction({
        name: 'setUser',
        data: {
          userid: app.userInfo.openid,
          username: e.detail.userInfo.nickName,
          usertype: "adminUser",
          userimg: e.detail.userInfo.avatarUrl
        }
      }).then(res => {
        let user = JSON.parse(res.result);
        this.setData({
          userType: user[0].user_type,
          userName: user[0].user_name,
          avatarUrl: e.detail.userInfo.avatarUrl,
        });
      }).catch(err => {
        console.log(err)
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
  },
  orderSystem: function(){
    wx.navigateTo({
      url: '../../pages/order/order',
    })
  },
  orderDeve: function () {
    wx.navigateTo({
      url: '../../pages/commodity/commodity',
    })
  }

})
