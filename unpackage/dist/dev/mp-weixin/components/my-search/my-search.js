"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  props: {
    bgcolor: {
      type: String,
      default: "#c0000"
    },
    radius: {
      type: Number,
      default: 18
    }
  },
  emits: ["click"],
  setup(__props, { emit: $emit }) {
    const searchBoxHandler = () => {
      $emit("click");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "search",
          size: "17"
        }),
        b: common_vendor.o(searchBoxHandler),
        c: __props.radius + "px",
        d: __props.bgcolor
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-search/my-search.vue"]]);
wx.createComponent(Component);
