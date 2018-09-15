/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as matchPath, b as isModifiedEvent, c as ActiveRouter } from './chunk-8aa89ec5.js';
import './chunk-f5f83825.js';

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("wu-button", null, "Do it"))));
    }
    static get is() { return "app-home"; }
    static get style() { return ""; }
}

/**
  * @name Route
  * @module ionic
  * @description
 */
class RouteLink {
    constructor() {
        this.unsubscribe = () => { return; };
        this.activeClass = "link-active";
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = "a";
        this.match = null;
    }
    componentWillLoad() {
        this.computeMatch();
    }
    // Identify if the current route is a match.
    computeMatch() {
        if (this.location) {
            this.match = matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    }
    handleClick(e) {
        if (isModifiedEvent(e)) {
            return;
        }
        e.preventDefault();
        return this.history.push(this.getUrl(this.url));
    }
    // Get the URL for this route link without the root from the router
    getUrl(url) {
        // Don't allow double slashes
        if (url.charAt(0) == "/" && this.root.charAt(this.root.length - 1) == "/") {
            return this.root.slice(0, this.root.length - 1) + url;
        }
        return this.root + url;
    }
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null,
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === "a") {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, "aria-haspopup": this.ariaHaspopup, id: this.id, "aria-posinset": this.ariaPosinset, "aria-setsize": this.ariaSetsize, "aria-label": this.ariaLabel });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes), h("slot", null)));
    }
    static get is() { return "stencil-route-link"; }
    static get properties() {
        return {
            "activeClass": {
                "type": String,
                "attr": "active-class"
            },
            "anchorClass": {
                "type": String,
                "attr": "anchor-class"
            },
            "anchorRole": {
                "type": String,
                "attr": "anchor-role"
            },
            "anchorTabIndex": {
                "type": String,
                "attr": "anchor-tab-index"
            },
            "anchorTitle": {
                "type": String,
                "attr": "anchor-title"
            },
            "ariaHaspopup": {
                "type": String,
                "attr": "aria-haspopup"
            },
            "ariaLabel": {
                "type": String,
                "attr": "aria-label"
            },
            "ariaPosinset": {
                "type": String,
                "attr": "aria-posinset"
            },
            "ariaSetsize": {
                "type": Number,
                "attr": "aria-setsize"
            },
            "custom": {
                "type": String,
                "attr": "custom"
            },
            "el": {
                "elementRef": true
            },
            "exact": {
                "type": Boolean,
                "attr": "exact"
            },
            "history": {
                "type": "Any",
                "attr": "history"
            },
            "id": {
                "type": String,
                "attr": "id"
            },
            "location": {
                "type": "Any",
                "attr": "location",
                "watchCallbacks": ["computeMatch"]
            },
            "match": {
                "state": true
            },
            "root": {
                "type": String,
                "attr": "root"
            },
            "strict": {
                "type": Boolean,
                "attr": "strict"
            },
            "url": {
                "type": String,
                "attr": "url"
            },
            "urlMatch": {
                "type": String,
                "attr": "url-match"
            }
        };
    }
}
ActiveRouter.injectProps(RouteLink, [
    "history",
    "location",
    "root"
]);

class WuButton {
    constructor() {
        this.type = 'button';
        this.disabled = false;
    }
    onClick() {
    }
    render() {
        const TagType = this.href ? 'a' : 'button';
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { disabled: this.disabled, onClick: this.onClick.bind(this) }),
            h("slot", null)));
    }
    static get is() { return "wu-button"; }
    static get properties() { return {
        "button": {
            "elementRef": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return ":root{\n  --button-padding-x: 30px;\n  --button-padding-y: 10px;\n}\n\nwu-button {\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  background: white;\n  color: currentColor;\n  max-width: 100%;\n  display: inline-block;\n  margin: 5px;\n  transition: box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  -webkit-transition: -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in, -webkit-box-shadow var(--fast) ease-out, -webkit-filter var(--fast) ease-in;\n  transition: box-shadow var(--fast) ease-out, filter var(--fast) ease-in, -webkit-filter var(--fast) ease-in;\n  width: auto;\n  height: auto; }\n  wu-button[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n    wu-button[theme='primary'][outline] {\n      background: white;\n      border: 1px solid var(--color-primary);\n      color: currentColor; }\n  wu-button[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n    wu-button[theme='secondary'][outline] {\n      background: white;\n      border: 1px solid var(--color-secondary);\n      color: currentColor; }\n  wu-button[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n    wu-button[theme='success'][outline] {\n      background: white;\n      border: 1px solid var(--color-success);\n      color: currentColor; }\n  wu-button[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n    wu-button[theme='warning'][outline] {\n      background: white;\n      border: 1px solid var(--color-warning);\n      color: currentColor; }\n  wu-button[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n    wu-button[theme='danger'][outline] {\n      background: white;\n      border: 1px solid var(--color-danger);\n      color: currentColor; }\n  wu-button[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n    wu-button[theme='info'][outline] {\n      background: white;\n      border: 1px solid var(--color-info);\n      color: currentColor; }\n  wu-button[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n    wu-button[theme='light'][outline] {\n      background: white;\n      border: 1px solid var(--color-light);\n      color: currentColor; }\n  wu-button[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n    wu-button[theme='grey'][outline] {\n      background: white;\n      border: 1px solid var(--color-grey);\n      color: currentColor; }\n  wu-button[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n    wu-button[theme='dark'][outline] {\n      background: white;\n      border: 1px solid var(--color-dark);\n      color: currentColor; }\n  wu-button[outline] {\n    border: 1px solid currentColor; }\n  wu-button:hover, wu-button:focus {\n    -webkit-box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2), 0 10px 18px 0 rgba(0, 0, 0, 0.19);\n    -webkit-filter: brightness(105%);\n            filter: brightness(105%); }\n  wu-button button,\n  wu-button a {\n    cursor: pointer;\n    height: 100%;\n    padding: var(--button-padding-y) var(--button-padding-x);\n    text-decoration: none;\n    font-size: 16px;\n    font-size: 1rem;\n    line-height: 20px;\n    line-height: 1.25rem;\n    border: none;\n    display: block;\n    background: transparent;\n    color: currentColor;\n    text-align: center; }\n  wu-button[block] {\n    display: block; }\n    wu-button[block] button, wu-button[block] a {\n      width: 100%;\n      text-align: center;\n      padding-left: 0;\n      padding-right: 0; }\n  wu-button[flat] {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n    wu-button[flat]:hover {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n  wu-button[shape=\"circle\"] {\n    width: 3em;\n    height: 3em;\n    border-radius: 50%; }\n    wu-button[shape=\"circle\"] a, wu-button[shape=\"circle\"] button {\n      padding: 0;\n      width: 100%;\n      height: 3em;\n      line-height: 3em;\n      font-size: 1em;\n      text-align: center;\n      white-space: nowrap; }"; }
}

export { AppHome, RouteLink as StencilRouteLink, WuButton };
