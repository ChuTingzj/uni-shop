"use strict";
var common_vendor = require("../../../common/vendor.js");
function useCateList() {
  let wh = common_vendor.ref(0);
  let active = common_vendor.ref(0);
  let scrollTop = common_vendor.ref(0);
  let cateList = common_vendor.reactive({
    value: []
  });
  let cateLevel2 = common_vendor.reactive({
    value: []
  });
  common_vendor.onLoad(() => {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    wh.value = sysInfo.windowHeight - 50;
    getCateList();
  });
  const getCateList = async () => {
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/categories");
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    cateList.value = res.message;
    cateLevel2.value = res.message[0].children;
  };
  const activeChanged = (index) => {
    active.value = index;
    cateLevel2.value = cateList.value[index].children;
    scrollTop.value = scrollTop.value ? 0 : 1;
  };
  const gotoGoodsList = (item) => {
    common_vendor.index.navigateTo({
      url: "/subpkg/goods_list/goods_list?cid=" + item.cat_id
    });
  };
  return {
    wh,
    active,
    scrollTop,
    cateList,
    cateLevel2,
    activeChanged,
    gotoGoodsList
  };
}
exports.useCateList = useCateList;
