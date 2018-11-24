/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentPage {
    constructor() {
        this.pagePath = '';
    }
    componentDidLoad() {
        this.updatePageContent();
    }
    updatePageContent() {
        this.pagePath = this.match.params.category + '/' + this.match.params.pageName;
        document.title = this.toTitle(this.match.params.pageName) + ' | Wu Components';
    }
    toTitle(string) {
        string = string.replace('-', ' ');
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    render() {
        return (h("wu-page", { "reflect-fixed-header": true },
            h("wu-container", null,
                h("doc-content", { type: "pages", name: this.pagePath }))));
    }
    static get is() { return "docs-page"; }
    static get properties() { return {
        "match": {
            "type": "Any",
            "attr": "match",
            "watchCallbacks": ["updatePageContent"]
        },
        "pagePath": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

export { ComponentPage as DocsPage };
