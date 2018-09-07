/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuMenuHeader {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-menu-header"; }
}

export { WuMenuHeader };
