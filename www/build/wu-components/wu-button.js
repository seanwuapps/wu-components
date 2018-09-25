/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuButton {
    constructor() {
        this.type = 'button';
        this.disabled = false;
    }
    componentDidLoad() {
        if (this.theme) {
            this.button.setAttribute('theme', this.theme);
        }
    }
    onClick() {
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { disabled: this.disabled, onClick: this.onClick.bind(this) }),
            h("slot", null)));
    }
    static get is() { return "wu-button"; }
    static get properties() { return {
        "button": {
            "elementRef": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ":root{\n  --button-padding-x: 30px;\n  --button-padding-y: 10px;\n}\n\n/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-button {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  background: white;\n  color: currentColor;\n  max-width: 100%;\n  display: inline-block;\n  margin: 5px;\n  transition: box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  -webkit-transition: -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in, -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in, -webkit-filter var(--fast) ease-in;\n  width: auto;\n  height: auto; }\n  wu-button[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n    wu-button[theme='primary'][outline] {\n      background: white;\n      border: 1px solid var(--color-primary);\n      color: currentColor; }\n  wu-button[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n    wu-button[theme='secondary'][outline] {\n      background: white;\n      border: 1px solid var(--color-secondary);\n      color: currentColor; }\n  wu-button[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n    wu-button[theme='success'][outline] {\n      background: white;\n      border: 1px solid var(--color-success);\n      color: currentColor; }\n  wu-button[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n    wu-button[theme='warning'][outline] {\n      background: white;\n      border: 1px solid var(--color-warning);\n      color: currentColor; }\n  wu-button[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n    wu-button[theme='danger'][outline] {\n      background: white;\n      border: 1px solid var(--color-danger);\n      color: currentColor; }\n  wu-button[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n    wu-button[theme='info'][outline] {\n      background: white;\n      border: 1px solid var(--color-info);\n      color: currentColor; }\n  wu-button[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n    wu-button[theme='light'][outline] {\n      background: white;\n      border: 1px solid var(--color-light);\n      color: currentColor; }\n  wu-button[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n    wu-button[theme='grey'][outline] {\n      background: white;\n      border: 1px solid var(--color-grey);\n      color: currentColor; }\n  wu-button[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n    wu-button[theme='dark'][outline] {\n      background: white;\n      border: 1px solid var(--color-dark);\n      color: currentColor; }\n  wu-button[outline] {\n    border: 1px solid currentColor; }\n  wu-button:hover, wu-button:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    -webkit-filter: brightness(105%);\n            filter: brightness(105%); }\n  wu-button button,\n  wu-button a {\n    cursor: pointer;\n    height: 100%;\n    padding: var(--button-padding-y) var(--button-padding-x);\n    text-decoration: none;\n    font-size: 16px;\n    font-size: 1rem;\n    line-height: 20px;\n    line-height: 1.25rem;\n    border: none;\n    display: block;\n    background: transparent;\n    color: currentColor;\n    text-align: center; }\n  wu-button[block] {\n    display: block; }\n    wu-button[block] button, wu-button[block] a {\n      width: 100%;\n      text-align: center;\n      padding-left: 0;\n      padding-right: 0; }\n  wu-button[flat] {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n    wu-button[flat]:hover {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n  wu-button[shape=\"circle\"] {\n    width: 3em;\n    height: 3em;\n    border-radius: 50%; }\n    wu-button[shape=\"circle\"] a, wu-button[shape=\"circle\"] button {\n      padding: 0;\n      width: 100%;\n      height: 3em;\n      line-height: 3em;\n      font-size: 1em;\n      text-align: center;\n      white-space: nowrap; }"; }
}

export { WuButton };
