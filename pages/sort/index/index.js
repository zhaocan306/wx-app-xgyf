Page({
  data: {
    tabCur: 1,
    navList: [
      {
        name: '苹果类',
        code: 1
      },
      {
        name: '梨子类',
        code: 2
      },
      {
        name: '桔柚类',
        code: 3
      },
      {
        name: '桃李类',
        code: 4
      },
      {
        name: '瓜类',
        code: 5
      },
      {
        name: '葡提类',
        code: 6
      }
    ],
    goodList: [
      {
        name: '智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm 新鲜水果',
        img: 'https://img14.360buyimg.com/n0/jfs/t1/99207/37/202/487010/5da933aaE752e01c2/d9589bfcd1e26b19.jpg',
        price: 109
      },
      {
        name: '智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm 新鲜水果',
        img: 'https://img14.360buyimg.com/n0/jfs/t1/99207/37/202/487010/5da933aaE752e01c2/d9589bfcd1e26b19.jpg',
        price: 109
      },
      {
        name: '智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm 新鲜水果',
        img: 'https://img14.360buyimg.com/n0/jfs/t1/99207/37/202/487010/5da933aaE752e01c2/d9589bfcd1e26b19.jpg',
        price: 109
      },
      {
        name: '智利进口车厘子巨无霸JJJ级 1磅装 果径约30-32mm 新鲜水果',
        img: 'https://img14.360buyimg.com/n0/jfs/t1/99207/37/202/487010/5da933aaE752e01c2/d9589bfcd1e26b19.jpg',
        price: 109
      }
    ]
  },
  // 点击分类
  clickTabcur(e) {
    let code = e.currentTarget.dataset.code;
    this.setData({
      tabCur: code
    })
  }
})