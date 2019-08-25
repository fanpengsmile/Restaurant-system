// pages/commodity/commodity.js
import Toast from 'vant-weapp/dist/toast/toast';
import Dialog from 'vant-weapp/dist/dialog/dialog';
let name, price, desc, label, editId, base64, type, inter, id;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    edit: false,
    oldName: "",
    oldPrice: 0,
    oldLabel:"",
    oldDes: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
    this.setData({
      model: app.models
    })
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
  confirmCommod: function () {
    wx.showLoading({
      title: 'Loading',
    });
    wx.cloud.callFunction({
      name: 'inserModel',
      data: {
        id: (new Date()).getTime(),
        name: encodeURI(name),
        price: price,
        des: encodeURI(desc),
        label: encodeURI(label),
        integral: parseFloat(inter),
        img: base64,
        type: encodeURI(type)
      }
    }).then(res => {
      wx.showToast({
        title: '添加成功',
      });

      let model = JSON.parse(res.result);
      let models = [];
      for (let i = 0; i < model.length; i++) {
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
      app.models = models;
      this.setData({
        model: models
      })
      wx.hideLoading();
    }).catch(err => {
      wx.showToast({
        title: '添加失败',
      });
      wx.hideLoading();
    })
  },
  selectImg: function () {
    let self = this;
    const ctx = wx.createCanvasContext('myCanvas');
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths;
        ctx.drawImage(tempFilePaths[0], 0, 0, 200, 200); //将图片填充在canvas上
        ctx.draw();
        setTimeout(function () {
          wx.canvasToTempFilePath({
            canvasId: 'myCanvas',
            success: function (res) {
              console.log(res.tempFilePath);
              base64 = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePath, "base64");
            },
            fail: function (error) {
              console.log(error)
            }
          })
        }, 100);
        base64 = 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(tempFilePaths[0], "base64");
      }
    })
  },
  deleteCommod: function (e) {
    let self = this;
    Dialog.confirm({
      title: '确认删除',
      message: '你确认删除此商品？'
    }).then(() => {
      let modelId = e.currentTarget.dataset.id;
      wx.cloud.callFunction({
        name: 'deleteModel',
        data: {
          id: modelId
        }
      }).then(res => {
        let model = self.data.model;
        let flag = false;
        for (let i = 0; i < model.length; i++) {
          if (flag) {
            break;
          }
          let detail = model[i].detail;
          for (let j = 0; j < detail.length; j++) {
            if (detail[j].id === modelId) {
              detail.splice(j, 1);
              flag = true;
              break;
            }
          }
        }
        self.setData({
          model: model
        });
        app.models = models;
        wx.showToast({
          title: '删除成功',
        });
      }).catch(err => {
        wx.showToast({
          title: '删除成功',
        });
      })
    }).catch(() => {
      // on cancel
    });
  },
  editCommod: function (e) {
    id = e.currentTarget.dataset.id;
    let model = this.data.model;
    let flag = false;
    for (let i = 0; i < model.length; i++) {
      if (flag) {
        break;
      }
      for (let j = 0; j < model[i].detail.length; j++) {
        let com = model[i].detail[j];
        if (com.id === id) {
          this.setData({
            oldName: com.name,
            oldPrice: com.price/100,
            oldLabel: com.tag,
            oldDes: com.desc
          })
          flag = true;
          break;
        }
      }
    }
    this.setData({
      edit: true
    })
  },
  confirmEdit: function (e) {
    let self = this;
    if (this.isNumber(price)) {
      let model = this.data.model;
      let flag = false;
      for (let i = 0; i < model.length; i++) {
        if (flag) {
          break;
        }
        for (let j = 0; j < model[i].detail.length; j++) {
          let com = model[i].detail[j];
          if (com.id === id) {
            com.name = name;
            com.price = price;
            com.desc = desc;
            com.tag = label;
            flag = true;
            break;
          }
        }
      }
      wx.callFunction({
        name: 'updateModel',
        data: {
          id: id,
          name: name,
          price: price,
          des: desc,
          label: label
        }
      }).then(res => {
        self.setData({
          model: model,
          edit: false
        })
      }).catch(err => {
        console.log(err);
      })
    } else {
      Toast.fail('价格需要为数字');
    }
  },
  getName: function (e) {
    name = e.detail
  },
  getInter: function (e) {
    if (this.isNumber(e.detail)) {
      inter = parseFloat(e.detail)
    } else {
      Toast.fail('价格需要为数字');
    }
  },
  getPrice: function (e) {
    if (this.isNumber(e.detail)) {
      price = parseFloat(e.detail) * 100
    } else {
      Toast.fail('价格需要为数字');
    }
  },
  getLabel: function (e) {
    label = e.detail
  },
  getType: function (e) {
    type = e.detail
  },
  getDesc: function (e) {
    desc = e.detail
  },
  onEditClose: function () {
    this.setData({
      edit: false
    })
  },
  isNumber: function (val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true;
    } else {
      return false;
    }
  }
})