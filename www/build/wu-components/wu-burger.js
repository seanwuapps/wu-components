/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuBurger {
    constructor() {
        this.animation = 'middle-out';
    }
    toggle() {
        let menu = document.querySelector(this.target);
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
    }
    render() {
        return (h("button", { type: "button", onClick: () => this.toggle(), class: this.animation },
            h("span", null),
            h("span", null),
            h("span", null)));
    }
    static get is() { return "wu-burger"; }
    static get properties() { return {
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
    }; }
    static get style() { return ":root{\n  --burgerSize: 2.25em;\n  --barTickness: 0.25em;\n  --barColor: currentColor;\n}\n\nwu-burger {\n  font-size: 18px; }\n  wu-burger button {\n    font-size: 1em;\n    color: currentColor;\n    position: relative;\n    width: var(--burgerSize);\n    height: var(--burgerSize);\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: inline-block;\n    padding: var(--barTickness) 0;\n    /* Animations */ }\n    wu-burger button:focus {\n      outline: none; }\n    wu-burger button span {\n      display: block;\n      left: calc(1 / 6 * var(--burgerSize));\n      width: calc(2 / 3 * var(--burgerSize));\n      height: var(--barTickness);\n      border-radius: var(--barTickness);\n      background: var(--barColor);\n      position: absolute;\n      -webkit-transition: var(--fast) ease-in-out;\n      transition: var(--fast) ease-in-out; }\n      wu-burger button span:nth-child(1) {\n        top: calc(2 * var(--barTickness)); }\n      wu-burger button span:nth-child(2) {\n        top: calc(4 * var(--barTickness)); }\n      wu-burger button span:nth-child(3) {\n        top: calc(6 * var(--barTickness)); }\n    wu-burger button.middle-out span {\n      transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast); }\n    wu-burger button.rotate span {\n      transition: top var(--fast), opacity var(--fast)/2, -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast), opacity var(--fast)/2, -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast), opacity var(--fast)/2;\n      transition: transform var(--fast), top var(--fast), opacity var(--fast)/2, -webkit-transform var(--fast); }\n  wu-burger.open button {\n    /* Animations */ }\n    wu-burger.open button.middle-out span {\n      transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      -webkit-transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast); }\n      wu-burger.open button.middle-out span:nth-child(1) {\n        top: calc(4 * var(--barTickness));\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      wu-burger.open button.middle-out span:nth-child(2) {\n        opacity: 0; }\n      wu-burger.open button.middle-out span:nth-child(3) {\n        top: calc(4 * var(--barTickness));\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n    wu-burger.open button.spin-out span:nth-child(1) {\n      top: calc(4 * var(--barTickness));\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    wu-burger.open button.spin-out span:nth-child(2) {\n      opacity: 0;\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px); }\n    wu-burger.open button.spin-out span:nth-child(3) {\n      top: calc(4 * var(--barTickness));\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    wu-burger.open button.rotate span:nth-child(1) {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      top: calc(4 * var(--barTickness)); }\n    wu-burger.open button.rotate span:nth-child(2) {\n      opacity: 0; }\n    wu-burger.open button.rotate span:nth-child(3) {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      top: calc(4 * var(--barTickness)); }"; }
}

export { WuBurger };
