//home.js
//获取应用实例

var postsData = require('../../data/posts-data.js')
const app = getApp()

Page({
    data: {
        img: [],
        list: [],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        circular: false,
        interval: 4000,
        duration: 300
    },
    // //事件处理函数
    onLoad: function() {
        var postSwiper = [{
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
            img: postSwiper
        });
        this.setData({
            list: postsData.postList.map((currentV) => {
                return { ...currentV,
                    expand: true
                }
            })
        });
    },
    expandOrfold: function(event) {
        var index = event.currentTarget.dataset['index'];
        var mText = `list[${index}].expand`;
        this.setData({
            [mText]: !this.data.list[index].expand
        });
    },
    collected: function(event) {
        var index = event.currentTarget.dataset['index'];
        var mCollected = `list[${index}].collected`;
        var mValue = `list[${index}].collection`;
        var valueCount = 0;
        if (this.data.list[index].collected) {
            valueCount = this.data.list[index].collection - 1;
        } else {
            valueCount = this.data.list[index].collection + 1;
        }
        this.setData({
            [mCollected]: !this.data.list[index].collected,
            [mValue]: valueCount,
        })
    },
})