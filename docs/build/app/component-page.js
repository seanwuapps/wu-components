/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as getComponent } from './chunk-a62d72b3.js';

class ComponentPage {
    componentDidLoad() {
        this.updateTitle();
    }
    updateTitle() {
        const item = getComponent(this.match.params.name);
        if (item) {
            this.loadedComponent = item;
            document.title = item.name + ' | Wu Components';
        }
        document.title = 'Wu Components';
    }
    render() {
        return this.loadedComponent ? (h("wu-page", { "reflect-fixed-header": true },
            h("wu-container", null,
                h("h2", null, this.loadedComponent.name),
                h("p", null, this.loadedComponent.description ? this.loadedComponent.description : null),
                h("doc-content", { type: "components", name: this.loadedComponent.key })))) : (h("p", null, "Component cannot be loaded."));
    }
    static get is() { return "component-page"; }
    static get properties() { return {
        "loadedComponent": {
            "state": true
        },
        "match": {
            "type": "Any",
            "attr": "match",
            "watchCallbacks": ["updateTitle"]
        }
    }; }
    static get style() { return ""; }
}

export { ComponentPage };
