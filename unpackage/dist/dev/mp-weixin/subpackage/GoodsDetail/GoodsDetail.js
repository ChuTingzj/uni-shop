"use strict";
var common_vendor = require("../../common/vendor.js");
var subpackage_GoodsDetail_hooks_useInnerHooks = require("./hooks/useInnerHooks.js");
var subpackage_GoodsDetail_hooks_useStaticData = require("./hooks/useStaticData.js");
var subpackage_GoodsDetail_hooks_useGoodsDetail = require("./hooks/useGoodsDetail.js");
var subpackage_GoodsDetail_hooks_useButtonClick = require("./hooks/useButtonClick.js");
require("../../store/cart.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_icons2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_goods_nav)();
}
const _sfc_main = {
  setup(__props) {
    subpackage_GoodsDetail_hooks_useInnerHooks.useInnerHooks();
    const {
      getGoodsDetail,
      preview
    } = subpackage_GoodsDetail_hooks_useGoodsDetail.useGoodsDetail();
    const {
      onClick,
      buttonClick
    } = subpackage_GoodsDetail_hooks_useButtonClick.useButtonClick();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.goods_name
      }, common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.goods_name ? {
        b: common_vendor.f(common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.pics, (item, i, i0) => {
          return {
            a: item.pics_big,
            b: common_vendor.o(($event) => common_vendor.unref(preview)(i)),
            c: i
          };
        }),
        c: common_vendor.t(common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.goods_price),
        d: common_vendor.t(common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.goods_name),
        e: common_vendor.p({
          type: "star",
          size: "18",
          color: "gray"
        }),
        f: common_vendor.t(common_vendor.unref(subpackage_GoodsDetail_hooks_useInnerHooks.cartStore).cart.length),
        g: common_vendor.unref(subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info).value.goods_introduce,
        h: common_vendor.o(common_vendor.unref(onClick)),
        i: common_vendor.o(common_vendor.unref(buttonClick)),
        j: common_vendor.p({
          fill: true,
          options: common_vendor.unref(subpackage_GoodsDetail_hooks_useStaticData.options),
          buttonGroup: common_vendor.unref(subpackage_GoodsDetail_hooks_useStaticData.buttonGroup)
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/subpackage/GoodsDetail/GoodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
