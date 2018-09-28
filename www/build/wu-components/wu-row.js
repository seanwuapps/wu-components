/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuRow {
    constructor() {
        this.gap = '0';
    }
    componentDidLoad() {
        this.el.style.cssText = `--gap:${this.gap}`;
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-row"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "gap": {
            "type": String,
            "attr": "gap"
        }
    }; }
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  margin-bottom: 10px;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  height: 100%; }\n  wu-row[no-margin] {\n    margin-bottom: 0; }\n  \@media screen and (min-width: 768px) {\n    wu-row {\n      -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n      flex-direction: row; }\n      wu-row[v-center] {\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center; } }"; }
}

export { WuRow };
