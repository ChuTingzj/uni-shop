"use strict";
var common_vendor = require("../../../common/vendor.js");
var utils_throttle = require("../../../utils/throttle.js");
var subpackage_GoodsList_hooks_useGoodsList = require("./useGoodsList.js");
function useReachBottom() {
  common_vendor.onReachBottom(utils_throttle.throttle(() => {
    if (subpackage_GoodsList_hooks_useGoodsList.queryObj.pagenum * subpackage_GoodsList_hooks_useGoodsList.queryObj.pagesize >= subpackage_GoodsList_hooks_useGoodsList.total.value)
      return common_vendor.index.$showMsg("\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01");
    subpackage_GoodsList_hooks_useGoodsList.queryObj.pagenum += 1;
    subpackage_GoodsList_hooks_useGoodsList.getGoodsList();
  }));
}
exports.useReachBottom = useReachBottom;
