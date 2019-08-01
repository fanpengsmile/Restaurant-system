// pages/commodity/commodity.js
import Toast from 'vant-weapp/dist/toast/toast';
let name, price, desc, label, editId, base64, type, inter;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edit: false,
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    
  },
  confirmCommod : function(){
    wx.showLoading({
      title: 'Loading',
    });
    wx.cloud.callFunction({
      name: 'inserModel',
      data:{
        id: (new Date()).getTime(),
        name: name,
        price:price,
        des: desc,
        label: label,
        integral: inter,
        img: base64,
        type: type
      }
    }).then(res => {
      wx.showToast({
        title: '添加成功',
      });
      wx.hideLoading();
    }).catch(err => {
      wx.showToast({
        title: '添加失败',
      });
      wx.hideLoading();
    })
  },
  selectImg: function() {
    let self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        wx.getFileSystemManager().readFile({
          filePath: tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            base64 = 'data:image/png;base64,' + res.data;
          }
        })
      }
    })
  },
  editCommod: function(e) {
    editId = e.currentTarget.dataset.id;
    this.setData({
      edit: true
    })
  },
  confirmEdit: function(e) {
    if (this.isNumber(price)) {
      let model = this.data.model;
      let flag = false;
      for (let i = 0; i < model.length; i++) {
        if (flag) {
          break;
        }
        for (let j = 0; j < model[i].detail.length; j++) {
          let com = model[i].detail[j];
          if (com.id === editId) {
            com.name = name;
            com.price = price;
            com.desc = desc;
            com.tag = label;
            flag = true;
            break;
          }
        }
      }
      this.setData({
        model: model,
        edit: false
      })
    } else {
      Toast.fail('价格需要为数字');
    }
  },
  getName: function(e) {
    name = e.detail
  },
  getInter: function(e){
    inter = e.detail;
  },
  getPrice: function(e) {
    if (this.isNumber(e.detail)){
      price = parseFloat(e.detail)
    }else {
      Toast.fail('价格需要为数字');
    }
  },
  getLabel: function(e) {
    label = e.detail
  },
  getType: function (e) {
    type = e.detail
  },
  getDesc: function(e) {
    desc = e.detail
  },
  onEditClose: function() {
    this.setData({
      edit: false
    })
  },
  isNumber: function(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  }
})