/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-img', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuImg = /** @class */ (function () {
        function WuImg() {
            var _this = this;
            this.loading = true;
            this.onFullImageLoaded = function () {
                var mainImg = _this.el.querySelector('img.main');
                var loaderImg = _this.el.querySelector('img.loader');
                mainImg.src = loaderImg.src;
                loaderImg.parentNode.removeChild(loaderImg);
                _this.loading = false;
            };
        }
        WuImg.prototype.render = function () {
            var _this = this;
            return (h("div", null, h("img", { src: this.thumb, alt: this.alt, class: this.loading ? 'main' : 'main loaded' }), h("img", { src: this.src, alt: this.alt, class: "loader", onLoad: function () { return _this.onFullImageLoaded(); } })));
        };
        Object.defineProperty(WuImg, "is", {
            get: function () { return "wu-img"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuImg, "properties", {
            get: function () {
                return {
                    "alt": {
                        "type": String,
                        "attr": "alt"
                    },
                    "el": {
                        "elementRef": true
                    },
                    "loading": {
                        "state": true
                    },
                    "src": {
                        "type": String,
                        "attr": "src"
                    },
                    "thumb": {
                        "type": String,
                        "attr": "thumb"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuImg, "style", {
            get: function () { return "wu-img {\n  display: inherit; }\n  wu-img img.main {\n    width: 100%;\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n    transition: -webkit-filter 0.5s;\n    -webkit-transition: -webkit-filter 0.5s;\n    transition: filter 0.5s;\n    transition: filter 0.5s, -webkit-filter 0.5s; }\n    wu-img img.main.loaded {\n      -webkit-filter: none;\n              filter: none; }\n  wu-img img.loader {\n    opacity: 0;\n    height: 0px; }"; },
            enumerable: true,
            configurable: true
        });
        return WuImg;
    }());
    exports.WuImg = WuImg;
    Object.defineProperty(exports, '__esModule', { value: true });
});
