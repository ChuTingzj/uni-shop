"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup(__props) {
    const queryObj = common_vendor.reactive({
      query: "",
      cid: "",
      pagenum: 1,
      pagesize: 10
    });
    const goodsList = common_vendor.reactive({
      value: []
    });
    let total = common_vendor.ref(0);
    const defaultPic = common_vendor.ref("https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png");
    common_vendor.onLoad((options) => {
      queryObj.query = options.query || "";
      queryObj.cid = options.cid || "";
      getGoodsList();
    });
    const getGoodsList = async () => {
      const {
        data: res
      } = await common_vendor.index.$http.get("/api/public/v1/goods/search", queryObj);
      if (res.meta.status !== 200)
        return common_vendor.index.$showMsg();
      goodsList.value = res.message.goods;
      total.value = res.message.total;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(goodsList).value, (goods, i, i0) => {
          return {
            a: goods.goods_small_logo || defaultPic.value,
            b: common_vendor.t(goods.goods_name),
            c: common_vendor.t(goods.goods_price),
            d: i
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/PracticeSpace/uni-shop/shop/subpackage/GoodsList/GoodsList.vue"]]);
wx.createPage(MiniProgramPage);
