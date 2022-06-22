"use strict";
var common_vendor = require("../../common/vendor.js");
var hooks_useRenderBadge = require("../../hooks/useRenderBadge.js");
var store_cart = require("../../store/cart.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_my_goods2 = common_vendor.resolveComponent("my-goods");
  const _easycom_uni_swipe_action_item2 = common_vendor.resolveComponent("uni-swipe-action-item");
  const _easycom_uni_swipe_action2 = common_vendor.resolveComponent("uni-swipe-action");
  (_easycom_uni_icons2 + _easycom_my_goods2 + _easycom_uni_swipe_action_item2 + _easycom_uni_swipe_action2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_my_goods = () => "../../components/my-goods/my-goods.js";
const _easycom_uni_swipe_action_item = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.js";
const _easycom_uni_swipe_action = () => "../../uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_my_goods + _easycom_uni_swipe_action_item + _easycom_uni_swipe_action)();
}
const _sfc_main = {
  setup(__props) {
    const {
      setBadge
    } = hooks_useRenderBadge.useRenderBage();
    const cartStore = store_cart.useCartStore();
    let status = common_vendor.ref("none");
    const options = [{
      text: "\u5220\u9664",
      style: {
        backgroundColor: "#C00000"
      }
    }];
    const radioChangeHandler = (e) => {
      cartStore.updateGoodsState(e);
    };
    const numberChangeHandler = (e) => {
      cartStore.updateGoodsCount(e);
    };
    const swipeActionClickHandler = (goods) => {
      cartStore.removeGoodsById(goods.goods_id);
      setBadge();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "shop",
          size: "18"
        }),
        b: common_vendor.f(common_vendor.unref(cartStore).cart, (goods, i, i0) => {
          return {
            a: "5fea5f38-3-" + i0 + "," + ("5fea5f38-2-" + i0),
            b: common_vendor.p({
              goods,
              ["show-radio"]: true,
              ["show-num"]: true
            }),
            c: common_vendor.o(($event) => swipeActionClickHandler(goods)),
            d: "5fea5f38-2-" + i0 + ",5fea5f38-1",
            e: i
          };
        }),
        c: common_vendor.o(radioChangeHandler),
        d: common_vendor.o(numberChangeHandler),
        e: common_vendor.p({
          show: common_vendor.unref(status),
          ["right-options"]: options
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/pages/Cart/Cart.vue"]]);
wx.createPage(MiniProgramPage);
