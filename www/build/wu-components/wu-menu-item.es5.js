/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-menu-item', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuMenuItem = /** @class */ (function () {
        function WuMenuItem() {
        }
        WuMenuItem.prototype.render = function () {
            return (h("div", { class: "menu-item" }, h("slot", null)));
        };
        Object.defineProperty(WuMenuItem, "is", {
            get: function () { return "wu-menu-item"; },
            enumerable: true,
            configurable: true
        });
        return WuMenuItem;
    }());
    exports.WuMenuItem = WuMenuItem;
    Object.defineProperty(exports, '__esModule', { value: true });
});
