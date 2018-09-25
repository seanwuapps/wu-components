/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuHeader {
    componentDidLoad() {
        if (this.theme) {
            this.el.setAttribute('theme', this.theme);
        }
        if (this.fixed) {
            this.el.classList.add('fixed');
        }
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-header"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "fixed": {
            "type": Boolean,
            "attr": "fixed",
            "reflectToAttr": true
        },
        "theme": {
            "type": String,
            "attr": "theme",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ":root {\n  --wu-header-height: 46px;\n}\n\n\n/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-header {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  display: block;\n  padding: 0 8px;\n  overflow: hidden; }\n  wu-header[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-header[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-header[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-header[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-header[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-header[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-header[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-header[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-header[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-header wu-row,\n  wu-header wu-col {\n    margin: 0;\n    padding: 0; }\n  wu-header wu-burger {\n    --wu-burger-size: 30px;\n    --wu-burger-thickness: 3px; }\n  wu-header.fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 9999;\n    height: var(--wu-header-height); }\n    wu-header.fixed + wu-page {\n      margin-top: var(--wu-header-height); }\n    wu-header.fixed wu-drawer-menu .side-menu {\n      top: var(--wu-header-height); }\n    wu-header.fixed wu-drawer-menu .side-menu-overlay {\n      top: var(--wu-header-height); }\n  wu-header h1,\n  wu-header h2,\n  wu-header h3,\n  wu-header h4,\n  wu-header h5,\n  wu-header h6 {\n    font-size: 1.1em;\n    font-weight: 500; }"; }
}

export { WuHeader };
