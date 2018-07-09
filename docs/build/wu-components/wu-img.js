/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuImg {
    constructor() {
        this.loading = true;
        this.onFullImageLoaded = () => {
            let mainImg = this.el.querySelector('img.main');
            let loaderImg = this.el.querySelector('img.loader');
            mainImg.src = loaderImg.src;
            loaderImg.parentNode.removeChild(loaderImg);
            this.loading = false;
        };
    }
    render() {
        return (h("div", null,
            h("img", { src: this.thumb, alt: this.alt, class: this.loading ? 'main' : 'main loaded' }),
            h("img", { src: this.src, alt: this.alt, class: "loader", onLoad: () => this.onFullImageLoaded() })));
    }
    static get is() { return "wu-img"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "el": {
            "elementRef": true
        },
        "loading": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src"
        },
        "thumb": {
            "type": String,
            "attr": "thumb"
        }
    }; }
    static get style() { return "wu-img {\n  display: inherit; }\n  wu-img img.main {\n    width: 100%;\n    -webkit-filter: blur(10px);\n    filter: blur(10px);\n    -webkit-transition: -webkit-filter 0.5s;\n    transition: -webkit-filter 0.5s;\n    transition: filter 0.5s;\n    transition: filter 0.5s, -webkit-filter 0.5s; }\n    wu-img img.main.loaded {\n      -webkit-filter: none;\n      filter: none; }\n  wu-img img.loader {\n    opacity: 0;\n    height: 0px; }"; }
}

export { WuImg };
