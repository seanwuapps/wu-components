/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuRating {
    constructor() {
        this.resetToValue = 0;
        this.value = 0;
        this.max = 5;
        this.icon = '';
        this.iconOutline = '';
        this.currentFillStates = [];
        this.onHover = hoveredIndex => {
            this.setVal(hoveredIndex + 1);
        };
        this.onSelect = index => {
            let newVal = index + 1;
            this.setVal(newVal);
            this.value = newVal;
            this.resetToValue = newVal;
            this.change.emit();
        };
    }
    setVal(val) {
        this.currentFillStates = this.currentFillStates.map((state, i) => {
            if (i < val) {
                return true;
            }
            return false;
        });
        return this.currentFillStates.filter(v => v).length;
    }
    getVal() {
        return this.value;
    }
    reset() {
        this.setVal(this.resetToValue);
    }
    valueChanged() {
        console.log('prop did change: ', this.value);
        if (this.el.value !== String(this.value)) {
            this.el.value = String(this.value);
            console.log(this.el.value);
        }
    }
    renderStar(i, filled = false) {
        //     <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
        //     <stop offset="0%" stop-color="currentColor"/>
        //     <stop offset="75%" stop-color="currentColor"/>
        //     <stop offset="75%" stop-color="#fff"/>
        // </linearGradient>
        let icon = (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" },
            h("path", { d: "M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61" })));
        let iconOutline = (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100" },
            h("path", { d: "M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61M50 17l8 26h27L64 59l8 26-22-16-22 16 8-26-21-16h27l8-26" })));
        return (h("span", { class: "rating-icon", onClick: () => this.onSelect(i), onMouseEnter: () => this.onHover(i) }, filled ? icon : iconOutline));
    }
    componentWillLoad() {
        let fillStates = [];
        for (let i = 0; i < this.max; i++) {
            if (i < this.value) {
                fillStates.push(true);
            }
            else {
                fillStates.push(false);
            }
        }
        this.resetToValue = this.value;
        this.currentFillStates = fillStates;
    }
    render() {
        return (h("div", { class: "stars", onMouseLeave: () => this.reset() }, this.currentFillStates.map((state, i) => this.renderStar(i, state))));
    }
    static get is() { return "wu-rating"; }
    static get properties() { return {
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
        "reset": {
            "method": true
        },
        "setVal": {
            "method": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-rating {\n  font-size: 20px;\n  font-size: 1.25rem;\n  color: #666; }\n  wu-rating .rating-icon {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    cursor: pointer; }\n    wu-rating .rating-icon svg {\n      fill: currentColor; }"; }
}

export { WuRating };