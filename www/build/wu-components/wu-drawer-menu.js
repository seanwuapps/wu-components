/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuDrawerMenu {
    componentDidLoad() {
        console.log(this.items);
    }
    render() {
        console.log(this.items);
        return (h("nav", { class: "side-menu" },
            h("ul", null,
                h("li", null))));
    }
    static get is() { return "wu-drawer-menu"; }
    static get properties() { return {
        "items": {
            "type": "Any",
            "attr": "items"
        }
    }; }
    static get style() { return ":root{ \n  --menu-bg-color: var(--orange);\n  --menu-text-color: #333;\n}\n\nwu-drawer-menu {\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  transition: -webkit-transform var(--fast);\n  -webkit-transition: -webkit-transform var(--fast);\n  transition: transform var(--fast);\n  transition: transform var(--fast), -webkit-transform var(--fast);\n  width: 300px;\n  height: 100vh;\n  background: var(--menu-bg-color); }\n  wu-drawer-menu.open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }"; }
}

export { WuDrawerMenu };
