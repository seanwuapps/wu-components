/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuImg {
    constructor() {
        this.loaded = false;
        this.loadedSrc = '';
        this.componentWillLoad = () => {
            if (!this.thumb) {
                this.loadedSrc = this.src;
            }
            this.loadedSrc = this.thumb;
        };
        this.componentDidLoad = () => {
            if (!this.thumb) {
                this.loadedSrc = this.src;
                this.imgClasses = this.imgClasses + ' enhanced';
                this.img = this.el.querySelector('img');
                this.img.className = this.imgClasses;
            }
            // load first image
            this.initImage();
        };
        this.initImage = () => {
            if (this.loaded) {
                return;
            }
            this.img = this.el.querySelector('img');
            // move class list into img tag
            this.imgClasses = this.el.className;
            this.el.className = '';
            this.img.className = this.imgClasses;
            this.img.onload = this.onImageLoaded;
        };
        this.onImageLoaded = () => {
            if (this.img.src === this.src) {
                this.imgClasses = this.imgClasses + ' enhanced';
                this.img.className = this.imgClasses;
                this.loaded = true;
                return;
            }
            // load large image
            this.loadedSrc = this.src;
        };
    }
    render() {
        return h("img", { src: this.loadedSrc, alt: this.alt });
    }
    static get is() { return "wu-img"; }
    static get properties() { return { "alt": { "type": String, "attr": "alt" }, "el": { "elementRef": true }, "loaded": { "state": true }, "loadedSrc": { "state": true }, "src": { "type": String, "attr": "src" }, "thumb": { "type": String, "attr": "thumb" } }; }
    static get style() { return "wu-img {\n  display: inherit; }\n  wu-img img {\n    max-width: 100%;\n    transition: filter 0.4s ease-out; }\n  wu-img img:not(.enhanced) {\n    filter: blur(10px); }"; }
}

export { WuImg };
