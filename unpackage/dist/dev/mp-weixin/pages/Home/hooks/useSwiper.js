"use strict";
var common_vendor = require("../../../common/vendor.js");
function useSwiper() {
  let swiperList = common_vendor.reactive({
    value: []
  });
  common_vendor.onLoad(() => {
    getSwiperList();
  });
  const getSwiperList = async () => {
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/home/swiperdata");
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    swiperList.value = res.message;
  };
  return {
    swiperList
  };
}
exports.useSwiper = useSwiper;
