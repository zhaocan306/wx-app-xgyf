Page({
  data: {
    tabCur: 1,
    dataList: [
      {
        img: '/images/png/bg_yhj_one.png'
      },
      {
        img: '/images/png/bg_yhj_one(1).png'
      },
      {
        img: '/images/png/bg_yhj_three.png'
      },
      {
        img: '/images/png/bg_yhj_four.png'
      }
    ]
  },
  // 切换选项
  toTabCur(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabCur: index
    })
  }
})