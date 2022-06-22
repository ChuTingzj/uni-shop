"use strict";
var common_vendor = require("../common/vendor.js");
var store_cart = require("../store/cart.js");
function useRenderBage() {
  const cartStore = store_cart.useCartStore();
  common_vendor.onShow(() => {
    setBadge();
  });
  const setBadge = () => {
    common_vendor.index.setTabBarBadge({
      index: 2,
      text: cartStore.total + ""
    });
  };
  return {
    setBadge
  };
}
exports.useRenderBage = useRenderBage;
