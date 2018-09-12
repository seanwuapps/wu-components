/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentPage {
    render() {
        return (h("p", null, "My name is Stencil"));
    }
    static get is() { return "component-page"; }
    static get style() { return ""; }
}

export { ComponentPage };
