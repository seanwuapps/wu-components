/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuShadow {
    constructor() {
        this.type = 'box'; // or drop
        this.depth = 1;
    }
    render() {
        return (h("div", { class: `shadow-${this.depth} ${this.type}` },
            h("slot", null)));
    }
    static get is() { return "wu-shadow"; }
    static get properties() { return { "depth": { "type": Number, "attr": "depth" }, "type": { "type": String, "attr": "type" } }; }
    static get style() { return "wu-shadow .box {\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  transition: box-shadow 0.3s ease-out; }"; }
}

export { WuShadow };
