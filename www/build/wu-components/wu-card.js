/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuCard {
    constructor() {
        this.title = '';
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-card"; }
    static get properties() { return {
        "title": {
            "type": String,
            "attr": "title"
        }
    }; }
    static get style() { return ""; }
}

export { WuCard };
