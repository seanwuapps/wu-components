/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentContent {
    constructor() {
        this.isLoading = true;
        this.documentContent = '';
        this.errorMsg = '';
        this.LOADING_TIMEOUT = 10000;
    }
    componentWillLoad() {
        this.fetchContent();
    }
    fetchContent() {
        this.startLoading();
        return fetch(`/doc-content/${this.name}.html`)
            .then(res => {
            if (res.ok) {
                return res.text();
            }
            if (res.status === 404) {
                console.log(404);
                throw new Error('Page not found. :(');
            }
            throw new Error('Something went wrong.');
        })
            .then(res => {
            this.documentContent = res;
            this.cancelLoading();
        })
            .catch(err => {
            console.log(err);
            this.errorMsg = err;
            this.cancelLoading();
        });
    }
    cancelLoading() {
        this.isLoading = false;
    }
    startLoading() {
        this.isLoading = true;
    }
    render() {
        return (h("div", null,
            this.isLoading ? (h("div", { class: "text-center" },
                h("wu-spinner", { type: "ring", color: "#14406F", style: { fontSize: '22px' } }))) : (h("div", { innerHTML: this.documentContent, class: "fade-in" })),
            this.errorMsg.length ? h("div", { class: "text-danger" }, this.errorMsg) : null));
    }
    static get is() { return "component-content"; }
    static get properties() { return {
        "documentContent": {
            "state": true
        },
        "errorMsg": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "watchCallbacks": ["fetchContent"]
        }
    }; }
    static get style() { return ".fade-in {\n  -webkit-animation: fade-in var(--slow);\n  animation: fade-in var(--slow); }\n\n\@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n\@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }"; }
}

class ComponentPage {
    componentDidLoad() {
        document.title = this.match.params.name ? this.match.params.name + ' | Wu Components' : 'Wu Components';
    }
    render() {
        return (h("wu-page", { "reflect-fixed-header": true },
            h("component-content", { name: this.match.params.name })));
    }
    static get is() { return "component-page"; }
    static get properties() { return {
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
    static get style() { return ""; }
}

export { ComponentContent, ComponentPage };
