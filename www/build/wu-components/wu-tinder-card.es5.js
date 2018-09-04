/*! Built with http://stenciljs.com */
WuComponents.loadBundle('wu-tinder-card', ['exports'], function (exports) {
    var h = window.WuComponents.h;
    var WuTinderCard = /** @class */ (function () {
        function WuTinderCard() {
            this.threshold = 150;
        }
        WuTinderCard.prototype.componentDidLoad = function () {
            var _this = this;
            this.el.addEventListener('touchstart', function (e) {
                _this.startX = e.touches[0].clientX;
                _this.startY = e.touches[0].clientY;
                _this.currentX = e.touches[0].clientX;
                _this.currentY = e.touches[0].clientY;
            }, false);
            this.el.addEventListener('touchmove', function (e) {
                _this.currentX = e.touches[0].clientX;
                _this.currentY = e.touches[0].clientY;
                var diffX = _this.currentX - _this.startX;
                var diffY = _this.currentY - _this.startY;
                _this.el.style.transform = "translate(" + diffX + "px, " + diffY + "px)";
            }, false);
            this.el.addEventListener('touchend', function () {
                _this.el.style.transform = 'translate(0,0)';
                var diffX = _this.currentX - _this.startX;
                var direction = _this.getSwipeDirection(diffX);
                if (direction) {
                    // trigger swipe event
                    _this.swipe.emit({ direction: direction });
                }
            }, false);
        };
        WuTinderCard.prototype.getSwipeDirection = function (diffX) {
            if (diffX < 0 - this.threshold) {
                return 'left';
            }
            if (diffX > this.threshold) {
                return 'right';
            }
            return false;
        };
        WuTinderCard.prototype.triggerSwipe = function (direction) {
            this.swipe.emit({ direction: direction });
        };
        WuTinderCard.prototype.render = function () {
            var _this = this;
            return (h("div", { class: "tinder-card" }, this.src ? h("wu-img", { thumb: this.thumb, src: this.src }) : null, h("slot", null), h("div", { class: "tinder-card-controls" }, h("button", { class: "negative", onClick: function () { _this.triggerSwipe('left'); } }, this.leftBtnText ? this.leftBtnText : 'Left'), h("button", { class: "positive", onClick: function () { _this.triggerSwipe('right'); } }, this.rightBtnText ? this.rightBtnText : 'Right'))));
        };
        Object.defineProperty(WuTinderCard, "is", {
            get: function () { return "wu-tinder-card"; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuTinderCard, "properties", {
            get: function () {
                return {
                    "el": {
                        "elementRef": true
                    },
                    "leftBtnText": {
                        "type": String,
                        "attr": "left-btn-text"
                    },
                    "rightBtnText": {
                        "type": String,
                        "attr": "right-btn-text"
                    },
                    "src": {
                        "type": String,
                        "attr": "src"
                    },
                    "threshold": {
                        "type": Number,
                        "attr": "threshold"
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
        Object.defineProperty(WuTinderCard, "events", {
            get: function () {
                return [{
                        "name": "swipe",
                        "method": "swipe",
                        "bubbles": true,
                        "cancelable": true,
                        "composed": true
                    }];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WuTinderCard, "style", {
            get: function () { return "wu-tinder-card {\n  display: block;\n  margin: 0 auto;\n  max-width: 320px;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid pink;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }\n  wu-tinder-card .tinder-card-controls {\n    margin-top: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n    wu-tinder-card .tinder-card-controls button {\n      background: inherit;\n      border: 2px solid pink;\n      width: 40%;\n      height: 60px;\n      border-radius: 10px;\n      cursor: pointer; }"; },
            enumerable: true,
            configurable: true
        });
        return WuTinderCard;
    }());
    exports.WuTinderCard = WuTinderCard;
    Object.defineProperty(exports, '__esModule', { value: true });
});
