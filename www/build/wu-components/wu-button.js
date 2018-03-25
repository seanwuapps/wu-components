/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuButton {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-button"; }
    static get properties() { return { "button": { "elementRef": true } }; }
    static get style() { return "wu-button {\n  min-width: 60px;\n  max-width: 100%;\n  padding: 10px 30px;\n  display: inline-block;\n  text-transform: uppercase;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: box-shadow 0.3s ease-out;\n  cursor: pointer;\n  background: #2b98f0;\n  color: white;\n  margin: 0 5px;\n  text-align: center; }\n  wu-button:hover, wu-button:focus {\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n    filter: brightness(110%); }\n  wu-button[type='outline'] {\n    border: 1px solid #2b98f0;\n    background: white;\n    color: #2b98f0; }\n    wu-button[type='outline']:hover {\n      filter: brightness(95%); }\n  wu-button[type='block'] {\n    display: block;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    padding-right: 0; }\n  wu-button[flat] {\n    box-shadow: none; }\n    wu-button[flat]:hover {\n      box-shadow: none; }\n  wu-button[secondary] {\n    background: #ccc;\n    color: #333; }\n    wu-button[secondary][type='outline'] {\n      border-color: #ccc;\n      background: white;\n      color: #333; }"; }
}

export { WuButton };
