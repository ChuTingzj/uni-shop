"use strict";
var common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/Home/Home.js";
  "./pages/Cate/Cate.js";
  "./pages/Cart/Cart.js";
  "./pages/My/My.js";
  "./subpackage/GoodsDetail/GoodsDetail.js";
  "./subpackage/GoodsList/GoodsList.js";
  "./subpackage/Search/Search.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/App.vue"]]);
common_vendor.index.$http = common_vendor.$http;
common_vendor.index.$showMsg = function(title = "\u6570\u636E\u52A0\u8F7D\u5931\u8D25", duration = 1500) {
  common_vendor.index.showToast({
    title,
    duration,
    icon: "none"
  });
};
common_vendor.$http.baseUrl = "https://api-ugo-web.itheima.net";
common_vendor.$http.beforeRequest = function(options) {
  common_vendor.index.showLoading({
    title: "\u6570\u636E\u52A0\u8F7D\u4E2D..."
  });
};
common_vendor.$http.afterRequest = function() {
  common_vendor.index.hideLoading();
};
App.mpType = "app";
const app = common_vendor.createApp(App);
app.config.productionTip = false;
app.mount();
