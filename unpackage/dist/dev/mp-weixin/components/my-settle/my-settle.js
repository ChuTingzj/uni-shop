"use strict";
var common_vendor = require("../../common/vendor.js");
var store_cart = require("../../store/cart.js");
var store_user = require("../../store/user.js");
const _sfc_main = {
  setup(__props) {
    const cartStore = store_cart.useCartStore();
    const userStore = store_user.useUserStore();
    let isFullCheck = common_vendor.computed$1(() => cartStore.total === cartStore.checkedCount);
    let seconds = common_vendor.ref(3);
    let timer = common_vendor.ref({
      value: {}
    });
    const changeAllState = () => {
      cartStore.updateAllGoodsState(!isFullCheck.value);
    };
    const settlement = () => {
      if (!cartStore.checkedCount)
        return common_vendor.index.$showMsg("\u8BF7\u9009\u62E9\u8981\u7ED3\u7B97\u7684\u5546\u54C1\uFF01");
      if (!userStore.addstr)
        return common_vendor.index.$showMsg("\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740\uFF01");
      if (!userStore.token)
        return delayNavigate();
      payOrder();
    };
    const payOrder = async () => {
      const orderInfo = {
        order_price: 0.01,
        consignee_addr: userStore.addstr,
        goods: cartStore.cart.filter((x) => x.goods_state).map((x) => ({
          goods_id: x.goods_id,
          goods_number: x.goods_count,
          goods_price: x.goods_price
        }))
      };
      const {
        data: res
      } = await common_vendor.index.$http.post("/api/public/v1/my/orders/create", orderInfo);
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg("\u521B\u5EFA\u8BA2\u5355\u5931\u8D25\uFF01");
      const orderNumber = res.message.order_number;
      const {
        data: res2
      } = await common_vendor.index.$http.post("/api/public/v1/my/orders/req_unifiedorder", {
        order_number: orderNumber
      });
      if (res2.meta.status !== 200)
        return common_vendor.index.$showError("\u9884\u4ED8\u8BA2\u5355\u751F\u6210\u5931\u8D25\uFF01");
      const payInfo = res2.message.pay;
      const [err, succ] = await common_vendor.index.requestPayment(payInfo);
      if (err)
        return common_vendor.index.$showMsg("\u8BA2\u5355\u672A\u652F\u4ED8\uFF01");
      const {
        data: res3
      } = await common_vendor.index.$http.post("/api/public/v1/my/orders/chkOrder", {
        order_number: orderNumber
      });
      if (res3.meta.status !== 200)
        return common_vendor.index.$showMsg("\u8BA2\u5355\u672A\u652F\u4ED8\uFF01");
      common_vendor.index.showToast({
        title: "\u652F\u4ED8\u5B8C\u6210\uFF01",
        icon: "success"
      });
    };
    const showTips = (n) => {
      common_vendor.index.showToast({
        icon: "none",
        title: "\u8BF7\u767B\u5F55\u540E\u518D\u7ED3\u7B97\uFF01" + n + " \u79D2\u540E\u81EA\u52A8\u8DF3\u8F6C\u5230\u767B\u5F55\u9875",
        mask: true,
        duration: 1500
      });
    };
    const delayNavigate = () => {
      seconds.value = 3;
      showTips(seconds.value);
      timer.value = setInterval(() => {
        seconds.value--;
        if (seconds.value <= 0) {
          clearInterval(timer.value);
          common_vendor.index.switchTab({
            url: "/pages/My/My",
            success: () => {
              userStore.updateRedirectInfo({
                openType: "switchTab",
                from: "/pages/Cart/Cart"
              });
            }
          });
          return;
        }
        showTips(seconds.value);
      }, 1e3);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(isFullCheck),
        b: common_vendor.o(changeAllState),
        c: common_vendor.t(common_vendor.unref(cartStore).checkedGoodsAmount),
        d: common_vendor.t(common_vendor.unref(cartStore).checkedCount),
        e: common_vendor.o(settlement)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-settle/my-settle.vue"]]);
wx.createComponent(Component);
