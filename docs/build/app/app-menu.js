/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as matchPath, d as matchesAreEqual, c as ActiveRouter, e as storageAvailable, f as createLocation, g as addLeadingSlash, h as stripTrailingSlash, i as hasBasename, j as stripBasename, k as createPath, l as canUseDOM, m as addEventListener, n as removeEventListener, o as getConfirmation, p as supportsHistory, q as supportsPopStateOnHashChange, r as isExtraneousPopstateEvent, s as locationsAreEqual, t as stripLeadingSlash, u as supportsGoWithoutReloadUsingHash } from './chunk-8aa89ec5.js';
import './chunk-f5f83825.js';

class AppMenu {
    render() {
        return [
            h("wu-burger", { theme: "primary", target: "#menu" }),
            h("wu-drawer-menu", null)
        ];
    }
    static get is() { return "app-menu"; }
}

class AppRoot {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Stencil App Starter")),
            h("app-menu", null),
            h("main", null,
                h("stencil-router", null,
                    h("stencil-route-switch", { scrollTopOffset: 0 },
                        h("stencil-route", { url: '/', component: 'app-home', exact: true }),
                        h("stencil-route", { url: '/profile/:name', component: 'app-profile' }))))));
    }
    static get is() { return "app-root"; }
    static get style() { return "header {\n  background: #5851ff;\n  color: white;\n  height: 56px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\nh1 {\n  font-size: 1.4rem;\n  font-weight: 500;\n  color: #fff;\n  padding: 0 12px;\n}"; }
}

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
  * @name Route
  * @module ionic
  * @description
 */
class Route {
    constructor() {
        this.group = null;
        this.groupMatch = null;
        this.componentUpdated = null;
        this.match = null;
        this.unsubscribe = () => { return; };
        this.componentProps = {};
        this.exact = false;
        this.routeRender = null;
        this.scrollTopOffset = null;
        this.scrollOnNextRender = false;
        this.previousMatch = null;
    }
    // Identify if the current route is a match.
    computeMatch() {
        this.previousMatch = this.match;
        if (!this.group) {
            return this.match = matchPath(this.location.pathname, {
                path: this.url,
                exact: this.exact,
                strict: true
            });
        }
    }
    componentDidUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            // Wait for all children to complete rendering before calling componentUpdated
            yield Promise.all(Array.from(this.el.children).map((element) => {
                if (element.componentOnReady) {
                    return element.componentOnReady();
                }
                return Promise.resolve(element);
            }));
            // After all children have completed then tell switch
            // the provided callback will get executed after this route is in view
            if (typeof this.componentUpdated === "function") {
                this.componentUpdated({
                    scrollTopOffset: this.scrollTopOffset
                });
                // If this is an independent route and it matches then routes have updated.
                // If the only change to location is a hash change then do not scroll.
            }
            else if (this.match && !matchesAreEqual(this.match, this.previousMatch)) {
                this.routeViewsUpdated({
                    scrollTopOffset: this.scrollTopOffset
                });
            }
        });
    }
    render() {
        // If there is no activeRouter then do not render
        // Check if this route is in the matching URL (for example, a parent route)
        if (!this.match && !this.groupMatch) {
            return null;
        }
        // component props defined in route
        // the history api
        // current match data including params
        const childProps = Object.assign({}, this.componentProps, { history: this.history, match: this.match || this.groupMatch });
        // If there is a routerRender defined then use
        // that and pass the component and component props with it.
        if (this.routeRender) {
            return this.routeRender(Object.assign({}, childProps, { component: this.component }));
        }
        if (this.component) {
            const ChildComponent = this.component;
            return (h(ChildComponent, Object.assign({}, childProps)));
        }
    }
    static get is() { return "stencil-route"; }
    static get properties() {
        return {
            "component": {
                "type": String,
                "attr": "component"
            },
            "componentProps": {
                "type": "Any",
                "attr": "component-props"
            },
            "componentUpdated": {
                "type": "Any",
                "attr": "component-updated"
            },
            "el": {
                "elementRef": true
            },
            "exact": {
                "type": Boolean,
                "attr": "exact"
            },
            "group": {
                "type": String,
                "attr": "group"
            },
            "groupMatch": {
                "type": "Any",
                "attr": "group-match"
            },
            "history": {
                "type": "Any",
                "attr": "history"
            },
            "historyType": {
                "type": String,
                "attr": "history-type"
            },
            "location": {
                "type": "Any",
                "attr": "location",
                "watchCallbacks": ["computeMatch"]
            },
            "match": {
                "state": true
            },
            "routeRender": {
                "type": "Any",
                "attr": "route-render"
            },
            "routeViewsUpdated": {
                "type": "Any",
                "attr": "route-views-updated"
            },
            "scrollTopOffset": {
                "type": Number,
                "attr": "scroll-top-offset"
            },
            "url": {
                "type": String,
                "attr": "url"
            }
        };
    }
    static get style() { return "stencil-route.inactive {\n  display: none;\n}"; }
}
ActiveRouter.injectProps(Route, [
    "location",
    "history",
    "historyType",
    "routeViewsUpdated"
]);

function uuidv4 () {
    return ([1e7].toString() + -1e3.toString() + -4e3.toString() + -8e3.toString() + -1e11.toString()).replace(/[018]/g, function (c) {
        const random = window.crypto.getRandomValues(new Uint8Array(1));
        return (c ^ random[0] & 15 >> c / 4).toString(16);
    });
}

var __awaiter$1 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getUniqueId() {
    if (window.crypto) {
        return uuidv4();
    }
    return (Math.random() * 100000000000000000).toString().match(/.{4}/g).join("-");
}
function getMatch(pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
}
class RouteSwitch {
    constructor() {
        this.group = getUniqueId();
        this.scrollTopOffset = null;
        this.activeIndex = null;
    }
    componentWillLoad() {
        this.regenerateSubscribers(this.location);
    }
    regenerateSubscribers(newLocation) {
        return __awaiter$1(this, void 0, void 0, function* () {
            let newActiveIndex = null;
            this.subscribers = Array.from(this.el.children)
                .map((childElement, index) => {
                const match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                if (match && newActiveIndex === null) {
                    newActiveIndex = index;
                }
                return {
                    el: childElement,
                    match: match
                };
            });
            // Check if this actually changes which child is active
            // then just pass the new match down if the active route isn't changing.
            if (this.activeIndex === newActiveIndex) {
                this.subscribers[this.activeIndex].el.groupMatch = this.subscribers[this.activeIndex].match;
                return;
            }
            this.activeIndex = newActiveIndex;
            // Set all props on the new active route then wait until it says that it
            // is completed
            const activeChild = this.subscribers[this.activeIndex];
            activeChild.el.scrollTopOffset = this.scrollTopOffset;
            activeChild.el.group = this.group;
            activeChild.el.groupMatch = activeChild.match;
            activeChild.el.componentUpdated = (routeViewUpdatedOptions) => {
                // After the new active route has completed then update visibility of routes
                this.queue.write(() => {
                    this.subscribers.forEach((child, index) => {
                        child.el.componentUpdated = null;
                        if (index === this.activeIndex) {
                            return child.el.style.display = null;
                        }
                        child.el.scrollTopOffset = this.scrollTopOffset;
                        child.el.group = this.group;
                        child.el.groupMatch = null;
                        child.el.style.display = "none";
                    });
                });
                this.routeViewsUpdated(Object.assign({ scrollTopOffset: this.scrollTopOffset }, routeViewUpdatedOptions));
            };
        });
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "stencil-route-switch"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "group": {
                "type": String,
                "attr": "group",
                "reflectToAttr": true
            },
            "location": {
                "type": "Any",
                "attr": "location",
                "watchCallbacks": ["regenerateSubscribers"]
            },
            "queue": {
                "context": "queue"
            },
            "routeViewsUpdated": {
                "type": "Any",
                "attr": "route-views-updated"
            },
            "scrollTopOffset": {
                "type": Number,
                "attr": "scroll-top-offset"
            }
        };
    }
}
ActiveRouter.injectProps(RouteSwitch, [
    "location",
    "routeViewsUpdated"
]);

function invariant(value, ...args) {
    if (!value) {
        console.error(...args);
    }
}
function warning(value, ...args) {
    if (!value) {
        console.warn(...args);
    }
}

// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
const createTransitionManager = () => {
    let prompt;
    const setPrompt = (nextPrompt) => {
        warning(prompt == null, 'A history supports only one prompt at a time');
        prompt = nextPrompt;
        return () => {
            if (prompt === nextPrompt) {
                prompt = null;
            }
        };
    };
    const confirmTransitionTo = (location, action, getUserConfirmation, callback) => {
        // TODO: If another transition starts while we're still confirming
        // the previous one, we may end up in a weird state. Figure out the
        // best way to handle this.
        if (prompt != null) {
            const result = typeof prompt === 'function' ? prompt(location, action) : prompt;
            if (typeof result === 'string') {
                if (typeof getUserConfirmation === 'function') {
                    getUserConfirmation(result, callback);
                }
                else {
                    warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
                    callback(true);
                }
            }
            else {
                // Return false from a transition hook to cancel the transition.
                callback(result !== false);
            }
        }
        else {
            callback(true);
        }
    };
    let listeners = [];
    const appendListener = (fn) => {
        let isActive = true;
        const listener = (...args) => {
            if (isActive) {
                fn(...args);
            }
        };
        listeners.push(listener);
        return () => {
            isActive = false;
            listeners = listeners.filter(item => item !== listener);
        };
    };
    const notifyListeners = (...args) => {
        listeners.forEach(listener => listener(...args));
    };
    return {
        setPrompt,
        confirmTransitionTo,
        appendListener,
        notifyListeners
    };
};

const createScrollHistory = (applicationScrollKey = 'scrollPositions') => {
    let scrollPositions = new Map();
    if (storageAvailable('sessionStorage')) {
        scrollPositions = window.sessionStorage.getItem(applicationScrollKey) ?
            new Map(JSON.parse(window.sessionStorage.getItem(applicationScrollKey))) :
            scrollPositions;
    }
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    function set(key, value) {
        scrollPositions.set(key, value);
        if (storageAvailable('sessionStorage')) {
            const arrayData = [];
            scrollPositions.forEach((value, key) => {
                arrayData.push([key, value]);
            });
            window.sessionStorage.setItem('scrollPositions', JSON.stringify(arrayData));
        }
    }
    function get(key) {
        return scrollPositions.get(key);
    }
    function has(key) {
        return scrollPositions.has(key);
    }
    function capture(key) {
        set(key, [window.scrollX, window.scrollY]);
    }
    return {
        set,
        get,
        has,
        capture
    };
};

// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
const PopStateEvent = 'popstate';
const HashChangeEvent = 'hashchange';
const getHistoryState = () => {
    try {
        return window.history.state || {};
    }
    catch (e) {
        // IE 11 sometimes throws when accessing window.history.state
        // See https://github.com/ReactTraining/history/pull/289
        return {};
    }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
const createBrowserHistory = (props = {}) => {
    invariant(canUseDOM, 'Browser history needs a DOM');
    const globalHistory = window.history;
    const canUseHistory = supportsHistory();
    const needsHashChangeListener = !supportsPopStateOnHashChange();
    const scrollHistory = createScrollHistory();
    const forceRefresh = (props.forceRefresh != null) ? props.forceRefresh : false;
    const getUserConfirmation = (props.getUserConfirmation != null) ? props.getUserConfirmation : getConfirmation;
    const keyLength = (props.keyLength != null) ? props.keyLength : 6;
    const basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    const getDOMLocation = (historyState) => {
        historyState = historyState || {};
        const { key, state } = historyState;
        const { pathname, search, hash } = window.location;
        let path = pathname + search + hash;
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path, state, key);
    };
    const createKey = () => (Math.random().toString(36).substr(2, keyLength));
    const transitionManager = createTransitionManager();
    const setState = (nextState) => {
        // Capture location for the view before changing history.
        scrollHistory.capture(history.location.key);
        Object.assign(history, nextState);
        // Set scroll position based on its previous storage value
        history.location.scrollPosition = scrollHistory.get(history.location.key);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    const handlePopState = (event) => {
        // Ignore extraneous popstate events in WebKit.
        if (isExtraneousPopstateEvent(event)) {
            return;
        }
        handlePop(getDOMLocation(event.state));
    };
    const handleHashChange = () => {
        handlePop(getDOMLocation(getHistoryState()));
    };
    let forceNextPop = false;
    const handlePop = (location) => {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            const action = 'POP';
            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
                if (ok) {
                    setState({ action, location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    const revertPop = (fromLocation) => {
        const toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of keys we've seen in sessionStorage.
        // Instead, we just default to 0 for keys we don't know.
        let toIndex = allKeys.indexOf(toLocation.key);
        if (toIndex === -1) {
            toIndex = 0;
        }
        let fromIndex = allKeys.indexOf(fromLocation.key);
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        const delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    const initialLocation = getDOMLocation(getHistoryState());
    let allKeys = [initialLocation.key];
    // Public interface
    const createHref = (location) => {
        return basename + createPath(location);
    };
    const push = (path, state) => {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        const action = 'PUSH';
        const location = createLocation(path, state, createKey(), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
            if (!ok) {
                return;
            }
            const href = createHref(location);
            const { key, state } = location;
            if (canUseHistory) {
                globalHistory.pushState({ key, state }, null, href);
                if (forceRefresh) {
                    window.location.href = href;
                }
                else {
                    const prevIndex = allKeys.indexOf(history.location.key);
                    const nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                    nextKeys.push(location.key);
                    allKeys = nextKeys;
                    setState({ action, location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
                window.location.href = href;
            }
        });
    };
    const replace = (path, state) => {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        const action = 'REPLACE';
        const location = createLocation(path, state, createKey(), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
            if (!ok) {
                return;
            }
            const href = createHref(location);
            const { key, state } = location;
            if (canUseHistory) {
                globalHistory.replaceState({ key, state }, null, href);
                if (forceRefresh) {
                    window.location.replace(href);
                }
                else {
                    const prevIndex = allKeys.indexOf(history.location.key);
                    if (prevIndex !== -1) {
                        allKeys[prevIndex] = location.key;
                    }
                    setState({ action, location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
                window.location.replace(href);
            }
        });
    };
    const go = (n) => {
        globalHistory.go(n);
    };
    const goBack = () => go(-1);
    const goForward = () => go(1);
    let listenerCount = 0;
    const checkDOMListeners = (delta) => {
        listenerCount += delta;
        if (listenerCount === 1) {
            addEventListener(window, PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                addEventListener(window, HashChangeEvent, handleHashChange);
            }
        }
        else if (listenerCount === 0) {
            removeEventListener(window, PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                removeEventListener(window, HashChangeEvent, handleHashChange);
            }
        }
    };
    let isBlocked = false;
    const block = (prompt = '') => {
        const unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(1);
            isBlocked = true;
        }
        return () => {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
            }
            return unblock();
        };
    };
    const listen = (listener) => {
        const unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(1);
        return () => {
            checkDOMListeners(-1);
            unlisten();
        };
    };
    const history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref,
        push,
        replace,
        go,
        goBack,
        goForward,
        block,
        listen
    };
    return history;
};

// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
const HashChangeEvent$1 = 'hashchange';
const HashPathCoders = {
    hashbang: {
        encodePath: (path) => path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path),
        decodePath: (path) => path.charAt(0) === '!' ? path.substr(1) : path
    },
    noslash: {
        encodePath: stripLeadingSlash,
        decodePath: addLeadingSlash
    },
    slash: {
        encodePath: addLeadingSlash,
        decodePath: addLeadingSlash
    }
};
const getHashPath = () => {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    const href = window.location.href;
    const hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};
const pushHashPath = (path) => (window.location.hash = path);
const replaceHashPath = (path) => {
    const hashIndex = window.location.href.indexOf('#');
    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};
const createHashHistory = (props = {}) => {
    invariant(canUseDOM, 'Hash history needs a DOM');
    const globalHistory = window.history;
    const canGoWithoutReload = supportsGoWithoutReloadUsingHash();
    const { getUserConfirmation = getConfirmation, hashType = 'slash' } = props;
    const basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    const { encodePath, decodePath } = HashPathCoders[hashType];
    const getDOMLocation = () => {
        let path = decodePath(getHashPath());
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path);
    };
    const transitionManager = createTransitionManager();
    const setState = (nextState) => {
        Object.assign(history, nextState);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    let forceNextPop = false;
    let ignorePath = null;
    const handleHashChange = () => {
        const path = getHashPath();
        const encodedPath = encodePath(path);
        if (path !== encodedPath) {
            // Ensure we always have a properly-encoded hash.
            replaceHashPath(encodedPath);
        }
        else {
            const location = getDOMLocation();
            const prevLocation = history.location;
            if (!forceNextPop && locationsAreEqual(prevLocation, location)) {
                return; // A hashchange doesn't always == location change.
            }
            if (ignorePath === createPath(location)) {
                return; // Ignore this change; we already setState in push/replace.
            }
            ignorePath = null;
            handlePop(location);
        }
    };
    const handlePop = (location) => {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            const action = 'POP';
            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
                if (ok) {
                    setState({ action, location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    const revertPop = (fromLocation) => {
        const toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of paths we've seen in sessionStorage.
        // Instead, we just default to 0 for paths we don't know.
        let toIndex = allPaths.lastIndexOf(createPath(toLocation));
        if (toIndex === -1) {
            toIndex = 0;
        }
        let fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        const delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    // Ensure the hash is encoded properly before doing anything else.
    const path = getHashPath();
    const encodedPath = encodePath(path);
    if (path !== encodedPath) {
        replaceHashPath(encodedPath);
    }
    const initialLocation = getDOMLocation();
    let allPaths = [createPath(initialLocation)];
    // Public interface
    const createHref = (location) => ('#' + encodePath(basename + createPath(location)));
    const push = (path, state) => {
        warning(state === undefined, 'Hash history cannot push state; it is ignored');
        const action = 'PUSH';
        const location = createLocation(path, undefined, undefined, history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
            if (!ok) {
                return;
            }
            const path = createPath(location);
            const encodedPath = encodePath(basename + path);
            const hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a PUSH, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                pushHashPath(encodedPath);
                const prevIndex = allPaths.lastIndexOf(createPath(history.location));
                const nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                nextPaths.push(path);
                allPaths = nextPaths;
                setState({ action, location });
            }
            else {
                warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
                setState();
            }
        });
    };
    const replace = (path, state) => {
        warning(state === undefined, 'Hash history cannot replace state; it is ignored');
        const action = 'REPLACE';
        const location = createLocation(path, undefined, undefined, history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, (ok) => {
            if (!ok) {
                return;
            }
            const path = createPath(location);
            const encodedPath = encodePath(basename + path);
            const hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                replaceHashPath(encodedPath);
            }
            const prevIndex = allPaths.indexOf(createPath(history.location));
            if (prevIndex !== -1) {
                allPaths[prevIndex] = path;
            }
            setState({ action, location });
        });
    };
    const go = (n) => {
        warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
        globalHistory.go(n);
    };
    const goBack = () => go(-1);
    const goForward = () => go(1);
    let listenerCount = 0;
    const checkDOMListeners = (delta) => {
        listenerCount += delta;
        if (listenerCount === 1) {
            addEventListener(window, HashChangeEvent$1, handleHashChange);
        }
        else if (listenerCount === 0) {
            removeEventListener(window, HashChangeEvent$1, handleHashChange);
        }
    };
    let isBlocked = false;
    const block = (prompt = '') => {
        const unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(1);
            isBlocked = true;
        }
        return () => {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
            }
            return unblock();
        };
    };
    const listen = (listener) => {
        const unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(1);
        return () => {
            checkDOMListeners(-1);
            unlisten();
        };
    };
    const history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref,
        push,
        replace,
        go,
        goBack,
        goForward,
        block,
        listen
    };
    return history;
};

var __awaiter$2 = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const HISTORIES = {
    "browser": createBrowserHistory,
    "hash": createHashHistory
};
/**
  * @name Router
  * @module ionic
  * @description
 */
class Router {
    constructor() {
        this.root = "/";
        this.historyType = "browser";
        // A suffix to append to the page title whenever
        // it's updated through RouteTitle
        this.titleSuffix = "";
        this.scrollTopOffset = null;
        this.routeViewsUpdated = (options = {}) => {
            this.scrollTo(options.scrollTopOffset || this.scrollTopOffset);
        };
    }
    componentWillLoad() {
        this.history = HISTORIES[this.historyType]();
        this.history.listen((location) => __awaiter$2(this, void 0, void 0, function* () {
            location = this.getLocation(location);
            this.location = location;
        }));
        this.location = this.getLocation(this.history.location);
    }
    scrollTo(scrollToLocation) {
        if (scrollToLocation == null || this.isServer || !this.history) {
            return;
        }
        if (this.history.action === "POP" && this.history.location.scrollPosition != null) {
            return this.queue.write(() => {
                window.scrollTo(this.history.location.scrollPosition[0], this.history.location.scrollPosition[1]);
            });
        }
        // okay, the frame has passed. Go ahead and render now
        return this.queue.write(() => {
            window.scrollTo(0, scrollToLocation);
        });
    }
    getLocation(location) {
        // Remove the root URL if found at beginning of string
        const pathname = location.pathname.indexOf(this.root) == 0 ?
            "/" + location.pathname.slice(this.root.length) :
            location.pathname;
        return Object.assign({}, location, { pathname });
    }
    render() {
        const state = {
            historyType: this.historyType,
            location: this.location,
            titleSuffix: this.titleSuffix,
            root: this.root,
            history: this.history,
            routeViewsUpdated: this.routeViewsUpdated
        };
        return (h(ActiveRouter.Provider, { state: state }, h("slot", null)));
    }
    static get is() { return "stencil-router"; }
    static get properties() {
        return {
            "history": {
                "state": true
            },
            "historyType": {
                "type": String,
                "attr": "history-type"
            },
            "isServer": {
                "context": "isServer"
            },
            "location": {
                "state": true
            },
            "queue": {
                "context": "queue"
            },
            "root": {
                "type": String,
                "attr": "root"
            },
            "scrollTopOffset": {
                "type": Number,
                "attr": "scroll-top-offset"
            },
            "titleSuffix": {
                "type": String,
                "attr": "title-suffix"
            }
        };
    }
}

class WuBurger {
    constructor() {
        this.animation = 'middle-out';
    }
    toggle() {
        let menu = document.querySelector(this.target);
        if (this.burger.classList.contains('open')) {
            // close menu
            this.burger.classList.remove('open');
            if (menu) {
                menu.classList.remove('open');
            }
        }
        else {
            // open menu
            this.burger.classList.add('open');
            if (menu) {
                menu.classList.add('open');
                menu.focus();
            }
        }
    }
    render() {
        return (h("button", { type: "button", onClick: () => this.toggle(), class: this.animation },
            h("span", null),
            h("span", null),
            h("span", null)));
    }
    static get is() { return "wu-burger"; }
    static get properties() { return {
        "animation": {
            "type": String,
            "attr": "animation"
        },
        "burger": {
            "elementRef": true
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        }
    }; }
    static get style() { return ":root{\n  --wu-burger-size: 2.25em;\n  --wu-burger-thickness: 0.25em;\n  --wu-burger-color: currentColor;\n}\n\nwu-burger {\n  font-size: 18px;\n  font-size: 1.125rem; }\n  wu-burger[theme='primary'] {\n    color: var(--color-primary); }\n  wu-burger[theme='secondary'] {\n    color: var(--color-secondary); }\n  wu-burger[theme='success'] {\n    color: var(--color-success); }\n  wu-burger[theme='warning'] {\n    color: var(--color-warning); }\n  wu-burger[theme='danger'] {\n    color: var(--color-danger); }\n  wu-burger[theme='info'] {\n    color: var(--color-info); }\n  wu-burger[theme='light'] {\n    color: var(--color-light); }\n  wu-burger[theme='grey'] {\n    color: var(--color-grey); }\n  wu-burger[theme='dark'] {\n    color: var(--color-dark); }\n  wu-burger button {\n    font-size: 1em;\n    color: currentColor;\n    position: relative;\n    width: var(--wu-burger-size);\n    height: var(--wu-burger-size);\n    cursor: pointer;\n    background: none;\n    border: none;\n    display: inline-block;\n    padding: var(--wu-burger-thickness) 0;\n    /* Animations */ }\n    wu-burger button:focus {\n      outline: none; }\n    wu-burger button span {\n      display: block;\n      left: calc(1 / 6 * var(--wu-burger-size));\n      width: calc(2 / 3 * var(--wu-burger-size));\n      height: var(--wu-burger-thickness);\n      border-radius: var(--wu-burger-thickness);\n      background: var(--wu-burger-color);\n      position: absolute;\n      -webkit-transition: var(--fast) ease-in-out;\n      transition: var(--fast) ease-in-out; }\n      wu-burger button span:nth-child(1) {\n        top: calc(2 * var(--wu-burger-thickness)); }\n      wu-burger button span:nth-child(2) {\n        top: calc(4 * var(--wu-burger-thickness)); }\n      wu-burger button span:nth-child(3) {\n        top: calc(6 * var(--wu-burger-thickness)); }\n    wu-burger button.middle-out span {\n      transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast);\n      transition: transform var(--fast), top var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast); }\n    wu-burger button.rotate span {\n      transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      -webkit-transition: top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2);\n      transition: transform var(--fast), top var(--fast), opacity calc(var(--fast) / 2), -webkit-transform var(--fast); }\n  wu-burger.open button {\n    /* Animations */ }\n    wu-burger.open button.middle-out span {\n      transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      -webkit-transition: top var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast);\n      transition: top var(--fast), transform var(--fast) var(--fast), opacity var(--fast), -webkit-transform var(--fast) var(--fast); }\n      wu-burger.open button.middle-out span:nth-child(1) {\n        top: calc(4 * var(--wu-burger-thickness));\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      wu-burger.open button.middle-out span:nth-child(2) {\n        opacity: 0; }\n      wu-burger.open button.middle-out span:nth-child(3) {\n        top: calc(4 * var(--wu-burger-thickness));\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n    wu-burger.open button.spin-out span:nth-child(1) {\n      top: calc(4 * var(--wu-burger-thickness));\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg); }\n    wu-burger.open button.spin-out span:nth-child(2) {\n      opacity: 0;\n      -webkit-transform: translateX(20px);\n              transform: translateX(20px); }\n    wu-burger.open button.spin-out span:nth-child(3) {\n      top: calc(4 * var(--wu-burger-thickness));\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg); }\n    wu-burger.open button.rotate span:nth-child(1) {\n      -webkit-transform: rotate(-135deg);\n              transform: rotate(-135deg);\n      top: calc(4 * var(--wu-burger-thickness)); }\n    wu-burger.open button.rotate span:nth-child(2) {\n      opacity: 0; }\n    wu-burger.open button.rotate span:nth-child(3) {\n      -webkit-transform: rotate(135deg);\n              transform: rotate(135deg);\n      top: calc(4 * var(--wu-burger-thickness)); }"; }
}

class WuDrawerMenu {
    constructor() {
        this.items = { "home": {
                "label": 'Home'
            } };
        this.closeMenu = this.closeMenu.bind(this);
    }
    componentDidLoad() {
        if (typeof this.items === 'string') {
            this.items = JSON.parse(this.items);
        }
        this.el.tabIndex = -1;
        document.addEventListener('keyup', e => {
            if (e.keyCode === 27) {
                this.closeMenu();
            }
        });
        const focusable = this.el.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length) {
            const lastChild = focusable[focusable.length - 1];
            const firstChild = focusable[0];
            lastChild.addEventListener('blur', () => {
                firstChild.focus();
            });
        }
    }
    closeMenu() {
        this.el.classList.remove('open');
        const triggers = document.querySelectorAll('wu-burger');
        for (let i = 0; i < triggers.length; i++) {
            triggers[i].classList.remove('open');
        }
    }
    render() {
        return [
            h("nav", { class: "side-menu" },
                h("slot", null)),
            h("div", { class: "side-menu-overlay", onClick: () => this.closeMenu() })
        ];
    }
    static get is() { return "wu-drawer-menu"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "items": {
            "type": "Any",
            "attr": "items"
        },
        "position": {
            "type": String,
            "attr": "position"
        },
        "theme": {
            "type": String,
            "attr": "theme"
        }
    }; }
    static get style() { return ":root{ \n  --wu-drawer-menu-overlay-color: rgba(0,0,0,0.4)\n}\n\nwu-drawer-menu.open .side-menu {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\nwu-drawer-menu.open .side-menu-overlay {\n  opacity: 1;\n  z-index: 9; }\n\nwu-drawer-menu .side-menu {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  position: fixed;\n  z-index: 9999;\n  width: 280px;\n  height: 100vh;\n  opacity: 0;\n  background: white;\n  color: currentColor;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  transition: opacity var(--fast), -webkit-transform var(--fast);\n  -webkit-transition: opacity var(--fast), -webkit-transform var(--fast);\n  transition: transform var(--fast), opacity var(--fast);\n  transition: transform var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n  top: 0;\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  wu-drawer-menu .side-menu[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-drawer-menu .side-menu[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-drawer-menu .side-menu[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-drawer-menu .side-menu[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-drawer-menu .side-menu[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-drawer-menu .side-menu[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-drawer-menu .side-menu[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-drawer-menu .side-menu[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-drawer-menu .side-menu[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-drawer-menu .side-menu wu-menu-list {\n    overflow: auto; }\n  wu-drawer-menu .side-menu wu-divider {\n    --wu-divider-spacing: 5px; }\n  wu-drawer-menu .side-menu wu-menu-sub-heading {\n    display: block;\n    color: #999;\n    padding: 10px;\n    font-size: 14px;\n    font-size: 0.875rem; }\n\nwu-drawer-menu[position='left'] .side-menu {\n  right: auto; }\n\nwu-drawer-menu[position='right'] .side-menu {\n  left: auto;\n  right: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\nwu-drawer-menu .side-menu-overlay {\n  background: var(--wu-drawer-menu-overlay-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  width: 100vw;\n  height: 100%;\n  height: 100vh;\n  opacity: 0;\n  z-index: -1;\n  -webkit-transition: opacity var(--fast);\n  transition: opacity var(--fast); }"; }
}

export { AppMenu, AppRoot, Route as StencilRoute, RouteSwitch as StencilRouteSwitch, Router as StencilRouter, WuBurger, WuDrawerMenu };
