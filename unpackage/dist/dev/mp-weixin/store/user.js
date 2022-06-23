"use strict";
var common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => {
    return {
      address: JSON.parse(common_vendor.index.getStorageSync("address") || "{}"),
      token: common_vendor.index.getStorageSync("token") || "",
      userinfo: JSON.parse(common_vendor.index.getStorageSync("userinfo") || "{}"),
      redirectInfo: null
    };
  },
  actions: {
    updateRedirectInfo(info) {
      this.redirectInfo = info;
    },
    updateToken(token) {
      this.token = token;
      this.saveTokenToStorage();
    },
    saveTokenToStorage() {
      common_vendor.index.setStorageSync("token", this.token);
    },
    updateAddress(address) {
      this.address = address;
      this.saveAddressToStorage();
    },
    saveAddressToStorage() {
      common_vendor.index.setStorageSync("address", JSON.stringify(this.address));
    },
    updateUserInfo(userinfo) {
      this.userinfo = userinfo;
      this.saveUserInfoToStorage();
    },
    saveUserInfoToStorage() {
      common_vendor.index.setStorageSync("userinfo", JSON.stringify(this.userinfo));
    }
  },
  getters: {
    addstr() {
      if (!this.address.provinceName)
        return "";
      return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo;
    }
  }
});
exports.useUserStore = useUserStore;
