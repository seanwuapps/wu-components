/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuDivider {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-divider"; }
    static get style() { return ":root{\n  --wu-divider-spacing: 10px;\n}\n\nwu-divider {\n  border-top: 1px solid #dedede;\n  margin-top: var(--wu-divider-spacing);\n  height: var(--wu-divider-spacing);\n  display: block;\n  width: 100%; }"; }
}

export { WuDivider };
