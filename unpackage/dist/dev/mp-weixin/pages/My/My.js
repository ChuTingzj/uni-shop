"use strict";
var hooks_useRenderBadge = require("../../hooks/useRenderBadge.js");
var common_vendor = require("../../common/vendor.js");
require("../../store/cart.js");
const _sfc_main = {
  setup(__props) {
    hooks_useRenderBadge.useRenderBage();
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/pages/My/My.vue"]]);
wx.createPage(MiniProgramPage);
