const app = getApp();

Page({
  data: {
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
    ]
  },
  onLoad(options) {
    let userInfo = app.globalData.userInfo
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickName
    })
  }
})