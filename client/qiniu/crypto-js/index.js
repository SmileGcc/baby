;(function (root, factory, undef) {
    if (typeof exports === "object") {
        // CommonJS
        module.exports = exports = factory(require("./core"), require("./x64-core"), require("./enc-base64"), require("./sha1"), require("./hmac"));
    }
    else if (typeof define === "function" && define.amd) {
        // AMD
        define(["./core", "./x64-core", "./enc-base64", "./sha1", "./hmac"], factory);
    }
    else {
        // Global (browser)
        root.CryptoJS = factory(root.CryptoJS);
    }
}(this, function (CryptoJS) {

    return CryptoJS;

}));