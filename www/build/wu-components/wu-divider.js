/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuDivider {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-divider"; }
    static get style() { return ":root{\n  --wu-divider-spacing: 10px;\n}\n\n/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-divider {\n  border-top: 1px solid #dedede;\n  margin-top: var(--wu-divider-spacing);\n  height: var(--wu-divider-spacing);\n  display: block;\n  width: 100%; }"; }
}

export { WuDivider };
