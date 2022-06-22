"use strict";
var common_vendor = require("../../../common/vendor.js");
let total = common_vendor.ref(0);
const queryObj = common_vendor.reactive({
  query: "",
  cid: "",
  pagenum: 1,
  pagesize: 10
});
const goodsList = common_vendor.reactive({
  value: []
});
function useGoodsList() {
  common_vendor.onLoad((options) => {
    queryObj.query = options.query || "";
    queryObj.cid = options.cid || "";
    getGoodsList();
  });
}
const getGoodsList = async (isPullDown) => {
  const {
    data: res
  } = await common_vendor.index.$http.get("/api/public/v1/goods/search", queryObj);
  if (res.meta.status !== 200)
    return common_vendor.index.$showMsg();
  if (isPullDown) {
    goodsList.value = [...res.message.goods, ...goodsList.value];
    common_vendor.index.stopPullDownRefresh();
  } else {
    goodsList.value = [...goodsList.value, ...res.message.goods];
  }
  total.value = res.message.total;
};
exports.getGoodsList = getGoodsList;
exports.goodsList = goodsList;
exports.queryObj = queryObj;
exports.total = total;
exports.useGoodsList = useGoodsList;
