"use strict";
var common_vendor = require("../../common/vendor.js");
var store_user = require("../../store/user.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  setup(__props) {
    const userStore = store_user.useUserStore();
    const getUserInfo = (e) => {
      if (e.detail.errMsg === "getUserInfo:fail auth deny")
        return common_vendor.index.$showMsg("\u60A8\u53D6\u6D88\u4E86\u767B\u5F55\u6388\u6743\uFF01");
      userStore.updateUserInfo(e.detail.userInfo);
      getToken(e.detail);
    };
    const getToken = async (info) => {
      const res = await common_vendor.index.login().catch((err) => err);
      if (res.errMsg !== "login:ok")
        return common_vendor.index.$showError("\u767B\u5F55\u5931\u8D25\uFF01");
      const query = {
        code: res.code,
        encryptedData: info.encryptedData,
        iv: info.iv,
        rawData: info.rawData,
        signature: info.signature
      };
      const {
        data: loginResult
      } = await common_vendor.index.$http.post("/api/public/v1/users/wxlogin", query);
      if (loginResult.meta.status !== 200)
        return common_vendor.index.$showMsg("\u767B\u5F55\u5931\u8D25\uFF01");
      userStore.updateToken(loginResult.message.token);
      navigateBack();
    };
    const navigateBack = () => {
      if (userStore.redirectInfo && userStore.redirectInfo.openType === "switchTab") {
        common_vendor.index.switchTab({
          url: userStore.redirectInfo.from,
          complete: () => {
            userStore.updateRedirectInfo(null);
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "contact-filled",
          size: "100",
          color: "#AFAFAF"
        }),
        b: common_vendor.o(getUserInfo)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
