/*! Built with http://stenciljs.com */
const { h } = window.App;

class VarsEditor {
    componentWillLoad() {
        console.log('asdf', this.vars);
        this.varList = this.vars;
    }
    updateVar(key, e) {
        let styles = Object.assign({}, this.varList);
        styles[key] = e.target.value;
        this.varList = styles;
        console.log(this.varList);
    }
    render() {
        return (h("ul", null,
            Object.keys(this.varList).map(key => {
                const value = this.varList[key];
                return (h("li", null,
                    h("label", { htmlFor: key }, key),
                    h("input", { type: "text", id: key, value: value, onInput: e => this.updateVar(key, e) })));
            }),
            this.varList));
    }
    static get is() { return "vars-editor"; }
    static get properties() { return {
        "varList": {
            "state": true
        },
        "vars": {
            "type": "Any",
            "attr": "vars"
        }
    }; }
}

export { VarsEditor };
