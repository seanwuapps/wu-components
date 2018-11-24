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
            const value = styles[key];
            str += `  ${key}: ${value};\n`;
        });
        str += '}';
        return str;
    }
    updateVar(key, e) {
        let styles = Object.assign({}, this.variableList);
        styles[key] = e.target.value;
        this.variableList = styles;
    }
    render() {
        return (h("div", null,
            h("h2", null, "CSS Variables"),
            h("div", null, Object.keys(this.variableList).map(key => {
                if (key === 'elm') {
                    return;
                }
                const value = this.variableList[key];
                return (h("wu-row", null,
                    h("wu-col", null),
                    h("wu-col", null,
                        h("label", { htmlFor: key }, key)),
                    h("wu-col", null,
                        h("input", { type: "text", id: key, value: value, onInput: e => this.updateVar(key, e) })),
                    h("wu-col", null)));
            })),
            h("h3", null, "CSS Code"),
            h("code-block", { language: "css", code: this.css }),
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
    static get style() { return ""; }
}

export { CssVarSandbox };
