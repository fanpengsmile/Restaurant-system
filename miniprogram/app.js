//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // 此处请填入环境 ID, 环境 ID 可打开云控制台查看
        env: 'test1-4g2fk',
        traceUser: true,
      })
    };
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      const app = getApp();
      app.userInfo = res.result;
    });
    this.globalData = {}
  }
})
