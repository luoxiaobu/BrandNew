//home.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img: {},
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 4000,
    duration: 300
  },
  // //事件处理函数
  onLoad: function() {
    var postList = [{
      imgSrc: "/img/qixi1.jpg",
      info: 'haha'
    }, {
      imgSrc: "/img/qixi2.jpg",
      info: 'haha1'
    }, {
      imgSrc: "/img/qixi3.jpg",
      info: 'haha1'
    }];
    this.setData({
      img: postList
    });
  },
})
