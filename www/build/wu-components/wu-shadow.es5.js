/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-shadow', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuShadow = /** @class */ (function () {
        function WuShadow() {
            this.type = 'box'; // or drop
            this.depth = 1;
        }
        WuShadow.prototype.render = function () {
            return (h("div", { class: "shadow-" + this.depth + " " + this.type }, h("slot", null)));
        };
        Object.defineProperty(WuShadow, "is", {
            get: function () { return "wu-shadow"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuShadow, "properties", {
            get: function () {
                return {
                    "depth": {
                        "type": Number,
                        "attr": "depth"
                    },
                    "type": {
                        "type": String,
                        "attr": "type"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuShadow, "style", {
            get: function () { return "wu-shadow .box {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }"; },
            enumerable: true,
            configurable: true
        });
        return WuShadow;
    }());
    exports.WuShadow = WuShadow;
    Object.defineProperty(exports, '__esModule', { value: true });
});
