Page({
  data: {
    tabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    load: true,
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
    let index = e.currentTarget.dataset.index;
    this.setData({
      tabCur: index,
      MainCur: index,
      VerticalNavTop: (index - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.navList;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + i);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        navList: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (i - 1) * 50,
          tabCur: i
        })
        return false
      }
    }
  }
})