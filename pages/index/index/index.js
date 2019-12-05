
Page({
  data: {
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
  }
})