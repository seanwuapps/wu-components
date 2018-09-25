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
    static get properties() { return {
        "depth": {
            "type": Number,
            "attr": "depth"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-shadow .box {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out; }"; }
}

export { WuShadow };
