"use strict";
var common_vendor = require("../../common/vendor.js");
var pages_Cate_hooks_useCateList = require("./hooks/useCateList.js");
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
    const {
      wh,
      active,
      scrollTop,
      cateList,
      cateLevel2,
      activeChanged,
      gotoGoodsList
    } = pages_Cate_hooks_useCateList.useCateList();
    const gotoSearch = () => {
      common_vendor.index.navigateTo({
        url: "/subpackage/Search/Search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(gotoSearch),
        b: common_vendor.f(common_vendor.unref(cateList).value, (item, i, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.n(i === common_vendor.unref(active) ? "active" : ""),
            c: common_vendor.o(($event) => common_vendor.unref(activeChanged)(i)),
            d: i
          };
        }),
        c: common_vendor.unref(wh) + "px",
        d: common_vendor.f(common_vendor.unref(cateLevel2).value, (item2, i2, i0) => {
          return {
            a: common_vendor.t(item2.cat_name),
            b: common_vendor.f(item2.children, (item3, i3, i1) => {
              return {
                a: item3.cat_icon,
                b: common_vendor.t(item3.cat_name),
                c: i3,
                d: common_vendor.o(($event) => common_vendor.unref(gotoGoodsList)(item3))
              };
            }),
            c: i2
          };
        }),
        e: common_vendor.unref(wh) + "px",
        f: common_vendor.unref(scrollTop)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/pages/Cate/Cate.vue"]]);
wx.createPage(MiniProgramPage);
