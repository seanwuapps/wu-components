/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-col', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuCol = /** @class */ (function () {
        function WuCol() {
            this.basis = '';
            this.portion = '1';
        }
        WuCol.prototype.componentDidLoad = function () {
            this.col.style.cssText = "flex-grow: " + this.portion;
            if (this.basis.length) {
                this.col.style.cssText += "flex-basis: " + this.basis + "; flex-shrink: 0;";
            }
        };
        WuCol.prototype.render = function () {
            return (h("slot", null));
        };
        Object.defineProperty(WuCol, "is", {
            get: function () { return "wu-col"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuCol, "properties", {
            get: function () {
                return {
                    "basis": {
                        "type": String,
                        "attr": "basis"
                    },
                    "col": {
                        "elementRef": true
                    },
                    "portion": {
                        "type": String,
                        "attr": "portion"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuCol, "style", {
            get: function () { return "wu-col {\n  max-width: 100%; }"; },
            enumerable: true,
            configurable: true
        });
        return WuCol;
    }());
    exports.WuCol = WuCol;
    Object.defineProperty(exports, '__esModule', { value: true });
});
