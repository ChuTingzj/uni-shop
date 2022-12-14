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
    const chooseAddress = async () => {
      const res = await common_vendor.index.chooseAddress().catch((err) => err);
      if (res.errMsg === "chooseAddress:ok") {
        userStore.updateAddress(res);
      }
      if (res.errMsg === "chooseAddress:fail auth deny" || res.errMsg === "chooseAddress:fail authorize no response") {
        reAuth();
      }
    };
    const reAuth = async () => {
      const [err2, confirmResult] = await common_vendor.index.showModal({
        content: "\u68C0\u6D4B\u5230\u60A8\u6CA1\u6253\u5F00\u5730\u5740\u6743\u9650\uFF0C\u662F\u5426\u53BB\u8BBE\u7F6E\u6253\u5F00\uFF1F",
        confirmText: "\u786E\u8BA4",
        cancelText: "\u53D6\u6D88"
      });
      if (err2)
        return;
      if (confirmResult.cancel)
        return common_vendor.index.$showMsg("\u60A8\u53D6\u6D88\u4E86\u5730\u5740\u6388\u6743\uFF01");
      if (confirmResult.confirm)
        return common_vendor.index.openSetting({
          success: (settingResult) => {
            if (settingResult.authSetting["scope.address"])
              return common_vendor.index.$showMsg("\u6388\u6743\u6210\u529F\uFF01\u8BF7\u9009\u62E9\u5730\u5740");
            if (!settingResult.authSetting["scope.address"])
              return common_vendor.index.$showMsg("\u60A8\u53D6\u6D88\u4E86\u5730\u5740\u6388\u6743\uFF01");
          }
        });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: JSON.stringify(common_vendor.unref(userStore).address) === "{}"
      }, JSON.stringify(common_vendor.unref(userStore).address) === "{}" ? {
        b: common_vendor.o(chooseAddress)
      } : {
        c: common_vendor.t(common_vendor.unref(userStore).address.userName),
        d: common_vendor.t(common_vendor.unref(userStore).address.telNumber),
        e: common_vendor.p({
          type: "arrowright",
          size: "16"
        }),
        f: common_vendor.t(common_vendor.unref(userStore).addstr),
        g: common_vendor.o(chooseAddress)
      });
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-address/my-address.vue"]]);
wx.createComponent(Component);
