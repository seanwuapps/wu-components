/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as components } from './chunk-2771fb0b.js';

class ComponentIndex {
    render() {
        return (h("wu-page", { "reflect-fixed-header": true, class: "component-index-page" },
            h("wu-row", { "auto-mobile": true, "fill-height": true }, components.map(component => {
                return (h("wu-col", null,
                    h("wu-card", { flat: true, hover: true, "card-title": component.name + ` <${component.key}>`, style: { minWidth: '20%' } },
                        h("p", null, component.description ? component.description : 'No description.'),
                        h("div", { class: "text-right", slot: "footer" },
                            h("stencil-route-link", { url: '/component/' + component.key },
                                h("wu-button", { outline: true, flat: true, theme: "primary" }, "Details"))))));
            }))));
    }
    static get is() { return "component-index"; }
    static get style() { return ".component-index-page ul {\n  list-style: none;\n  padding: 0; }"; }
}

export { ComponentIndex };
