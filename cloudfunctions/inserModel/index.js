// 云函数入口文件
const cloud = require('wx-server-sdk')
let rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
  // const wxContext = cloud.getWXContext()
  return rp('http://47.111.152.147:8080/api/setProduct?_id=' + event.id + '&type=' + event.type + '&name=' + event.name + '&price=' + event.price + '&label=' + event.label + '&integral=' + event.integral + '&image_url=' + event.img + '&description=' + event.des).then(res => {
    return res;
  }).catch(err => {
    return err;
  })
}