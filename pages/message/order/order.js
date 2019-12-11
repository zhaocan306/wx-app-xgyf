Page({
  data: {
    list: [
      {
        code: 0,
        name: '全部'
      },
      {
        code: 1,
        name: '待付款'
      },
      {
        code: 2,
        name: '代发货'
      },
      {
        code: 3,
        name: '待收货'
      },
      {
        code: 4,
        name: '退款/售后'
      }
    ],
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
    ],
    tabCur: 0
  },
  onLoad(options) {
    let index = options.index;
    this.setData({
      tabCur: index
    })
  },
  // 切换导航栏
  toTabCur(e) {
    this.setData({
      tabCur: e.detail
    })
  },
})