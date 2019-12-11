const app= getApp();

Page({
  data: {
    list: [
      {
        img: '/images/png/icon_my_dfk.png',
        tip: '待付款',
        code: 1
      },
      {
        img: '/images/png/icon_my_dfh.png',
        tip: '待发货',
        code: 2
      },
      {
        img: '/images/png/icon_my_dsh.png',
        tip: '待收货',
        code: 3
      },
      {
        img: '/images/png/icon_my_tk.png',
        tip: '退款/售后',
        code: 4
      }
    ]
  },
  onLoad(options) {
    let userInfo = app.globalData.userInfo
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickName
    })
  },
  // 查看订单
  toOrderList(e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/message/order/order?index=' + index
    })
  },
  // 查看自己领取的优惠券
  toCoupon() {
    wx.navigateTo({
      url: '/pages/message/coupon/coupon'
    })
  },
  // 查看收货地址
  toAddress() {
    wx.navigateTo({
      url: '/pages/message/address/address'
    })
  }
})