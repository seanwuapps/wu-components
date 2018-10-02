/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    render() {
        return (h("wu-page", { class: "app-home", "reflect-fixed-header": true },
            h("h1", null, "What is this"),
            h("p", null, "Wu Components is a set of Web components designed help developers get started easily and quickly."),
            h("p", null, "It provides a good set of commonly used components that can be configured and used in modern web browsers."),
            h("stencil-route-link", { url: "/getting-started" },
                h("wu-button", { theme: "success" }, "Getting Started")),
            h("stencil-route-link", { url: "/component" },
                h("wu-button", { theme: "primary" }, "Components"))));
    }
    static get is() { return "app-home"; }
    static get style() { return ""; }
}

export { AppHome };
