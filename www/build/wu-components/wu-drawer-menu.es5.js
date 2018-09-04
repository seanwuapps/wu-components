/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-drawer-menu', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuDrawerMenu = /** @class */ (function () {
        function WuDrawerMenu() {
            this.items = { "home": {
                    "label": 'Home'
                } };
        }
        WuDrawerMenu.prototype.componentDidLoad = function () {
            console.log(this.items);
            if (typeof this.items === 'string') {
                console.log('string items');
                this.items = JSON.parse(this.items);
            }
            console.log(this.items);
        };
        WuDrawerMenu.prototype.render = function () {
            var _this = this;
            console.log(this.items);
            return (h("nav", { class: "side-menu" }, h("slot", null), Object.keys(this.items).map(function (key) {
                var item = _this.items[key];
                return h("div", null, item.label);
            })));
        };
        Object.defineProperty(WuDrawerMenu, "is", {
            get: function () { return "wu-drawer-menu"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuDrawerMenu, "properties", {
            get: function () {
                return {
                    "items": {
                        "type": "Any",
                        "attr": "items"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuDrawerMenu, "style", {
            get: function () { return ":root{ \n  --menu-bg-color: var(--orange);\n  --menu-text-color: #333;\n}\n\nwu-drawer-menu {\n  position: fixed;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  background: var(--menu-bg-color);\n  transition: -webkit-transform var(--fast);\n  -webkit-transition: -webkit-transform var(--fast);\n  transition: transform var(--fast);\n  transition: transform var(--fast), -webkit-transform var(--fast);\n  top: 0;\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  wu-drawer-menu[position=left] {\n    right: auto; }\n  wu-drawer-menu[position=right] {\n    top: 0;\n    left: auto;\n    right: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  wu-drawer-menu.open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }"; },
            enumerable: true,
            configurable: true
        });
        return WuDrawerMenu;
    }());
    exports.WuDrawerMenu = WuDrawerMenu;
    Object.defineProperty(exports, '__esModule', { value: true });
});
