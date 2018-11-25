/*! Built with http://stenciljs.com */
const { h } = window.App;

class CssVarSandbox {
    constructor() {
        this.css = '';
    }
    componentWillLoad() {
        this.variableList = JSON.parse(this.vars);
        this.css = this.toCssString(this.variableList);
    }
    toCssString(styles) {
        let str = ':root {\n';
        Object.keys(styles).map(key => {
            if (key === 'elm') {
                return;
            }
            const value = styles[key];
            str += `  ${key}: ${value};\n`;
        });
        str += '}';
        return str;
    }
    updateVar(key, e) {
        console.log(e);
        let styles = Object.assign({}, this.variableList);
        styles[key] = e.target.value;
        console.log(styles);
        this.variableList = styles;
        this.css = this.toCssString(styles);
        console.log(this.css);
    }
    render() {
        return (h("div", null,
            h("h2", null, "CSS Variables"),
            h("wu-row", null,
                h("wu-col", { portion: "2" },
                    h("div", null,
                        this.variableList,
                        Object.keys(this.variableList).map(key => {
                            if (key === 'elm') {
                                return;
                            }
                            const value = this.variableList[key];
                            return (h("wu-row", null,
                                h("wu-col", null,
                                    h("label", { htmlFor: key }, key)),
                                h("wu-col", null,
                                    h("input", { type: "text", id: key, value: value, onInput: e => this.updateVar(key, e) }))));
                        }))),
                h("wu-col", { portion: "3" },
                    h("wu-row", null,
                        h("wu-col", null,
                            h("textarea", { readonly: true }, this.css))))),
            h("h3", null, "Preview"),
            h("div", { innerHTML: this.code, style: this.variableList })));
    }
    static get is() { return "css-var-sandbox"; }
    static get properties() { return {
        "code": {
            "type": String,
            "attr": "code"
        },
        "css": {
            "state": true
        },
        "variableList": {
            "state": true
        },
        "vars": {
            "type": String,
            "attr": "vars"
        }
    }; }
    static get style() { return "textarea {\n  width: 100%;\n  min-height: 80px;\n  padding: 14px 0;\n  padding: 0.875rem 0;\n  border-color: rgba(0, 0, 0, 0.1); }\n  textarea[readonly] {\n    border-radius: var(--wu-code-block-border-radius); }"; }
}

export { CssVarSandbox };
