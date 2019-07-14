// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ordering:[{
      index: "sadfas6546546546",
      price: 123,
      number: 1,
      order: [{
        name:"xiagu",
        num:3
      },{
        name:"dangao",
        num:9
      },
        {
          name: "zhi",
          num: 8
        }]
    },
      {
        index: "sadfas6546546546",
        price: 14,
        number:2,
        order: [{
          name: "xiagu",
          num: 3
        }, {
          name: "dangao",
          num: 8
        },
        {
          name: "zhi",
          num: 8
        }]
      }],
    ordered: [{
      index: "sadfas6546546546",
      price: 999,
      number: 7,
      order: [{
        name: "xiagu",
        num: 3
      }, {
        name: "dangao",
        num: 8
      },
      {
        name: "zhi",
        num: 5
      }]
    },
      {
        index: "sadfas6546546546",
        price: 888,
        number: 9,
        order: [{
          name: "xu",
          num: 3
        }, {
          name: "dangao",
          num: 8
        },
        {
          name: "zhi",
          num: 1
        }]
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

  },
  closeOrder: function (e) {
    let index = e.target.dataset.index;
    let ordering = this.data.ordering;
    let ordered = this.data.ordered;
    for (let i = 0; i < ordering.length; i++){
      if(index === ordering[i].index) {
        ordered.unshift(ordering[i]);
        ordering.splice(i,1);
        break;
      }
    }
    this.setData({
      ordering: ordering,
      ordered: ordered
    })
  },
  tabsScroll:function(e) {
    console.log(e)
  }
})