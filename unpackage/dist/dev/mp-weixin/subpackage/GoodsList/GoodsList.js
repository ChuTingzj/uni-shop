"use strict";
var common_vendor = require("../../common/vendor.js");
var subpackage_GoodsList_hooks_useGoodsList = require("./hooks/useGoodsList.js");
var subpackage_GoodsList_hooks_usePullDown = require("./hooks/usePullDown.js");
var subpackage_GoodsList_hooks_useReachBottom = require("./hooks/useReachBottom.js");
require("../../utils/throttle.js");
if (!Array) {
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  _easycom_my_goods2();
}
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
if (!Math) {
  _easycom_my_goods();
}
const _sfc_main = {
  setup(__props) {
    subpackage_GoodsList_hooks_useGoodsList.useGoodsList();
    subpackage_GoodsList_hooks_usePullDown.usePullDown();
    subpackage_GoodsList_hooks_useReachBottom.useReachBottom();
    const gotoDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/subpackage/GoodsDetail/GoodsDetail?goods_id=" + item.goods_id
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(subpackage_GoodsList_hooks_useGoodsList.goodsList).value, (goods, i, i0) => {
          return {
            a: "2e38dcac-0-" + i0,
            b: common_vendor.p({
              goods
            }),
            c: common_vendor.o(($event) => gotoDetail(goods)),
            d: i
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/subpackage/GoodsList/GoodsList.vue"]]);
wx.createPage(MiniProgramPage);
