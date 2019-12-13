Page({
  data: {
    value: 0,
    isAllSeclect: false,
    cartList: [
      {
        url: 'https://img14.360buyimg.com/n0/jfs/t24622/168/1466210857/627211/fd1957a0/5bb225e2Nb553ce4b.png',
        name: '泰国进口 金枕头榴莲 顺丰或京东发出 新鲜 水果 生鲜 坏果包赔 6-7斤',
        spec: '4-6斤',
        price: 200,
        value: 1,
        isSelect: true
      },
      {
        url: 'https://img14.360buyimg.com/n0/jfs/t1/80943/18/9288/317083/5d70af2cEd76ed14f/9f3e6efcada049c2.jpg',
        name: '秦礼 福建管溪蜜柚红心柚子新鲜水果当季平和红肉整箱批发应季 红心柚3-4粒礼盒装8.5-10斤带箱',
        spec: '4-6斤',
        price: 59.90,
        value: 1,
        isSelect: false
      }
    ],
    orderAmount: 0,
    orderPrice: 0,
    modalName: ''
  },
  onLoad(options) {
    let self = this;
    let isAllSeclect = self.data.cartList.every(item => {
      return item.isSelect
    })
    self.setData({
      isAllSeclect: isAllSeclect
    })
    self.getOrderAmount()
  },
  // 复选框改变的时候
  checkboxChange(e) {
    let self = this;
    let isSelect = e.detail.value.length ? true : false;
    let index = e.currentTarget.dataset.index;
    let cartList = self.data.cartList;
    cartList[index].isSelect = isSelect;
    let isAllSeclect = cartList.every(item => {
      return item.isSelect
    })

    self.setData({
      cartList: cartList,
      isAllSeclect: isAllSeclect
    })
    self.getOrderAmount()
  },
  // 修改商品数量
  changeNumber(e) {
    let value = e.detail.value;
    let index = e.detail.index;
    let cartList = this.data.cartList;
    if(value == 0) {
      cartList.splice(index,1);
    } else {
      cartList[index].value = value;
    }
    this.setData({
      cartList: cartList
    })
    this.getOrderAmount()
  },
  // 全选
  checkboxAllChange(e) {
    let self = this;
    let isAllSeclect = e.detail.value.length ? true : false;
    let cartList = self.data.cartList;
    cartList.forEach((item,index) => {
      cartList[index].isSelect = isAllSeclect
    })
    self.setData({
      cartList: cartList,
      isAllSeclect: isAllSeclect
    })
    self.getOrderAmount()
  },
  // 订单金额
  getOrderAmount() {
    let self = this;
    let cartList = self.data.cartList;
    let orderPrice = 0;
    let orderAmount = 0;

    cartList.forEach(item => {
      if(item.isSelect) {
        orderPrice+=(item.price*item.value);
        orderAmount+=item.value
      }
    })
    self.setData({
      orderPrice: orderPrice.toFixed(2),
      orderAmount: orderAmount
    })
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },
  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },
  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },
  // 删除商品
  deleteImg() {
    wx.showModal({
      title: '提示',
      content: '是否确定删除该商品?',
      success: (res) => {
        
      }
    })
  },
  // 提交订单
  submitOrder() {
    wx.navigateTo({
      url: '/pages/cart/order/order'
    })
  }
})