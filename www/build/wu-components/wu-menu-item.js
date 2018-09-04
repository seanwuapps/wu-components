/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuMenuItem {
    render() {
        return (h("div", { class: "menu-item" },
            h("slot", null)));
    }
    static get is() { return "wu-menu-item"; }
}

export { WuMenuItem };
