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
    },
    checkedCount: (state) => {
      return state.cart.filter((x) => x.goods_state === true).reduce((total, item) => total += item.goods_count, 0);
    },
    checkedGoodsAmount: (state) => {
      return state.cart.filter((x) => x.goods_state).reduce((total, item) => total += item.goods_count * item.goods_price, 0).toFixed(2);
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
    },
    updateAllGoodsState(newState) {
      this.cart.forEach((x) => x.goods_state = newState);
      this.saveToStorage();
    }
  }
});
exports.useCartStore = useCartStore;
