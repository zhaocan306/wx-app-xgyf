Page({
  data: {

  },
  // 拼团详情
  toDetail() {
    wx.navigateTo({
      url: '/pages/index/group/detail/detail'
    })
  },
  // 去参团
  joinGroup() {
    wx.navigateTo({
      url: '/pages/index/group/join/join'
    })
  }
})