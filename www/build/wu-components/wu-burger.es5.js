/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-burger', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuBurger = /** @class */ (function () {
        function WuBurger() {
            this.animation = 'middle-out';
        }
        WuBurger.prototype.toggle = function () {
            var menu = document.querySelector(this.target);
            if (this.burger.classList.contains('open')) {
                // close menu
                this.burger.classList.remove('open');
                menu.classList.remove('open');
            }
            else {
                // open menu
                this.burger.classList.add('open');
                menu.classList.add('open');
            }
        };
        WuBurger.prototype.render = function () {
            var _this = this;
            return (h("button", { type: "button", onClick: function () { return _this.toggle(); }, class: this.animation }, h("span", null), h("span", null), h("span", null)));
        };
        Object.defineProperty(WuBurger, "is", {
            get: function () { return "wu-burger"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuBurger, "properties", {
            get: function () {
                return {
                    "animation": {
                        "type": String,
                        "attr": "animation"
                    },
                    "burger": {
                        "elementRef": true
                    },
                    "target": {
                        "type": String,
                        "attr": "target"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuBurger, "style", {
            get: function () { return ":root{\n  --burgerSize: 2.25em;\n  --barTickness: 0.25em;\n  --barColor: currentColor;\n}\n\nwu-burger {\n  font-size: 18px; }\n  wu-burger button {\n    font-size: 1em;\n    color: currentColor;\n    position: relative;\n    width: var(--burgerSize);\n    height: var(--burgerSize);\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: inline-block;\n    padding: var(--barTickness) 0;\n    /* Animations */ }\n    wu-burger button:focus {\n      outline: none; }\n    wu-burger button span {\n      display: block;\n      left: calc(1 / 6 * var(--burgerSize));\n      width: calc(2 / 3 * var(--burgerSize));\n      height: var(--barTickness);\n      border-radius: var(--barTickness);\n      background: var(--barColor);\n      position: absolute;\n      -webkit-transition: var(--fast) ease-in-out;\n      transition: var(--fast) ease-in-out; }\n      wu-burger button span:nth-child(1) {\n        top: calc(2 * var(--barTickness)); }\n      wu-burger button span:nth-child(2) {\n        top: calc(4 * var(--barTickness)); }\n      wu-burger button span:nth-child(3) {\n        top: calc(6 * var(--barTickness)); }\n    wu-burger button.middle-out span {\n      transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast); }\n    wu-burger button.rotate span {\n      transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast); }\n  wu-burger.open button {\n    /* Animations */ }\n    wu-burger.open button.middle-out span {\n      transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      -webkit-transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast); }\n      wu-burger.open button.middle-out span:nth-child(1) {\n        top: calc(4 * var(--barTickness));\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      wu-burger.open button.middle-out span:nth-child(2) {\n        opacity: 0; }\n      wu-burger.open button.middle-out span:nth-child(3) {\n        top: calc(4 * var(--barTickness));\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n    wu-burger.open button.spin-out span:nth-child(1) {\n      top: calc(4 * var(--barTickness));\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    wu-burger.open button.spin-out span:nth-child(2) {\n      opacity: 0;\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px); }\n    wu-burger.open button.spin-out span:nth-child(3) {\n      top: calc(4 * var(--barTickness));\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    wu-burger.open button.rotate span:nth-child(1) {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      top: calc(4 * var(--barTickness)); }\n    wu-burger.open button.rotate span:nth-child(2) {\n      opacity: 0; }\n    wu-burger.open button.rotate span:nth-child(3) {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      top: calc(4 * var(--barTickness)); }"; },
            enumerable: true,
            configurable: true
        });
        return WuBurger;
    }());
    exports.WuBurger = WuBurger;
    Object.defineProperty(exports, '__esModule', { value: true });
});
