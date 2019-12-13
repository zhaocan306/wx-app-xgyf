const app = getApp();

Page({
  data: {
    posterList: [
      "https://img14.360buyimg.com/n0/jfs/t24622/168/1466210857/627211/fd1957a0/5bb225e2Nb553ce4b.png",
      "https://img14.360buyimg.com/n0/jfs/t15610/213/2060991394/311565/9acb46a1/5a796495Nb2e2df18.jpg",
      "https://img14.360buyimg.com/n0/jfs/t15991/108/2077244662/579228/80ffdb5b/5a796495Ne383c204.jpg",
      "https://img14.360buyimg.com/n0/jfs/t15067/145/2205150059/532999/4501860/5a796496N8798ab66.jpg",
      "https://img14.360buyimg.com/n0/jfs/t15979/205/2084833160/329409/718bd862/5a796495N0e8bacdf.jpg"
    ],
    detailList: [
      "https://img10.360buyimg.com/imgzone/jfs/t17500/365/423305189/553530/75e245a3/5a796d4bN5245d163.png",
      "https://img10.360buyimg.com/imgzone/jfs/t19603/36/476548668/1410856/3461515e/5a796d4cN12e8238c.png",
      "https://img10.360buyimg.com/imgzone/jfs/t15178/162/2216051119/693758/b82fd92a/5a796d4cN1cf8a40d.png",
      "https://img10.360buyimg.com/imgzone/jfs/t16828/347/456250584/323764/f8328496/5a796d4cN36f31892.png",
      "https://img10.360buyimg.com/imgzone/jfs/t15178/179/2248360566/753130/43f1ef46/5a796d4dN67b02953.png",
      "https://img10.360buyimg.com/imgzone/jfs/t15178/179/2248360566/753130/43f1ef46/5a796d4dN67b02953.png",
      "https://img10.360buyimg.com/imgzone/jfs/t15892/129/2061991473/671031/1ef1d8bb/5a796d4dNd1bfcbde.png",
      "https://img10.360buyimg.com/imgzone/jfs/t17611/18/468227290/757272/1c4e11cf/5a796d4eN4b132258.png",
      "https://img10.360buyimg.com/imgzone/jfs/t16045/77/2021272099/751739/a3c7c742/5a796d4eNdca3af9b.png",
      "https://img10.360buyimg.com/imgzone/jfs/t18067/298/451057908/1186343/956177ca/5a796d4bN4a4efdc1.jpg",
      "https://img10.360buyimg.com/imgzone/jfs/t16459/18/2043104386/807319/881ab8ca/5a796d4fN21b1aea3.png",
      "http://img30.360buyimg.com/popWaterMark/jfs/t19303/309/944741017/215900/2ed5d175/5ab1f4daN146029fa.jpg"
    ],
    cardCur: 0,
    countdown: null,
    h: '00',
    i: '00',
    s: '00',
    time: 20000
  },
  onLoad(options) {
    let userInfo = app.globalData.userInfo
    this.setData({
      avatarUrl: userInfo.avatarUrl,
      nickName: userInfo.nickName
    })
  },
  onShow() {
    clearInterval(this.data.countdown)
    this.doLoop();
  },
  onUnload() {
    clearInterval(this.data.countdown)
    this.setData({
      countdown: null
    })
  },
  // 去参团
  joinGroup() {
    wx.navigateTo({
      url: '/pages/index/group/join/join'
    })
  },
  // 轮播图切换
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  endOfTime() {
    clearInterval(this.data.countdown)
    this.setData({
      countdown: null
    })
    this.triggerEvent('end', {});
  },
  doLoop() {
    let seconds = this.data.time || 0
    this.countDown(seconds)
    this.setData({
      countdown: setInterval(() => {
        seconds--
        if (seconds < 0) {
          this.endOfTime()
          return
        }
        this.countDown(seconds)
      }, 1000)
    })
  },
  countDown(seconds) {
    let [day, hour, minute, second] = [0, 0, 0, 0]
    if (seconds > 0) {
      day = this.data.days ? Math.floor(seconds / (60 * 60 * 24)) : 0
      hour = Math.floor(seconds / (60 * 60)) - (day * 24)
      minute = Math.floor(seconds / 60) - (hour * 60) - (day * 24 * 60)
      second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
    } else {
      this.endOfTime()
    }
    hour = hour < 10 ? ('0' + hour) : hour
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second
    this.setData({
      d: day,
      h: hour,
      i: minute,
      s: second
    })
  }
})