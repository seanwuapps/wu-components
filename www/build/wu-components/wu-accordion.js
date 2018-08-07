/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuAccordion {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-accordion"; }
    static get style() { return "wu-accordion {\n  display: block;\n  clear: both;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }\n  wu-accordion .accordion-content {\n    max-height: 0;\n    overflow: hidden;\n    display: block;\n    padding: 0 20px;\n    -webkit-transition: max-height 0.2s, padding 0.2s;\n    transition: max-height 0.2s, padding 0.2s; }\n  wu-accordion wu-accordion-header > div {\n    display: block;\n    position: relative;\n    -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n    -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n    transition: -webkit-box-shadow 0.3s ease-out;\n    transition: box-shadow 0.3s ease-out;\n    transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n    background: #333;\n    color: white;\n    padding: 12px;\n    padding-left: 44px;\n    font-size: 14px;\n    cursor: pointer;\n    clear: both;\n    border-radius: 2px; }\n    wu-accordion wu-accordion-header > div:hover, wu-accordion wu-accordion-header > div:focus {\n      -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n      box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19); }\n    wu-accordion wu-accordion-header > div svg.arrow {\n      stroke: white;\n      fill: white;\n      background-size: cover;\n      width: 20px;\n      height: 20px;\n      font-family: Arial, Helvetica, sans-serif;\n      position: absolute;\n      top: 50%;\n      left: 15px;\n      margin-top: -10px;\n      font-size: 20px;\n      -webkit-transform-origin: center;\n      transform-origin: center;\n      -webkit-transition: -webkit-transform 0.2s;\n      transition: -webkit-transform 0.2s;\n      transition: transform 0.2s;\n      transition: transform 0.2s, -webkit-transform 0.2s; }\n  wu-accordion .accordion-content {\n    max-width: 100%; }\n  wu-accordion.open wu-accordion-header > div svg.arrow {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg); }\n  wu-accordion.open .accordion-content {\n    max-height: 400px;\n    padding: 10px 20px; }"; }
}

class WuAccordionHeader {
    constructor() {
        this.toggleOpen = () => {
            const accordion = this.header.closest('wu-accordion');
            if (accordion.classList.contains('open')) {
                accordion.classList.remove('open');
            }
            else {
                accordion.classList.add('open');
            }
        };
    }
    render() {
        return (h("div", { class: "accordion-header", onClick: () => {
                this.toggleOpen();
            } },
            h("svg", { class: "arrow", viewBox: "0 0 96 120" },
                h("path", { d: "M32.59 78.41a2 2 0 0 0 2.83 0l29-29a2 2 0 0 0 0-2.83l-29-29a2 2 0 0 0-2.83 2.83L60.17 48 32.59 75.59a2 2 0 0 0 0 2.82z" })),
            h("slot", null)));
    }
    static get is() { return "wu-accordion-header"; }
    static get properties() { return {
        "header": {
            "elementRef": true
        }
    }; }
    static get style() { return ""; }
}

class WuBurger {
    toggle() {
        if (this.burger.classList.contains('open')) {
            this.burger.classList.remove('open');
        }
        else {
            this.burger.classList.add('open');
        }
    }
    render() {
        return (h("button", { type: "button", onClick: () => this.toggle() },
            h("span", null),
            h("span", null),
            h("span", null)));
    }
    static get is() { return "wu-burger"; }
    static get properties() { return {
        "burger": {
            "elementRef": true
        }
    }; }
    static get style() { return "wu-burger {\n  font-size: 18px; }\n  wu-burger button {\n    font-size: 1em;\n    color: currentColor;\n    position: relative;\n    width: 2.25em;\n    height: 2.25em;\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: inline-block;\n    padding: 0.25em 0; }\n  wu-burger:focus {\n    outline: 1px solid blue; }\n  wu-burger span {\n    display: block;\n    width: 1.5em;\n    height: 0.25em;\n    border-radius: 0.25em;\n    background: currentColor;\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate(-50%, 0);\n    transform: translate(-50%, 0);\n    -webkit-transition: 0.2s ease-in-out;\n    -moz-transition: 0.2s ease-in-out;\n    -o-transition: 0.2s ease-in-out;\n    transition: 0.2s ease-in-out; }\n    wu-burger span:nth-child(1) {\n      top: 0.5em; }\n    wu-burger span:nth-child(2) {\n      top: 1em; }\n    wu-burger span:nth-child(3) {\n      top: 1.5em; }\n  wu-burger span {\n    -webkit-transition: top 0.2s 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n    transition: top 0.2s 0.2s, opacity 0.2s, -webkit-transform 0.2s;\n    transition: transform 0.2s, top 0.2s 0.2s, opacity 0.2s;\n    transition: transform 0.2s, top 0.2s 0.2s, opacity 0.2s, -webkit-transform 0.2s; }\n  wu-burger.open span {\n    -webkit-transition: top 0.2s, opacity 0.2s, -webkit-transform 0.2s 0.2s;\n    transition: top 0.2s, opacity 0.2s, -webkit-transform 0.2s 0.2s;\n    transition: top 0.2s, transform 0.2s 0.2s, opacity 0.2s;\n    transition: top 0.2s, transform 0.2s 0.2s, opacity 0.2s, -webkit-transform 0.2s 0.2s; }\n    wu-burger.open span:nth-child(1) {\n      top: 1em;\n      -webkit-transform: translate(-50%, 0) rotate(45deg);\n      transform: translate(-50%, 0) rotate(45deg); }\n    wu-burger.open span:nth-child(2) {\n      opacity: 0; }\n    wu-burger.open span:nth-child(3) {\n      top: 1em;\n      -webkit-transform: translate(-50%, 0) rotate(-45deg);\n      transform: translate(-50%, 0) rotate(-45deg); }"; }
}

class WuButton {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-button"; }
    static get properties() { return {
        "button": {
            "elementRef": true
        }
    }; }
    static get style() { return "wu-button {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  min-width: 60px;\n  max-width: 100%;\n  padding: 10px 30px;\n  display: inline-block;\n  text-transform: uppercase;\n  cursor: pointer;\n  background: #2b98f0;\n  color: white;\n  margin: 0 5px;\n  text-align: center;\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  transition: -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in;\n  transition: box-shadow 0.3s ease-out, filter 0.3s ease-in;\n  transition: box-shadow 0.3s ease-out, filter 0.3s ease-in, -webkit-box-shadow 0.3s ease-out, -webkit-filter 0.3s ease-in; }\n  wu-button:hover, wu-button:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    -webkit-filter: brightness(110%);\n    filter: brightness(110%); }\n  wu-button[type='outline'] {\n    border: 1px solid #2b98f0;\n    background: white;\n    color: #2b98f0; }\n    wu-button[type='outline']:hover {\n      -webkit-filter: brightness(95%);\n      filter: brightness(95%); }\n  wu-button[type='block'] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    padding-right: 0; }\n  wu-button[flat] {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n    wu-button[flat]:hover {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n  wu-button[secondary] {\n    background: #ccc;\n    color: #333; }\n    wu-button[secondary][type='outline'] {\n      border-color: #ccc;\n      background: white;\n      color: #333; }\n  wu-button[circle] {\n    border-radius: 50%; }"; }
}

class WuCard {
    constructor() {
        this.cardTitle = '';
        this.hover = false;
    }
    componentDidLoad() {
    }
    render() {
        return h("div", { class: "card" },
            h("div", { class: "card-title" }, this.cardTitle),
            h("slot", null));
    }
    static get is() { return "wu-card"; }
    static get properties() { return {
        "cardTitle": {
            "type": String,
            "attr": "card-title"
        },
        "el": {
            "elementRef": true
        },
        "hover": {
            "type": Boolean,
            "attr": "hover"
        }
    }; }
    static get style() { return "wu-card {\n  display: block;\n  background: white;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  padding: 20px;\n  font-size: 16px; }\n  wu-card .card-title {\n    font-size: 22px;\n    border-bottom: 1px solid #efefef;\n    display: block;\n    padding-bottom: 10px;\n    margin-bottom: 10px; }\n  wu-card[hover]:hover, wu-card[hover]:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19); }"; }
}

class WuCol {
    constructor() {
        this.basis = '';
        this.portion = '1';
    }
    componentDidLoad() {
        this.col.style.cssText = `flex-grow: ${this.portion}`;
        if (this.basis.length) {
            this.col.style.cssText += `flex-basis: ${this.basis}; flex-shrink: 0;`;
        }
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wu-col"; }
    static get properties() { return {
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
    }; }
    static get style() { return "wu-col {\n  max-width: 100%; }"; }
}

class WuImg {
    constructor() {
        this.loading = true;
        this.onFullImageLoaded = () => {
            let mainImg = this.el.querySelector('img.main');
            let loaderImg = this.el.querySelector('img.loader');
            mainImg.src = loaderImg.src;
            loaderImg.parentNode.removeChild(loaderImg);
            this.loading = false;
        };
    }
    render() {
        return (h("div", null,
            h("img", { src: this.thumb, alt: this.alt, class: this.loading ? 'main' : 'main loaded' }),
            h("img", { src: this.src, alt: this.alt, class: "loader", onLoad: () => this.onFullImageLoaded() })));
    }
    static get is() { return "wu-img"; }
    static get properties() { return {
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
    }; }
    static get style() { return "wu-img {\n  display: inherit; }\n  wu-img img.main {\n    width: 100%;\n    -webkit-filter: blur(10px);\n    filter: blur(10px);\n    -webkit-transition: -webkit-filter 0.5s;\n    transition: -webkit-filter 0.5s;\n    transition: filter 0.5s;\n    transition: filter 0.5s, -webkit-filter 0.5s; }\n    wu-img img.main.loaded {\n      -webkit-filter: none;\n      filter: none; }\n  wu-img img.loader {\n    opacity: 0;\n    height: 0px; }"; }
}

class WuMenu {
    render() {
        return (h("div", { class: "side-menu" }));
    }
    static get is() { return "wu-menu"; }
    static get properties() { return {
        "menuItems": {
            "type": "Any",
            "attr": "menu-items"
        }
    }; }
    static get style() { return ""; }
}

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
        this.reset = () => {
            this.setVal(this.resetToValue);
        };
        this.onSelect = index => {
            let newVal = index + 1;
            this.setVal(newVal);
            this.value = newVal;
            this.resetToValue = newVal;
            this.change.emit();
        };
        this.valueChanged = () => {
            console.log('prop did change: value');
            if (this.el.value !== String(this.value)) {
                this.el.value = String(this.value);
                console.log(this.el.value);
            }
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
        "setVal": {
            "method": true
        },
        "value": {
            "type": Number,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "wu-rating {\n  font-size: 20px;\n  color: #666; }\n  wu-rating .rating-icon {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    cursor: pointer; }\n    wu-rating .rating-icon svg {\n      fill: currentColor; }"; }
}

class WuRow {
    constructor() {
        this.gap = '0';
    }
    componentDidLoad() {
        this.el.style.cssText = `--gap:${this.gap}`;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-row"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "gap": {
            "type": String,
            "attr": "gap"
        }
    }; }
    static get style() { return "wu-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n  \@media screen and (min-width: 768px) {\n    wu-row {\n      -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n      flex-direction: row; }\n      wu-row wu-col {\n        margin-bottom: 10px;\n        margin-right: var(--gap);\n        padding: 5px;\n        width: 100%;\n        min-height: 1px;\n        -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n        -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n        flex-grow: 1;\n        max-width: 100%; }\n        wu-row wu-col:last-of-type {\n          margin-right: 0; } }"; }
}

class WuShadow {
    constructor() {
        this.type = 'box'; // or drop
        this.depth = 1;
    }
    render() {
        return (h("div", { class: `shadow-${this.depth} ${this.type}` },
            h("slot", null)));
    }
    static get is() { return "wu-shadow"; }
    static get properties() { return {
        "depth": {
            "type": Number,
            "attr": "depth"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "wu-shadow .box {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }"; }
}

class WuSpinner {
    constructor() {
        this.type = 'circle';
        this.color = 'currentColor';
    }
    render() {
        switch (this.type) {
            case 'circle':
                return (h("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "40px", height: "40px", viewBox: "0 0 50 50", style: "enable-background:new 0 0 50 50;", xmlSpace: "preserve" },
                    h("path", { fill: this.color, d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z", transform: "rotate(360 -4.05439e-8 -4.05439e-8)" },
                        h("animateTransform", { attributeType: "xml", attributeName: "transform", type: "rotate", from: "0 25 25", to: "360 25 25", dur: "0.6s", repeatCount: "indefinite" }))));
            case 'bars':
                return (h("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", width: "24px", height: "30px", viewBox: "0 0 24 30", style: "enable-background:new 0 0 50 50;", xmlSpace: "preserve" },
                    h("rect", { x: "0", y: "5.83333", width: "4", height: "18.3333", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0s", dur: "0.6s", repeatCount: "indefinite" })),
                    h("rect", { x: "8", y: "6.66667", width: "4", height: "16.6667", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" })),
                    h("rect", { x: "16", y: "9.16667", width: "4", height: "11.6667", fill: this.color, opacity: "0.2" },
                        h("animate", { attributeName: "opacity", attributeType: "XML", values: "0.2; 1; .2", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "height", attributeType: "XML", values: "10; 20; 10", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }),
                        h("animate", { attributeName: "y", attributeType: "XML", values: "10; 5; 10", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" }))));
            case 'ring':
                return (h("svg", { viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: this.color },
                    h("g", { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" },
                        h("circle", { cx: "22", cy: "22", r: "1" },
                            h("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                            h("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })),
                        h("circle", { cx: "22", cy: "22", r: "1" },
                            h("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                            h("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })))));
            case 'ios':
                return (h("svg", { class: "spinner-ios", xmlns: "http://www.w3.org/2000/svg", width: "27", height: "27", viewBox: "0 0 27 27", fill: this.color },
                    h("path", { d: "M18.696,10.5c-0.275-0.479-0.113-1.09,0.365-1.367l4.759-2.751c0.482-0.273,1.095-0.11,1.37,0.368 c0.276,0.479,0.115,1.092-0.364,1.364l-4.764,2.751C19.583,11.141,18.973,10.977,18.696,10.5z" }),
                    h("path", { d: "M16.133,6.938l2.75-4.765c0.276-0.478,0.889-0.643,1.367-0.366c0.479,0.276,0.641,0.886,0.365,1.366l-2.748,4.762 C17.591,8.415,16.979,8.58,16.5,8.303C16.021,8.027,15.856,7.414,16.133,6.938z" }),
                    h("path", { d: "M13.499,7.5c-0.552,0-1-0.448-1-1.001V1c0-0.554,0.448-1,1-1c0.554,0,1.003,0.447,1.003,1v5.499 C14.5,7.053,14.053,7.5,13.499,7.5z" }),
                    h("path", { d: "M8.303,10.5c-0.277,0.477-0.888,0.641-1.365,0.365L2.175,8.114C1.697,7.842,1.532,7.229,1.808,6.75 c0.277-0.479,0.89-0.642,1.367-0.368l4.762,2.751C8.416,9.41,8.58,10.021,8.303,10.5z" }),
                    h("path", { d: "M9.133,7.937l-2.75-4.763c-0.276-0.48-0.111-1.09,0.365-1.366c0.479-0.277,1.09-0.114,1.367,0.366l2.75,4.765 c0.274,0.476,0.112,1.088-0.367,1.364C10.021,8.581,9.409,8.415,9.133,7.937z" }),
                    h("path", { d: "M6.499,14.5H1c-0.554,0-1-0.448-1-1c0-0.554,0.447-1.001,1-1.001h5.499c0.552,0,1.001,0.448,1.001,1.001 C7.5,14.052,7.052,14.5,6.499,14.5z" }),
                    h("path", { d: "M8.303,16.502c0.277,0.478,0.113,1.088-0.365,1.366l-4.762,2.749c-0.478,0.273-1.091,0.112-1.368-0.366 c-0.276-0.479-0.111-1.089,0.367-1.368l4.762-2.748C7.415,15.856,8.026,16.021,8.303,16.502z" }),
                    h("path", { d: "M10.866,20.062l-2.75,4.767c-0.277,0.475-0.89,0.639-1.367,0.362c-0.477-0.277-0.642-0.886-0.365-1.365l2.75-4.764 c0.277-0.477,0.888-0.638,1.366-0.365C10.978,18.974,11.141,19.585,10.866,20.062z" }),
                    h("path", { d: "M13.499,19.502c0.554,0,1.003,0.448,1.003,1.002v5.498c0,0.55-0.448,0.999-1.003,0.999c-0.552,0-1-0.447-1-0.999v-5.498 C12.499,19.95,12.946,19.502,13.499,19.502z" }),
                    h("path", { d: "M17.867,19.062l2.748,4.764c0.275,0.479,0.113,1.088-0.365,1.365c-0.479,0.276-1.091,0.112-1.367-0.362l-2.75-4.767 c-0.276-0.477-0.111-1.088,0.367-1.365C16.979,18.424,17.591,18.585,17.867,19.062z" }),
                    h("path", { d: "M18.696,16.502c0.276-0.48,0.887-0.646,1.365-0.367l4.765,2.748c0.479,0.279,0.64,0.889,0.364,1.368 c-0.275,0.479-0.888,0.64-1.37,0.366l-4.759-2.749C18.583,17.59,18.421,16.979,18.696,16.502z" }),
                    h("path", { d: "M25.998,12.499h-5.501c-0.552,0-1.001,0.448-1.001,1.001c0,0.552,0.447,1,1.001,1h5.501c0.554,0,1.002-0.448,1.002-1 C27,12.946,26.552,12.499,25.998,12.499z" })));
            case 'dots':
                return (h("svg", { version: "1.1", id: "L4", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 70 100" },
                    h("circle", { fill: this.color, stroke: "none", cx: "6", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.1" })),
                    h("circle", { fill: this.color, stroke: "none", cx: "26", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.2" })),
                    h("circle", { fill: this.color, stroke: "none", cx: "46", cy: "50", r: "6" },
                        h("animate", { attributeName: "opacity", dur: "1s", values: "0;1;0", repeatCount: "indefinite", begin: "0.3" }))));
            default:
                return (null);
        }
    }
    static get is() { return "wu-spinner"; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "wu-spinner svg {\n  width: 2em;\n  height: 2em; }\n  wu-spinner svg.spinner-android {\n    -webkit-animation: rotate 2s linear infinite;\n    animation: rotate 2s linear infinite; }\n    wu-spinner svg.spinner-android .path {\n      stroke-linecap: round;\n      -webkit-animation: dash 1.5s ease-in-out infinite;\n      animation: dash 1.5s ease-in-out infinite; }\n  wu-spinner svg.spinner-ios {\n    -webkit-animation: iosIntro .6s;\n    animation: iosIntro .6s; }\n    wu-spinner svg.spinner-ios path:nth-of-type(1) {\n      -webkit-animation: pulse 1s infinite linear;\n      animation: pulse 1s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(2) {\n      -webkit-animation: pulse 1s -.083s infinite linear;\n      animation: pulse 1s -.083s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(3) {\n      -webkit-animation: pulse 1s -.166s infinite linear;\n      animation: pulse 1s -.166s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(4) {\n      -webkit-animation: pulse 1s -.249s infinite linear;\n      animation: pulse 1s -.249s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(5) {\n      -webkit-animation: pulse 1s -.332s infinite linear;\n      animation: pulse 1s -.332s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(6) {\n      -webkit-animation: pulse 1s -.415s infinite linear;\n      animation: pulse 1s -.415s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(7) {\n      -webkit-animation: pulse 1s -.498s infinite linear;\n      animation: pulse 1s -.498s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(8) {\n      -webkit-animation: pulse 1s -.581s infinite linear;\n      animation: pulse 1s -.581s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(9) {\n      -webkit-animation: pulse 1s -.664s infinite linear;\n      animation: pulse 1s -.664s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(10) {\n      -webkit-animation: pulse 1s -.747s infinite linear;\n      animation: pulse 1s -.747s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(11) {\n      -webkit-animation: pulse 1s -.83s infinite linear;\n      animation: pulse 1s -.83s infinite linear; }\n    wu-spinner svg.spinner-ios path:nth-of-type(12) {\n      -webkit-animation: pulse 1s -.913s infinite linear;\n      animation: pulse 1s -.913s infinite linear; }\n\n\@-webkit-keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n\@keyframes rotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n\@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n\@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0; }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35; }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124; } }\n\n\@-webkit-keyframes pulse {\n  50% {\n    fill-opacity: .2; }\n  to {\n    fill-opacity: 1; } }\n\n\@keyframes pulse {\n  50% {\n    fill-opacity: .2; }\n  to {\n    fill-opacity: 1; } }\n\n\@-webkit-keyframes iosIntro {\n  from {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; } }\n\n\@keyframes iosIntro {\n  from {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n    opacity: 0; }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 1; } }"; }
}

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
    static get style() { return "wu-tinder-card {\n  display: block;\n  margin: 0 auto;\n  max-width: 320px;\n  padding: 20px;\n  background-color: white;\n  border: 2px solid pink;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }\n  wu-tinder-card .tinder-card-controls {\n    margin-top: 2rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n    justify-content: space-around; }\n    wu-tinder-card .tinder-card-controls button {\n      background: inherit;\n      border: 2px solid pink;\n      width: 40%;\n      height: 60px;\n      border-radius: 10px;\n      cursor: pointer; }"; }
}

export { WuAccordion, WuAccordionHeader, WuBurger, WuButton, WuCard, WuCol, WuImg, WuMenu, WuRating, WuRow, WuShadow, WuSpinner, WuTinderCard };
