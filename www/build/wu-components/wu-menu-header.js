/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuMenuHeader {
    constructor() {
        this.imgShape = 'square';
    }
    componentDidLoad() {
        if (this.theme) {
            this.el.setAttribute('theme', this.theme);
        }
    }
    render() {
        return (h("div", null,
            this.img.length > 0 ? (h("div", { class: "img" }, this.imgHref.length ? (h("a", { href: this.imgHref },
                h("img", { src: this.img, class: this.imgShape === 'circle' ? 'circle' : null }))) : (h("img", { src: this.img, class: this.imgShape === 'circle' ? 'circle' : null })))) : null,
            h("div", { class: "title" },
                h("slot", { name: "title" })),
            h("div", { class: "sub-title" },
                h("slot", { name: "sub-title" }))));
    }
    static get is() { return "wu-menu-header"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "img": {
            "type": String,
            "attr": "img"
        },
        "imgHref": {
            "type": String,
            "attr": "img-href"
        },
        "imgShape": {
            "type": String,
            "attr": "img-shape",
            "mutable": true
        },
        "theme": {
            "type": String,
            "attr": "theme"
        }
    }; }
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-menu-header {\n  display: block;\n  padding: 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative; }\n  wu-menu-header[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-menu-header[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-menu-header[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-menu-header[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-menu-header[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-menu-header[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-menu-header[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-menu-header[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-menu-header[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-menu-header .img {\n    margin-top: 16px;\n    margin-bottom: 4px; }\n    wu-menu-header .img img {\n      -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n      -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n      transition: -webkit-box-shadow 0.3s ease-out;\n      transition: box-shadow 0.3s ease-out;\n      transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n      width: 54px;\n      height: 54px;\n      -o-object-fit: cover;\n         object-fit: cover;\n      padding: 2px;\n      border: 2px solid white; }\n      wu-menu-header .img img.circle {\n        border-radius: 50%; }\n  wu-menu-header .title {\n    font-size: 22px;\n    font-size: 1.375rem;\n    font-weight: bold; }\n  wu-menu-header .sub-title {\n    font-size: 14px;\n    font-size: 0.875rem; }\n  wu-menu-header a {\n    color: currentColor;\n    text-decoration: none; }"; }
}

export { WuMenuHeader };
