/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuFloatAside {
    constructor() {
        this.trigger = 'Click here';
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-float-aside"; }
    static get properties() { return {
        "trigger": {
            "type": String,
            "attr": "trigger"
        }
    }; }
    static get style() { return ""; }
}

export { WuFloatAside };
