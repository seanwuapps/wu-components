/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuDrawerMenu {
    constructor() {
        this.items = { "home": {
                "label": 'Home'
            } };
    }
    componentDidLoad() {
        console.log(this.items);
        if (typeof this.items === 'string') {
            console.log('string items');
            this.items = JSON.parse(this.items);
        }
        console.log(this.items);
    }
    render() {
        console.log(this.items);
        return (h("nav", { class: "side-menu" },
            h("slot", null),
            Object.keys(this.items).map(key => {
                let item = this.items[key];
                return h("div", null, item.label);
            })));
    }
    static get is() { return "wu-drawer-menu"; }
    static get properties() { return {
        "items": {
            "type": "Any",
            "attr": "items"
        }
    }; }
    static get style() { return ":root{ \n  --menu-bg-color: var(--orange);\n  --menu-text-color: #333;\n}\n\nwu-drawer-menu {\n  position: fixed;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  background: var(--menu-bg-color);\n  transition: -webkit-transform var(--fast);\n  -webkit-transition: -webkit-transform var(--fast);\n  transition: transform var(--fast);\n  transition: transform var(--fast), -webkit-transform var(--fast);\n  top: 0;\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  wu-drawer-menu[position=left] {\n    right: auto; }\n  wu-drawer-menu[position=right] {\n    top: 0;\n    left: auto;\n    right: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  wu-drawer-menu.open {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }"; }
}

export { WuDrawerMenu };
