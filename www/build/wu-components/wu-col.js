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
    static get style() { return "wu-col {\n  max-width: 100%;\n  width: 100%;\n  padding: 5px;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  margin-bottom: var(--gap); }\n  wu-col[no-margin] {\n    margin: 0 !important; }\n  \@media screen and (min-width: 768px) {\n    wu-col {\n      margin-right: var(--gap); }\n      wu-col:last-of-type {\n        margin-right: 0; } }"; }
}

export { WuCol };
