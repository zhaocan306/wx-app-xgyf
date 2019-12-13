const app = getApp();

Page({
  data: {

  },
  onLoad(options) {
    let userInfo = app.globalData.userInfo
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickName
    })
  }
})