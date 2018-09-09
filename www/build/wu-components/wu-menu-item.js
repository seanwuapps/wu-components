/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuMenuItem {
    render() {
        return (h("div", { class: "menu-item" },
            h("slot", null)));
    }
    static get is() { return "wu-menu-item"; }
    static get style() { return "wu-menu-item {\n  display: block;\n  position: relative; }\n  wu-menu-item[theme='primary'] {\n    color: var(--color-primary);\n    background: white; }\n  wu-menu-item[theme='secondary'] {\n    color: var(--color-secondary);\n    background: white; }\n  wu-menu-item[theme='success'] {\n    color: var(--color-success);\n    background: white; }\n  wu-menu-item[theme='warning'] {\n    color: var(--color-warning);\n    background: white; }\n  wu-menu-item[theme='danger'] {\n    color: var(--color-danger);\n    background: white; }\n  wu-menu-item[theme='info'] {\n    color: var(--color-info);\n    background: white; }\n  wu-menu-item[theme='light'] {\n    color: var(--color-light);\n    background: white; }\n  wu-menu-item[theme='grey'] {\n    color: var(--color-grey);\n    background: white; }\n  wu-menu-item[theme='dark'] {\n    color: var(--color-dark);\n    background: white; }\n  wu-menu-item:hover::before, wu-menu-item:focus::before {\n    content: '';\n    background: currentColor;\n    opacity: 0.1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1; }\n  wu-menu-item .menu-item {\n    position: relative;\n    z-index: 2; }\n  wu-menu-item [href] {\n    display: block;\n    text-decoration: none;\n    color: currentColor;\n    padding: 15px 10px 18px 20px; }\n    wu-menu-item [href] i {\n      width: 1em;\n      max-width: 1em;\n      margin-right: 10px;\n      vertical-align: text-bottom; }"; }
}

export { WuMenuItem };
