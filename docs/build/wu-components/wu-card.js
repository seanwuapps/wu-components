/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuCard {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-card"; }
    static get style() { return ""; }
}

export { WuCard };
