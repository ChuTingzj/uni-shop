"use strict";
var common_vendor = require("../common/vendor.js");
const useCartStore = common_vendor.defineStore("cart", {
  state: () => {
    return {
      cart: JSON.parse(common_vendor.index.getStorageSync("cart") || "[]")
    };
  },
  getters: {
    total: (state) => {
      let c = 0;
      state.cart.forEach((goods) => c += goods.goods_count);
      return c;
    }
  },
  actions: {
    addToCart(goods) {
      const findResult = this.cart.find((x) => x.goods_id === goods.goods_id);
      if (!findResult) {
        this.cart.push(goods);
      } else {
        findResult.goods_count++;
      }
      this.saveToStorage();
    },
    saveToStorage() {
      common_vendor.index.setStorageSync("cart", JSON.stringify(this.cart));
    },
    updateGoodsState(goods) {
      const findResult = this.cart.find((x) => x.goods_id === goods.goods_id);
      if (findResult) {
        findResult.goods_state = goods.goods_state;
        this.saveToStorage();
      }
    },
    updateGoodsCount(goods) {
      const findResult = this.cart.find((x) => x.goods_id === goods.goods_id);
      if (findResult) {
        findResult.goods_count = goods.goods_count;
        this.saveToStorage();
      }
    },
    removeGoodsById(goods_id) {
      this.cart = this.cart.filter((x) => x.goods_id !== goods_id);
      this.saveToStorage();
    }
  }
});
exports.useCartStore = useCartStore;
