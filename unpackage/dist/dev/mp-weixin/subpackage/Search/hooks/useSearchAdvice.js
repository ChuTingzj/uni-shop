"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_debounce = require("../../../utils/debounce.js");
function useSearchAdvice() {
  let kw = common_vendor.ref("");
  let searchResults = common_vendor.reactive({
    value: []
  });
  const historyList = common_vendor.reactive({
    value: ["a", "app", "apple"]
  });
  common_vendor.onLoad(() => {
    historyList.value = JSON.parse(common_vendor.index.getStorageSync("kw") || "[]");
  });
  let historys = common_vendor.computed$1(() => {
    return [...historyList.value].reverse();
  });
  const input = utils_debounce.debounce((e) => {
    kw.value = e;
    getSearchList();
  });
  const gotoGoodsList = (kw2) => {
    common_vendor.index.navigateTo({
      url: "/subpackage/GoodsList/GoodsList?query=" + kw2
    });
  };
  const cleanHistory = () => {
    historyList.value = [];
    common_vendor.index.setStorageSync("kw", "[]");
  };
  const getSearchList = async () => {
    if (kw.value === "") {
      searchResults.value = [];
      return;
    }
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/goods/qsearch", {
      query: kw.value
    });
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    searchResults.value = res.message;
    saveSearchHistory();
  };
  const saveSearchHistory = () => {
    historyList.value.push(kw.value);
    historyList.value = [...new Set(historyList.value)];
    common_vendor.index.setStorageSync("kw", JSON.stringify(historyList.value));
  };
  const gotoDetail = (goods_id) => {
    common_vendor.index.navigateTo({
      url: "/subpackage/GoodsDetail/GoodsDetail?goods_id=" + goods_id
    });
  };
  return {
    kw,
    searchResults,
    input,
    gotoDetail,
    historys,
    cleanHistory,
    gotoGoodsList
  };
}
exports.useSearchAdvice = useSearchAdvice;
