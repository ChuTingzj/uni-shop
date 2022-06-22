"use strict";
var common_vendor = require("../../../common/vendor.js");
var store_cart = require("../../../store/cart.js");
var subpackage_GoodsDetail_hooks_useStaticData = require("./useStaticData.js");
var subpackage_GoodsDetail_hooks_useGoodsDetail = require("./useGoodsDetail.js");
const cartStore = store_cart.useCartStore();
function useInnerHooks() {
  const {
    getGoodsDetail
  } = subpackage_GoodsDetail_hooks_useGoodsDetail.useGoodsDetail();
  common_vendor.watch(() => cartStore.total, (newValue, oldValue) => {
    const findResult = subpackage_GoodsDetail_hooks_useStaticData.options.find((x) => x.text === "\u8D2D\u7269\u8F66");
    if (findResult) {
      findResult.info = newValue;
    }
  }, {
    immediate: true
  });
  common_vendor.onLoad((options) => {
    const goods_id = options.goods_id;
    getGoodsDetail(goods_id);
  });
}
exports.cartStore = cartStore;
exports.useInnerHooks = useInnerHooks;
