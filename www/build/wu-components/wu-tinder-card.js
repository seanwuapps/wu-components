/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuTinderCard {
    constructor() {
        this.threshold = 150;
    }
    componentDidLoad() {
        this.el.addEventListener('touchstart', (e) => {
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
            this.currentX = e.touches[0].clientX;
            this.currentY = e.touches[0].clientY;
        }, false);
        this.el.addEventListener('touchmove', (e) => {
            this.currentX = e.touches[0].clientX;
            this.currentY = e.touches[0].clientY;
            let diffX = this.currentX - this.startX;
            let diffY = this.currentY - this.startY;
            this.el.style.transform = `translate(${diffX}px, ${diffY}px)`;
        }, false);
        this.el.addEventListener('touchend', () => {
            this.el.style.transform = 'translate(0,0)';
            let diffX = this.currentX - this.startX;
            let direction = this.getSwipeDirection(diffX);
            if (direction) {
                // trigger swipe event
                this.swipe.emit({ direction });
            }
        }, false);
    }
    getSwipeDirection(diffX) {
        if (diffX < 0 - this.threshold) {
            return 'left';
        }
        if (diffX > this.threshold) {
            return 'right';
        }
        return false;
    }
    triggerSwipe(direction) {
        this.swipe.emit({ direction });
    }
    render() {
        return (h("div", { class: "tinder-card" },
            this.src ? h("wu-img", { thumb: this.thumb, src: this.src }) : null,
            h("slot", null),
            h("div", { class: "tinder-card-controls" },
                h("button", { class: "negative", onClick: () => { this.triggerSwipe('left'); } }, this.leftBtnText ? this.leftBtnText : 'Left'),
                h("button", { class: "positive", onClick: () => { this.triggerSwipe('right'); } }, this.rightBtnText ? this.rightBtnText : 'Right'))));
    }
    static get is() { return "wu-tinder-card"; }
    static get properties() { return {
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
    }; }
    static get events() { return [{
            "name": "swipe",
            "method": "swipe",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-tinder-card {\n  display: block;\n  margin: 0 auto;\n  max-width: 320px;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid pink;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }\n  wu-tinder-card .tinder-card-controls {\n    margin-top: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n    wu-tinder-card .tinder-card-controls button {\n      background: inherit;\n      border: 2px solid pink;\n      width: 40%;\n      height: 60px;\n      border-radius: 10px;\n      cursor: pointer; }"; }
}

export { WuTinderCard };
