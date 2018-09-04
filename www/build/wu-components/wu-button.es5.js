/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-button', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuButton = /** @class */ (function () {
        function WuButton() {
        }
        WuButton.prototype.render = function () {
            return h("slot", null);
        };
        Object.defineProperty(WuButton, "is", {
            get: function () { return "wu-button"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuButton, "properties", {
            get: function () {
                return {
                    "button": {
                        "elementRef": true
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuButton, "style", {
            get: function () { return ":root{\n  --button-theme: var(--blue);\n  --button-padding: 10px 30px;\n\n}\n\nwu-button {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  min-width: 60px;\n  max-width: 100%;\n  padding: var(--button-padding);\n  display: inline-block;\n  text-transform: uppercase;\n  cursor: pointer;\n  background: var(--button-theme);\n  color: white;\n  margin: 0 5px;\n  text-align: center;\n  transition: box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  transition: -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  transition: box-shadow 0.3s ease-out, filter 0.3s ease-in;\n  transition: box-shadow 0.3s ease-out, filter 0.3s ease-in, -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  transition: box-shadow 0.3s ease-out, filter 0.3s ease-in, -webkit-filter 0.3s ease-in; }\n  wu-button:hover, wu-button:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    -webkit-filter: brightness(110%);\n            filter: brightness(110%); }\n  wu-button[type='outline'] {\n    border: 1px solid var(--button-theme);\n    background: white;\n    color: var(--button-theme); }\n    wu-button[type='outline']:hover {\n      -webkit-filter: brightness(95%);\n              filter: brightness(95%); }\n  wu-button[type='block'] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    padding-right: 0; }\n  wu-button[flat] {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n    wu-button[flat]:hover {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n  wu-button[secondary] {\n    background: #ccc;\n    color: #333; }\n    wu-button[secondary][type='outline'] {\n      border-color: #ccc;\n      background: white;\n      color: #333; }\n  wu-button[circle] {\n    border-radius: 50%; }"; },
            enumerable: true,
            configurable: true
        });
        return WuButton;
    }());
    exports.WuButton = WuButton;
    Object.defineProperty(exports, '__esModule', { value: true });
});
