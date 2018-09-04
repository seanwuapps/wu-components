/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-rating', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuRating = /** @class */ (function () {
        function WuRating() {
            var _this = this;
            this.resetToValue = 0;
            this.value = 0;
            this.max = 5;
            this.icon = '';
            this.iconOutline = '';
            this.currentFillStates = [];
            this.onHover = function (hoveredIndex) {
                _this.setVal(hoveredIndex + 1);
            };
            this.reset = function () {
                _this.setVal(_this.resetToValue);
            };
            this.onSelect = function (index) {
                var newVal = index + 1;
                _this.setVal(newVal);
                _this.value = newVal;
                _this.resetToValue = newVal;
                _this.change.emit();
            };
            this.valueChanged = function () {
                console.log('prop did change: value');
                if (_this.el.value !== String(_this.value)) {
                    _this.el.value = String(_this.value);
                    console.log(_this.el.value);
                }
            };
        }
        WuRating.prototype.setVal = function (val) {
            this.currentFillStates = this.currentFillStates.map(function (state, i) {
                if (i < val) {
                    return true;
                }
                return false;
            });
            return this.currentFillStates.filter(function (v) { return v; }).length;
        };
        WuRating.prototype.getVal = function () {
            return this.value;
        };
        WuRating.prototype.renderStar = function (i, filled) {
            var _this = this;
            if (filled === void 0) { filled = false; }
            //     <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
            //     <stop offset="0%" stop-color="currentColor"/>
            //     <stop offset="75%" stop-color="currentColor"/>
            //     <stop offset="75%" stop-color="#fff"/>
            // </linearGradient>
            var icon = (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" }, h("path", { d: "M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61" })));
            var iconOutline = (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" }, h("path", { d: "M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61M50 17l8 26h27L64 59l8 26-22-16-22 16 8-26-21-16h27l8-26" })));
            return (h("span", { class: "rating-icon", onClick: function () { return _this.onSelect(i); }, onMouseEnter: function () { return _this.onHover(i); } }, filled ? icon : iconOutline));
        };
        WuRating.prototype.componentWillLoad = function () {
            var fillStates = [];
            for (var i = 0; i < this.max; i++) {
                if (i < this.value) {
                    fillStates.push(true);
                }
                else {
                    fillStates.push(false);
                }
            }
            this.resetToValue = this.value;
            this.currentFillStates = fillStates;
        };
        WuRating.prototype.render = function () {
            var _this = this;
            return (h("div", { class: "stars", onMouseLeave: function () { return _this.reset(); } }, this.currentFillStates.map(function (state, i) { return _this.renderStar(i, state); })));
        };
        Object.defineProperty(WuRating, "is", {
            get: function () { return "wu-rating"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuRating, "properties", {
            get: function () {
                return {
                    "currentFillStates": {
                        "state": true
                    },
                    "el": {
                        "elementRef": true
                    },
                    "getVal": {
                        "method": true
                    },
                    "icon": {
                        "type": "Any",
                        "attr": "icon"
                    },
                    "iconOutline": {
                        "type": "Any",
                        "attr": "icon-outline"
                    },
                    "max": {
                        "type": Number,
                        "attr": "max"
                    },
                    "setVal": {
                        "method": true
                    },
                    "value": {
                        "type": Number,
                        "attr": "value",
                        "mutable": true
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuRating, "events", {
            get: function () {
                return [{
                        "name": "change",
                        "method": "change",
                        "bubbles": true,
                        "cancelable": true,
                        "composed": true
                    }];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuRating, "style", {
            get: function () { return "wu-rating {\n  font-size: 20px;\n  color: #666; }\n  wu-rating .rating-icon {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    cursor: pointer; }\n    wu-rating .rating-icon svg {\n      fill: currentColor; }"; },
            enumerable: true,
            configurable: true
        });
        return WuRating;
    }());
    exports.WuRating = WuRating;
    Object.defineProperty(exports, '__esModule', { value: true });
});
