"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_Home_hooks_useSwiper = require("./hooks/useSwiper.js");
var pages_Home_hooks_useNavList = require("./hooks/useNavList.js");
var pages_Home_hooks_useFloorList = require("./hooks/useFloorList.js");
var hooks_useRenderBadge = require("../../hooks/useRenderBadge.js");
require("../../store/cart.js");
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
const _sfc_main = {
  setup(__props) {
    hooks_useRenderBadge.useRenderBage();
    const {
      swiperList
    } = pages_Home_hooks_useSwiper.useSwiper();
    const {
      navList,
      navClickHandler
    } = pages_Home_hooks_useNavList.useNavList();
    const {
      floorList
    } = pages_Home_hooks_useFloorList.useFloorList();
    const gotoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/subpackage/Search/Search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gotoSearch),
        b: common_vendor.f(common_vendor.unref(swiperList).value, (item, i, i0) => {
          return {
            a: item.image_src,
            b: "/subpackage/GoodsDetail/GoodsDetail?goods_id=" + item.goods_id,
            c: i
          };
        }),
        c: common_vendor.f(common_vendor.unref(navList).value, (item, i, i0) => {
          return {
            a: item.image_src,
            b: i,
            c: common_vendor.o(($event) => common_vendor.unref(navClickHandler)(item))
          };
        }),
        d: common_vendor.f(common_vendor.unref(floorList).value, (item, i, i0) => {
          return {
            a: item.floor_title.image_src,
            b: item.product_list[0].image_src,
            c: item.product_list[0].image_width + "rpx",
            d: item.product_list[0].url,
            e: common_vendor.f(item.product_list.slice(1), (item2, index2, i1) => {
              return {
                a: item2.image_src,
                b: item2.image_width + "rpx",
                c: index2,
                d: item2.url
              };
            }),
            f: i
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/pages/Home/Home.vue"]]);
wx.createPage(MiniProgramPage);
