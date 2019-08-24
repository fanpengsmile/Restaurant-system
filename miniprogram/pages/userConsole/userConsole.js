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
    hotCommodity: ['/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg']
  },

  onLoad: function(options) {
    wx.showLoading({
      title: 'Loading...',
    });
    wx.cloud.callFunction({
      name: 'getAllModel'
    }).then(res => {
      wx.hideLoading();
      let model = JSON.parse(res.result);
      let models = [];
      for(let i = 0 ; i < model.length; i ++) {
        let modeli = model[i];
        if (i === 0) {
          models.push({
            title: modeli.type,
            detail: [{
              id: modeli._id,
              image: "http://" + modeli.image_url,
              tag: modeli.label,
              price: modeli.price,
              desc: modeli.description,
              num: 0,
              name: modeli.name
            }]
          })
        } else {
          for (let j = 0; j < models.length; j++) {
            if (modeli.type === models[j].title) {
              let p = {
                id: modeli._id,
                image: "http://" + modeli.image_url,
                tag: modeli.label,
                price: modeli.price,
                desc: modeli.description,
                num: 0,
                name: modeli.name
              };
              models[j].detail.push(p);
              break;
            }
            if (j === models.length - 1 && modeli.type !== models[j].title) {
              models.push({
                title: modeli.type,
                detail: [{
                  id: modeli._id,
                  image: "http://" + modeli.image_url,
                  tag: modeli.label,
                  price: modeli.price,
                  desc: modeli.description,
                  num: 0,
                  name: modeli.name
                }]
              });
              break;
            }
          }
        }
      }
      const app = getApp();
      app.models = models;
      this.setData({
        model: models
      })
    }).catch(err => {
      wx.hideLoading();
      console.log(err);
    });
  },
  onShow: function() {
    this.setData({
      model: getApp().models
    })
  },
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
})