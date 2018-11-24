/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHome {
    render() {
        return (h("wu-page", { class: "app-home", "reflect-fixed-header": true },
            h("wu-container", null,
                h("h1", null, "What is this"),
                h("p", null, "Wu Components is a collection of web components designed help developers get started easily and quickly."),
                h("p", null,
                    "This is ",
                    h("strong", null, "not"),
                    " designed to be another \"",
                    h("em", null, "framework"),
                    "\", it should speed up your prototyping with minimal overheads. If you find it slowing you down, no hard feelings mate, there're plenty great libraries out there you can use."),
                h("stencil-route-link", { url: "/getting-started" },
                    h("wu-button", { theme: "success" }, "Getting Started")),
                h("stencil-route-link", { url: "/components" },
                    h("wu-button", { theme: "primary" }, "Components")))));
    }
    static get is() { return "app-home"; }
    static get style() { return ""; }
}

export { AppHome };
