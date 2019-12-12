Page({
  data: {
    tabCur: 1,
    isShowCoupon: false,
    goodList: [
      {
        img: 'https://img14.360buyimg.com/n0/jfs/t24622/168/1466210857/627211/fd1957a0/5bb225e2Nb553ce4b.png',
        name: '泰国进口 金枕头榴莲 顺丰或京东发出 新鲜 水果 生鲜 坏果包赔 6-7斤',
        price: 200,
        amount: 1,
        spec: '6-8斤'
      },
      {
        img: 'https://img14.360buyimg.com/n0/jfs/t1/99207/37/202/487010/5da933aaE752e01c2/d9589bfcd1e26b19.jpg',
        name: '智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm 新鲜水果',
        price: 109,
        amount: 1,
        spec: '6-8斤'
      }
    ]
  },
  // 切换导航栏
  toTabCur(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabCur: index
    })
  },
  // 选择优惠券
  showCoupon() {
    this.setData({
      isShowCoupon: true
    })
  },
  // 隐藏优惠券
  hideCoupon() {
    this.setData({
      isShowCoupon: false
    })
  }
})