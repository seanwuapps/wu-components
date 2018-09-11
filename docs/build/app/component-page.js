/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentPage {
    constructor() {
        this.content = 'No demo available';
    }
    componentWillLoad() {
        const page = this.match.params.name;
        return this.fetchNewContent(page);
    }
    fetchNewContent(page) {
        console.log(page);
        if (page.length) {
            const doc = document;
            return fetch(`/demo-pages/${page}.html`)
                .then(response => response.text())
                .then(data => {
                console.log(data);
                this.content = data;
                doc.title = page.toUpperCase() + ' - WU Component';
            })
                .catch(error => {
                console.error(error);
            });
        }
    }
    render() {
        return (h("div", { innerHTML: this.content }));
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

export { ComponentPage };
