/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuBurger {
    constructor() {
        this.animation = 'middle-out';
    }
    componentDidLoad() {
        if (this.theme) {
            this.burger.setAttribute('theme', this.theme);
        }
        this.targetMenu = document.querySelector(this.target);
    }
    toggle() {
        if (this.burger.classList.contains('open')) {
            // close menu
            this.burger.classList.remove('open');
            if (this.targetMenu && typeof this.targetMenu['closeMenu'] === 'function') {
                // this.targetMenu.classList.remove('open')
                this.targetMenu['closeMenu'](this.burger);
            }
        }
        else {
            // open menu
            this.burger.classList.add('open');
            if (this.targetMenu && typeof this.targetMenu['openMenu'] === 'function') {
                // this.targetMenu.classList.add('open')
                // this.targetMenu.focus()
                this.targetMenu['openMenu'](this.burger);
            }
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
            "attr": "animation",
            "reflectToAttr": true,
            "mutable": true
        },
        "burger": {
            "elementRef": true
        },
        "target": {
            "type": String,
            "attr": "target",
            "reflectToAttr": true
        },
        "theme": {
            "type": String,
            "attr": "theme",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ":root {\n  --wu-burger-size: 40px;\n  --wu-burger-thickness: 4px;\n  --wu-burger-color: currentColor;\n}\n\n\n/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-burger {\n  font-size: 18px;\n  font-size: 1.125rem; }\n  wu-burger[theme='primary'] {\n    color: var(--color-primary); }\n  wu-burger[theme='secondary'] {\n    color: var(--color-secondary); }\n  wu-burger[theme='success'] {\n    color: var(--color-success); }\n  wu-burger[theme='warning'] {\n    color: var(--color-warning); }\n  wu-burger[theme='danger'] {\n    color: var(--color-danger); }\n  wu-burger[theme='info'] {\n    color: var(--color-info); }\n  wu-burger[theme='light'] {\n    color: var(--color-light); }\n  wu-burger[theme='grey'] {\n    color: var(--color-grey); }\n  wu-burger[theme='dark'] {\n    color: var(--color-dark); }\n  wu-burger button {\n    font-size: 1em;\n    color: currentColor;\n    position: relative;\n    width: var(--wu-burger-size);\n    height: calc(9 * var(--wu-burger-thickness));\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: inline-block;\n    padding: var(--wu-burger-thickness) 0;\n    /* Animations */ }\n    wu-burger button:focus {\n      outline: none; }\n    wu-burger button span {\n      display: block;\n      left: 0;\n      width: var(--wu-burger-size);\n      height: var(--wu-burger-thickness);\n      border-radius: var(--wu-burger-thickness);\n      background: var(--wu-burger-color);\n      position: absolute;\n      -webkit-transition: var(--fast) ease-in-out;\n      transition: var(--fast) ease-in-out; }\n      wu-burger button span:nth-child(1) {\n        top: calc(2 * var(--wu-burger-thickness)); }\n      wu-burger button span:nth-child(2) {\n        top: calc(4 * var(--wu-burger-thickness)); }\n      wu-burger button span:nth-child(3) {\n        top: calc(6 * var(--wu-burger-thickness)); }\n    wu-burger button.middle-out span {\n      transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast); }\n    wu-burger button.rotate span {\n      transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast); }\n  wu-burger.open button {\n    /* Animations */ }\n    wu-burger.open button.middle-out span {\n      transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      -webkit-transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast); }\n      wu-burger.open button.middle-out span:nth-child(1) {\n        top: calc(4 * var(--wu-burger-thickness));\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      wu-burger.open button.middle-out span:nth-child(2) {\n        opacity: 0; }\n      wu-burger.open button.middle-out span:nth-child(3) {\n        top: calc(4 * var(--wu-burger-thickness));\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n    wu-burger.open button.spin-out span:nth-child(1) {\n      top: calc(4 * var(--wu-burger-thickness));\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    wu-burger.open button.spin-out span:nth-child(2) {\n      opacity: 0;\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px); }\n    wu-burger.open button.spin-out span:nth-child(3) {\n      top: calc(4 * var(--wu-burger-thickness));\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    wu-burger.open button.rotate span:nth-child(1) {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      top: calc(4 * var(--wu-burger-thickness)); }\n    wu-burger.open button.rotate span:nth-child(2) {\n      opacity: 0; }\n    wu-burger.open button.rotate span:nth-child(3) {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      top: calc(4 * var(--wu-burger-thickness)); }"; }
}

export { WuBurger };
