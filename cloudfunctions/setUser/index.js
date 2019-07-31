// 云函数入口文件
const cloud = require('wx-server-sdk')
let rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()

  return rp('http://47.111.152.147:8080/api/setUser?_openid=' + event.userid + '&user_name='+event.username+'&user_type='+event.usertype+'&user_img='+event.userimg).then(res => {
    return res;
  }).catch(err => {
    console.log(err);
  })
}