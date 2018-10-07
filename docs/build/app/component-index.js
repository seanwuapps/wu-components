/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as components } from './chunk-f779d299.js';

class ComponentIndex {
    render() {
        return (h("wu-page", { "reflect-fixed-header": true, class: "component-index-page" },
            h("wu-row", { gap: "5%" }, components.map(component => {
                return (h("wu-card", { "card-title": component.name, style: { minWidth: '200px' } },
                    component.description ? component.description : 'No description.',
                    h("card-footer", null,
                        h("wu-button", { theme: "primary" },
                            h("stencil-route-link", { url: '/component/' + component }, component)))));
            }))));
    }
    static get is() { return "component-index"; }
    static get style() { return ".component-index-page ul {\n  list-style: none;\n  padding: 0; }"; }
}

export { ComponentIndex };
