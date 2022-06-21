"use strict";
var common_vendor = require("../../../common/vendor.js");
function useFloorList() {
  let floorList = common_vendor.reactive({
    value: []
  });
  common_vendor.onLoad(() => {
    getFloorList();
  });
  const getFloorList = async () => {
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/home/floordata");
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    res.message.forEach((floor) => {
      floor.product_list.forEach((prod) => {
        prod.url = "/subpackage/GoodsList/GoodsList?" + prod.navigator_url.split("?")[1];
      });
    });
    floorList.value = res.message;
  };
  return {
    floorList
  };
}
exports.useFloorList = useFloorList;
