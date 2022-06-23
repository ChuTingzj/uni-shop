"use strict";
var common_vendor = require("../../common/vendor.js");
var hooks_useRenderBadge = require("../../hooks/useRenderBadge.js");
var store_user = require("../../store/user.js");
require("../../store/cart.js");
if (!Array) {
  const _easycom_my_login2 = common_vendor.resolveComponent("my-login");
  const _component_my_userinfo = common_vendor.resolveComponent("my-userinfo");
  (_easycom_my_login2 + _component_my_userinfo)();
}
const _easycom_my_login = () => "../../components/my-login/my-login.js";
if (!Math) {
  _easycom_my_login();
}
const _sfc_main = {
  setup(__props) {
    hooks_useRenderBadge.useRenderBage();
    const userStore = store_user.useUserStore();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(userStore).token
      }, !common_vendor.unref(userStore).token ? {} : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/pages/My/My.vue"]]);
wx.createPage(MiniProgramPage);
