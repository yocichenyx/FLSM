Page({

  /**
   * 页面的初始数据
   */
  data: {
    introText: "这是一个基于微信和人脸识别的、用于个人密码管理的小程序\n优势：相比与一般记事本或备忘录，安全性有很大提升，易用性也很强！\n开发团队：Yociknow \n成员：yocichen \nCopyright © 2019 yocichen",
    vrsText: "当前版本: v0.9.0 \nCopyright © 2019 yocichen",
    hiddenModal_show : true,
    currentTitle : "",
    currentText : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  /**
   * 我的简介响应点击事件
   */
  btn_intro: function() {
    this.setData({
      hiddenModal_show: false,
      currentTitle: "我的简介",
      currentText: this.data.introText
    })
  },
  /**
   *版本管理响应点击事件
   */
  btn_vrs: function() {
    this.setData({
      hiddenModal_show: false,
      currentTitle: "版本管理",
      currentText: this.data.vrsText
    })
  },
  /**
   * 弹窗确认
   */
  modal_show_confirm:function(){
    this.setData({
      hiddenModal_show: true
    })
  },
    /**
   * 弹窗取消
   */
  modal_show_cancel: function () {
    this.setData({
      hiddenModal_show: true
    })
  },
    /**
   * 退出登陆，回到登陆注册页
   */
  btn_back:function() {
    //这里wx.navigateTo({url: '',}) 和 wx.switchTab({url: '',})都不奏效，需要所有页面出栈，特定页面重新加载
    wx.reLaunch({
      url: '../index/index',
    })
  }
})