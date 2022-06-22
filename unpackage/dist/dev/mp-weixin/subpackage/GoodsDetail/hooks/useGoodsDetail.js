"use strict";
var common_vendor = require("../../../common/vendor.js");
let goods_info = common_vendor.reactive({
  value: {}
});
function useGoodsDetail() {
  const getGoodsDetail = async (goods_id) => {
    const {
      data: res
    } = await common_vendor.index.$http.get("/api/public/v1/goods/detail", {
      goods_id
    });
    if (res.meta.status !== 200)
      return common_vendor.index.$showMsg();
    res.message.goods_introduce = res.message.goods_introduce.replace(/<img /g, '<img style="display:block;" ').replace(/webp/g, "jpg");
    goods_info.value = res.message;
  };
  const preview = (i) => {
    common_vendor.index.previewImage({
      current: i,
      urls: goods_info.value.pics.map((x) => x.pics_big)
    });
  };
  return {
    getGoodsDetail,
    preview
  };
}
exports.goods_info = goods_info;
exports.useGoodsDetail = useGoodsDetail;
