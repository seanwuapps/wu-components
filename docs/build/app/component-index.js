/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as components } from './chunk-6c6a8d45.js';

class ComponentIndex {
    render() {
        return (h("wu-page", { "reflect-fixed-header": true, class: "component-index-page" },
            h("wu-container", null,
                h("wu-row", { gap: "20px", "fill-height": true, "equal-height": "wu-card" }, components.map(component => {
                    return (h("wu-col", null,
                        h("wu-card", { hover: "hover", "card-title": component.name },
                            component.tags ? (component.tags.map(tag => (h("div", null,
                                h("code", null,
                                    "<",
                                    tag,
                                    ">"))))) : (h("code", null,
                                "<",
                                component.key,
                                ">")),
                            h("p", null, component.description ? component.description : 'No description.'),
                            h("div", { slot: "footer" },
                                h("stencil-route-link", { url: '/components/' + component.key }, "Details")))));
                })))));
    }
    static get is() { return "component-index"; }
    static get style() { return ".component-index-page ul {\n  list-style: none;\n  padding: 0; }"; }
}

export { ComponentIndex };
