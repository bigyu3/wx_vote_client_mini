// pages/detail/optiondetail/optiondetail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: [],
  },

  /**
   * 生命周期函数--监听页面加载 ty_do
   */
  onLoad: function (options) {
    // debugger;

    //获取投票id
    var vid = options.id;
    var that = this;
    wx.showLoading({
      title: '加载中...',
    })
    //获取选项信息，投票者
    wx.request({
      url: app.globalData.host + "/wx_graduation_voteforyou/",
      data: { "scene": "get_optiondetail", "id": vid },//ty_5-8_22:51
      success: function (e) {
        debugger;
        //这里时json 要转数组并不用
        let resJsonArr = e.data.optiondetailResult;
        

        that.setData({
          // detail: e.data.optiondetailResult,//old
          detail: resJsonArr,//new
        }),
        console.log("detail",that.data.detail);
        wx.hideLoading();
      }, fail: function () {
        wx.hideLoading();
      }
    })
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

  }
})

