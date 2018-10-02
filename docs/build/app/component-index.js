/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as components } from './chunk-3269e3cd.js';

class ComponentIndex {
    render() {
        return (h("wu-page", { "reflect-fixed-header": true, class: "component-index-page" },
            h("div", null, components.map(component => {
                return (h("div", null,
                    h("wu-button", { block: true, outline: true, theme: "secondary" },
                        h("stencil-route-link", { url: '/component/' + component }, component))));
            }))));
    }
    static get is() { return "component-index"; }
    static get style() { return ".component-index-page ul {\n  list-style: none;\n  padding: 0; }"; }
}

export { ComponentIndex };
