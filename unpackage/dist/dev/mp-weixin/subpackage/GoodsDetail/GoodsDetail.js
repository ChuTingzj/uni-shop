"use strict";
var common_vendor = require("../../common/vendor.js");
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
    let goods_info = common_vendor.reactive({ value: {} });
    const options = common_vendor.reactive([{
      icon: "shop",
      text: "\u5E97\u94FA"
    }, {
      icon: "cart",
      text: "\u8D2D\u7269\u8F66",
      info: 2
    }]);
    const buttonGroup = common_vendor.reactive([{
      text: "\u52A0\u5165\u8D2D\u7269\u8F66",
      backgroundColor: "#ff0000",
      color: "#fff"
    }, {
      text: "\u7ACB\u5373\u8D2D\u4E70",
      backgroundColor: "#ffa200",
      color: "#fff"
    }]);
    common_vendor.onLoad((options2) => {
      const goods_id = options2.goods_id;
      getGoodsDetail(goods_id);
    });
    const preview = (i) => {
      common_vendor.index.previewImage({
        current: i,
        urls: goods_info.value.pics.map((x) => x.pics_big)
      });
    };
    const getGoodsDetail = async (goods_id) => {
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/goods/detail", {
        goods_id
      });
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;" ').replace(/webp/g, "jpg");
      goods_info.value = res.message;
      console.log(goods_info);
    };
    const onClick = (e) => {
      if (e.content.text === "\u8D2D\u7269\u8F66") {
        common_vendor.index.switchTab({
          url: "/pages/cart/cart"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(goods_info).value.goods_name
      }, common_vendor.unref(goods_info).value.goods_name ? {
        b: common_vendor.f(common_vendor.unref(goods_info).value.pics, (item, i, i0) => {
          return {
            a: item.pics_big,
            b: common_vendor.o(($event) => preview(i)),
            c: i
          };
        }),
        c: common_vendor.t(common_vendor.unref(goods_info).value.goods_price),
        d: common_vendor.t(common_vendor.unref(goods_info).value.goods_name),
        e: common_vendor.p({
          type: "star",
          size: "18",
          color: "gray"
        }),
        f: common_vendor.unref(goods_info).value.goods_introduce,
        g: common_vendor.o(onClick),
        h: common_vendor.o(_ctx.buttonClick),
        i: common_vendor.p({
          fill: true,
          options: common_vendor.unref(options),
          buttonGroup: common_vendor.unref(buttonGroup)
        })
      } : {});
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/subpackage/GoodsDetail/GoodsDetail.vue"]]);
wx.createPage(MiniProgramPage);
