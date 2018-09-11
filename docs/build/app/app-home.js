/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as matchPath, u as isModifiedEvent, c as ActiveRouter } from './chunk-f2159162.js';

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("p", null,
                "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on ",
                h("a", { href: 'https://stenciljs.com' }, "stenciljs.com"),
                " to get started."),
            h("stencil-route-link", { url: '/profile/stencil' },
                h("button", null, "Profile page"))));
    }
    static get is() { return "app-home"; }
    static get style() { return ".app-home {\n  padding: 10px;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  box-shadow: 0 8px 16px rgba(0,0,0,.1), 0 3px 6px rgba(0,0,0,.08);\n  outline: 0;\n  letter-spacing: .04em;\n  -webkit-transition: all .15s ease;\n  transition: all .15s ease;\n  cursor: pointer;\n}\n  \nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  box-shadow: 0 3px 6px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
}

/**
  * @name Route
  * @module ionic
  * @description
 */
class RouteLink {
    constructor() {
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
         *  Custom tag to use instead of an anchor
         */
        this.custom = 'a';
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
        if (url.charAt(0) == '/' && this.root.charAt(this.root.length - 1) == '/') {
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
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes),
            h("slot", null)));
    }
    static get is() { return "stencil-route-link"; }
    static get properties() { return {
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
    }; }
}
ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);

export { AppHome, RouteLink as StencilRouteLink };
