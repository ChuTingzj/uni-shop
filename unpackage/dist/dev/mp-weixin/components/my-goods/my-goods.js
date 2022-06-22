"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
const _sfc_main = {
  props: {
    goods: {
      type: Object,
      default: {}
    },
    showRadio: {
      type: Boolean,
      default: false
    },
    showNum: {
      type: Boolean,
      default: false
    }
  },
  emits: ["radio-change", "num-change"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    let toFixedNum = common_vendor.computed$1(() => {
      return Number(props.goods.goods_price).toFixed(2);
    });
    const defaultPic = common_vendor.ref("https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png");
    const radioClickHandler = () => {
      $emit("radio-change", {
        goods_id: props.goods.goods_id,
        goods_state: !props.goods.goods_state
      });
    };
    const numChangeHandler = (val) => {
      $emit("num-change", {
        goods_id: props.goods.goods_id,
        goods_count: +val
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.showRadio
      }, __props.showRadio ? {
        b: common_vendor.o(radioClickHandler),
        c: __props.goods.goods_state
      } : {}, {
        d: __props.goods.goods_small_logo || defaultPic.value,
        e: common_vendor.t(__props.goods.goods_name),
        f: common_vendor.t(common_vendor.unref(toFixedNum)),
        g: __props.showNum
      }, __props.showNum ? {
        h: common_vendor.o(numChangeHandler),
        i: common_vendor.p({
          value: __props.goods.goods_count,
          min: 1
        })
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/components/my-goods/my-goods.vue"]]);
wx.createComponent(Component);
