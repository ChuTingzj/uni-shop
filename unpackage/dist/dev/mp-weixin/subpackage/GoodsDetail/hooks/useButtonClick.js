"use strict";
var common_vendor = require("../../../common/vendor.js");
var subpackage_GoodsDetail_hooks_useInnerHooks = require("./useInnerHooks.js");
var subpackage_GoodsDetail_hooks_useGoodsDetail = require("./useGoodsDetail.js");
function useButtonClick() {
  const onClick = (e) => {
    if (e.content.text === "\u8D2D\u7269\u8F66") {
      common_vendor.index.switchTab({
        url: "/pages/Cart/Cart"
      });
    }
  };
  const buttonClick = (e) => {
    if (e.content.text === "\u52A0\u5165\u8D2D\u7269\u8F66") {
      const goods = {
        goods_id: subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info.value.goods_id,
        goods_name: subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info.value.goods_name,
        goods_price: subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info.value.goods_price,
        goods_count: 1,
        goods_small_logo: subpackage_GoodsDetail_hooks_useGoodsDetail.goods_info.value.goods_small_logo,
        goods_state: true
      };
      subpackage_GoodsDetail_hooks_useInnerHooks.cartStore.addToCart(goods);
    }
  };
  return {
    onClick,
    buttonClick
  };
}
exports.useButtonClick = useButtonClick;
