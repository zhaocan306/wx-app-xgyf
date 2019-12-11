
Page({
  data: {
    posterList: [
      'https://m.360buyimg.com/babel/jfs/t1/106158/17/4681/109141/5de8d791Ef0d9bf20/b2eac7192fdaaf06.jpg',
      'https://m.360buyimg.com/babel/jfs/t1/100690/19/4091/144606/5de4a8aeEd841905b/610f0ba192bc3d98.jpg',
      'https://m.360buyimg.com/babel/jfs/t1/87299/35/4522/83303/5de8827bEeaa154db/c8bbb9d9511b6ae4.jpg'
    ],
    cardCur: 0,
    newsList: [
      "陕西富平柿饼 今年受到天气影响大降价需要的赶紧抢购",
      "陕西富平柿饼 今年受到天气影响大降价需要的赶紧抢购",
      "陕西富平柿饼 今年受到天气影响大降价需要的赶紧抢购"
    ],
    activList: [
      {
        time: '8:00',
        tip: '抢购中'
      },
      {
        time: '12:00',
        tip: '抢购中'
      },
      {
        time: '14:00',
        tip: '抢购中'
      },
      {
        time: '18:00',
        tip: '抢购中'
      }
    ],
    goodList: [
      {
        time: '14:00',
        tip: '抢购中'
      },
      {
        time: '18:00',
        tip: '抢购中'
      },
      {
        time: '14:00',
        tip: '抢购中'
      },
      {
        time: '18:00',
        tip: '抢购中'
      },
      {
        time: '14:00',
        tip: '抢购中'
      }
    ],
    tabCur: 1
  },
  // 选择活动
  toSelectactive(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabCur: index
    })
  },
  // 轮播图切换
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // 签到
  toSign() {
    wx.navigateTo({
      url: '/pages/index/sign/sign'
    })
  },
  // 团购
  toGroup() {
    wx.navigateTo({
      url: '/pages/index/group/group'
    })
  },
  // 查看详情
  toDetail() {
    wx.navigateTo({
      url: '/pages/index/detail/detail'
    })
  }
})