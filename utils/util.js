/** 封装微信弹框 */
function toast(title = '', icon = 'none') {
  wx.showToast({
    title: title,
    icon: icon,
    duration: 1500
  })
}

// 封装微信提示框
function modal(title = '', content = '') {
  wx.showModal({
    title: title,
    showCancel: false,
    content: content,
  })
}

// 封装微信加载框
function showLoading(title = '加载中...') {
  wx.showLoading({
    title: title
  })
}

// 封装微信隐藏加载框
function hideLoading() {
  wx.hideLoading();
}

module.exports = {
  toast,
  modal,
  showLoading,
  hideLoading
}
