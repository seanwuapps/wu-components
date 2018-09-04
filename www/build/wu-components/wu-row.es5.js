/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-row', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuRow = /** @class */ (function () {
        function WuRow() {
            this.gap = '0';
        }
        WuRow.prototype.componentDidLoad = function () {
            this.el.style.cssText = "--gap:" + this.gap;
        };
        WuRow.prototype.render = function () {
            return h("slot", null);
        };
        Object.defineProperty(WuRow, "is", {
            get: function () { return "wu-row"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuRow, "properties", {
            get: function () {
                return {
                    "el": {
                        "elementRef": true
                    },
                    "gap": {
                        "type": String,
                        "attr": "gap"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuRow, "style", {
            get: function () { return "wu-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  \@media screen and (min-width: 768px) {\n    wu-row {\n      -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n      flex-direction: row; }\n      wu-row wu-col {\n        margin-bottom: 10px;\n        margin-right: var(--gap);\n        padding: 5px;\n        width: 100%;\n        min-height: 1px;\n        -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        max-width: 100%; }\n        wu-row wu-col:last-of-type {\n          margin-right: 0; } }"; },
            enumerable: true,
            configurable: true
        });
        return WuRow;
    }());
    exports.WuRow = WuRow;
    Object.defineProperty(exports, '__esModule', { value: true });
});
