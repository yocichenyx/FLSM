var app = getApp();

const initText='点击下方图标，方可添加账号密码...\n';
const extera=[];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mytext:initText,
    hiddenModal_input : true,
    hiddenModal_showInfo : true,
    hiddenModal_delInfo : true,
    add_key : "ID",
    arr : ['*@*.com', '*'],
    info : null,
    cur_key : null,
    cur_pwd : null,
    cur_label : null,
    inputText : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showTabBar({})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获取缓存信息，用于初次显示 
    try {
      const res = wx.getStorageInfoSync()
      this.setData({
        info: res.keys
      })
    }
    catch (e) {
      console.log(e.data)
    }
    //移除无用logs数据
    wx.removeStorage({
      key: 'logs',
      success: function (res) { },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad()
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

  //添加图片的响应函数
  addpic : function(e) {
    this.setData({
      hiddenModal_input : false
    })
  },

//输入新账号密码弹窗的取消函数
  modal_cancel : function() {
    this.setData({
      hiddenModal_input : true
    })
  },

//输入新账号密码弹窗的确认函数
  modal_confirm : function() {
    this.setData({
      hiddenModal_input : true,
    }),
    
    //移除无用logs数据
    wx.removeStorage({
      key: 'logs',
      success: function(res) {},
    }),
    
    //账号密码写入缓存 !!!不要直接使用变量名称
    wx.setStorageSync(this.data.add_key, this.data.arr)
    //获取缓存信息
    try{
      const res = wx.getStorageInfoSync()
      this.setData({
        info : res.keys
      })
    }
    catch(e){
      console.log(e.data)
    }
    //缓存后，清除输入框数据
    this.setData({
      inputText : ""
    })
  },

  //添加弹窗输入账号函数
  addkey : function(e) {
    this.setData({
      add_key:e.detail.value
    })
  },

//添加弹窗输入密码函数
  addvalue_pwd : function(e) {
    var arr_pwd = "";
    this.setData({
      arr_pwd : e.detail.value
    });
    this.data.arr[0] = this.data.arr_pwd;
  },

  //添加弹窗输入标签函数
  addvalue_label: function (e) {
    var arr_label = "";
    this.setData({
      arr_label: e.detail.value
    });
    this.data.arr[1] = this.data.arr_label;
  },

//触摸显示账号和密码弹窗
  touchShow: function(e) {
    //显示弹窗
     this.setData({
       hiddenModal_showInfo : false
     })
    //获取账号
      var i = e.currentTarget.id
      this.setData({
        cur_key : this.data.info[i]
      })
    //获取密码&标签
    var that = this
    wx.getStorage({
      key: this.data.cur_key,
      success: function(res) {
        //赋值
        that.setData({
          cur_pwd:res.data[0],
          cur_label:res.data[1]
        })
      }     
    })
  },

//触摸弹窗-取消
  modal_showInfo_cancel: function() {
    this.setData({
      hiddenModal_showInfo: true
    })
  },

//触摸弹窗-确认
  modal_showInfo_confirm: function () {
    this.setData({
      hiddenModal_showInfo: true
    })
  },

//删除当前选中记录
  deleteRecord: function(e){
    //获取账号
    var i = e.currentTarget.id
    this.setData({
      cur_key: this.data.info[i]
    })
    //获取密码&标签
    var that = this
    wx.getStorage({
      key: this.data.cur_key,
      success: function (res) {
        //赋值
        that.setData({
          cur_pwd: res.data[0],
          cur_label: res.data[1]
        })
      }
    })
    //显示弹窗
    this.setData({
      hiddenModal_delInfo : false
    })
  },

//删除弹窗确认
  modal_delInfo_confirm: function(){
    this.setData({
      hiddenModal_delInfo: true
    }),
    //予以删除
    wx.removeStorage({
      key: this.data.cur_key,
      success: function (res) {
       console.log("删除成功")
      },
    }),
    this.onReady()
  },

//删除弹窗取消
  modal_delInfo_cancel: function(){
    this.setData({
      hiddenModal_delInfo: true
    })
  }

})