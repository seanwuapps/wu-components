/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuCard {
    constructor() {
        this.cardTitle = '';
        this.hover = false;
        this.thumb = '';
        this.src = '';
        this.alt = '';
    }
    componentDidLoad() {
    }
    render() {
        return h("div", { class: "card" },
            this.src ?
                h("wu-img", { class: "card-media", src: this.src, thumb: this.thumb, alt: this.alt }) : null,
            h("div", { class: "card-content" },
                h("div", { class: "card-title" }, this.cardTitle),
                h("slot", null)));
    }
    static get is() { return "wu-card"; }
    static get properties() { return {
        "alt": {
            "type": String,
            "attr": "alt"
        },
        "cardTitle": {
            "type": String,
            "attr": "card-title"
        },
        "el": {
            "elementRef": true
        },
        "hover": {
            "type": Boolean,
            "attr": "hover"
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
    static get style() { return "wu-card {\n  display: block;\n  background: white;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  font-size: 16px;\n  font-size: 1rem;\n  border-radius: 5px;\n  overflow: hidden; }\n  wu-card .card-media {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  wu-card .card-content {\n    padding: 20px; }\n  wu-card .card-title {\n    font-size: 22px;\n    font-size: 1.375rem;\n    border-bottom: 1px solid #efefef;\n    display: block;\n    padding-bottom: 10px;\n    margin-bottom: 10px; }\n  wu-card[hover]:hover, wu-card[hover]:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19); }\n  wu-card .card-footer {\n    border-top: 1px solid #efefef;\n    margin-top: 10px;\n    padding-top: 10px; }\n    wu-card .card-footer .action {\n      border: none;\n      background: white;\n      color: var(--button-theme);\n      text-decoration: none;\n      text-transform: uppercase;\n      font-size: 16px;\n      font-size: 1rem;\n      cursor: pointer;\n      padding: 5px;\n      margin-right: 10px; }\n      wu-card .card-footer .action:hover, wu-card .card-footer .action:focus {\n        text-decoration: underline;\n        outline: none; }"; }
}

export { WuCard };
