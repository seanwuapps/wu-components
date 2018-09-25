/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuImg {
    constructor() {
        this.loading = true;
        this.onFullImageLoaded = () => {
            const mainImg = this.el.querySelector('img.main');
            const loaderImg = this.el.querySelector('img.loader');
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
        "positionX": {
            "type": String,
            "attr": "position-x",
            "reflectToAttr": true
        },
        "positionY": {
            "type": String,
            "attr": "position-y",
            "reflectToAttr": true
        },
        "shape": {
            "type": String,
            "attr": "shape",
            "reflectToAttr": true
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
    static get style() { return "/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-img {\n  display: inherit; }\n  wu-img img.main {\n    width: 100%;\n    -webkit-filter: blur(10px);\n            filter: blur(10px);\n    transition: -webkit-filter 0.5s;\n    -webkit-transition: -webkit-filter 0.5s;\n    transition: filter 0.5s;\n    transition: filter 0.5s, -webkit-filter 0.5s; }\n    wu-img img.main.loaded {\n      -webkit-filter: none;\n              filter: none; }\n  wu-img img.loader {\n    opacity: 0;\n    height: 0px; }"; }
}

export { WuImg };
