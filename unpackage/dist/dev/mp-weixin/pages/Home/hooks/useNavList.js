"use strict";
var common_vendor = require("../../../common/vendor.js");
function useNavList() {
  let navList = common_vendor.reactive({
    value: []
  });
  common_vendor.onLoad(() => {
    getNavList();
  });
  const getNavList = async () => {
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/home/catitems");
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    navList.value = res.message;
  };
  const navClickHandler = (item) => {
    if (item.name === "\u5206\u7C7B") {
      common_vendor.index.switchTab({
        url: "/pages/Cate/Cate"
      });
    }
  };
  return {
    navList,
    navClickHandler
  };
}
exports.useNavList = useNavList;
