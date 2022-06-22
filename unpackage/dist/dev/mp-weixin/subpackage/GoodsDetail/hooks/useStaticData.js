"use strict";
var common_vendor = require("../../../common/vendor.js");
const options = common_vendor.reactive([{
  icon: "shop",
  text: "\u5E97\u94FA"
}, {
  icon: "cart",
  text: "\u8D2D\u7269\u8F66",
  info: 2
}]);
const buttonGroup = common_vendor.reactive([{
  text: "\u52A0\u5165\u8D2D\u7269\u8F66",
  backgroundColor: "#ff0000",
  color: "#fff"
}, {
  text: "\u7ACB\u5373\u8D2D\u4E70",
  backgroundColor: "#ffa200",
  color: "#fff"
}]);
exports.buttonGroup = buttonGroup;
exports.options = options;
