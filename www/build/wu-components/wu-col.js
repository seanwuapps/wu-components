/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuCol {
    constructor() {
        this.basis = '';
        this.portion = '1';
    }
    componentDidLoad() {
        this.col.style.cssText = `flex-grow: ${this.portion}`;
        if (this.basis.length) {
            this.col.style.cssText += `flex-basis: ${this.basis}; flex-shrink: 0;`;
        }
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wu-col"; }
    static get properties() { return {
        "basis": {
            "type": String,
            "attr": "basis"
        },
        "col": {
            "elementRef": true
        },
        "portion": {
            "type": String,
            "attr": "portion"
        }
    }; }
    static get style() { return "wu-col {\n  max-width: 100%; }"; }
}

export { WuCol };
