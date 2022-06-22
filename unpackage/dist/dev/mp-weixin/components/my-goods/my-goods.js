"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    let toFixedNum = common_vendor.computed$1(() => {
      return Number(props.goods.goods_price).toFixed(2);
    });
    const defaultPic = common_vendor.ref("https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png");
    return (_ctx, _cache) => {
      return {
        a: __props.goods.goods_small_logo || defaultPic.value,
        b: common_vendor.t(__props.goods.goods_name),
        c: common_vendor.t(common_vendor.unref(toFixedNum))
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
