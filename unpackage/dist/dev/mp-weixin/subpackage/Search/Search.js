"use strict";
var common_vendor = require("../../common/vendor.js");
var subpackage_Search_hooks_useSearchAdvice = require("./hooks/useSearchAdvice.js");
require("../../utils/debounce.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uni_tag2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uni_tag)();
}
const _sfc_main = {
  setup(__props) {
    const {
      kw,
      searchResults,
      input,
      gotoDetail,
      historys,
      cleanHistory,
      gotoGoodsList
    } = subpackage_Search_hooks_useSearchAdvice.useSearchAdvice();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(input)),
        b: common_vendor.p({
          radius: 100,
          cancelButton: "none"
        }),
        c: common_vendor.unref(searchResults).value.length !== 0
      }, common_vendor.unref(searchResults).value.length !== 0 ? {
        d: common_vendor.f(common_vendor.unref(searchResults).value, (item, i, i0) => {
          return {
            a: common_vendor.t(item.goods_name),
            b: "305df77c-1-" + i0,
            c: i,
            d: common_vendor.o(($event) => common_vendor.unref(gotoDetail)(item.goods_id))
          };
        }),
        e: common_vendor.p({
          type: "arrowright",
          size: "16"
        })
      } : {
        f: common_vendor.o(common_vendor.unref(cleanHistory)),
        g: common_vendor.p({
          type: "trash",
          size: "17"
        }),
        h: common_vendor.f(common_vendor.unref(historys), (item, i, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(gotoGoodsList)(item)),
            b: i,
            c: "305df77c-3-" + i0,
            d: common_vendor.p({
              text: item
            })
          };
        })
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/subpackage/Search/Search.vue"]]);
wx.createPage(MiniProgramPage);
