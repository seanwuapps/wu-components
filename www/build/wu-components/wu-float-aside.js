/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuFloatAside {
    render() {
        return h("p", null, "My name is Stencil");
    }
    static get is() { return "wu-float-aside"; }
    static get style() { return ""; }
}

export { WuFloatAside };
