/*! Built with http://stenciljs.com */
const { h } = window.App;

/**
 * TS adaption of https://github.com/pillarjs/path-to-regexp/blob/master/index.js
 */
/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 */
var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = '';
            pathEscaped = false;
        }
        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) {
        tokens.push(path + str.substr(index));
    }
    return tokens;
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 */
function escapeGroup(group) {
    return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                pattern: null
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(path, keys, options) {
    var parts = [];
    for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
    }
    return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegExp(tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = '';
    var isEndDelimited = false;
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        }
        else {
            var prefix = escapeString(token.prefix);
            var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (token.partial) {
                    route += prefix + '(' + capture + ')?';
                }
                else {
                    route += '(?:' + prefix + '(' + capture + '))?';
                }
            }
            else {
                route += prefix + '(' + capture + ')';
            }
        }
    }
    if (end) {
        if (!strict)
            route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    }
    else {
        if (!strict)
            route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited)
            route += '(?=' + delimiter + '|' + endsWith + ')';
    }
    return new RegExp('^' + route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(path, keys, options);
    }
    return stringToRegexp(path, keys, options);
}

function hasBasename(path, prefix) {
    return (new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i')).test(path);
}
function stripBasename(path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
}
function parsePath(path) {
    let pathname = path || '/';
    let search = '';
    let hash = '';
    const hashIndex = pathname.indexOf('#');
    if (hashIndex !== -1) {
        hash = pathname.substr(hashIndex);
        pathname = pathname.substr(0, hashIndex);
    }
    const searchIndex = pathname.indexOf('?');
    if (searchIndex !== -1) {
        search = pathname.substr(searchIndex);
        pathname = pathname.substr(0, searchIndex);
    }
    return {
        pathname,
        search: search === '?' ? '' : search,
        hash: hash === '#' ? '' : hash
    };
}
function createPath(location) {
    const { pathname, search, hash } = location;
    let path = pathname || '/';
    if (search && search !== '?') {
        path += (search.charAt(0) === '?' ? search : `?${search}`);
    }
    if (hash && hash !== '#') {
        path += (hash.charAt(0) === '#' ? hash : `#${hash}`);
    }
    return path;
}
function parseQueryString(query) {
    if (!query) {
        return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce((params, param) => {
        let [key, value] = param.split('=');
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
    }, {});
}

function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
}
// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
    for (let i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
        list[i] = list[k];
    }
    list.pop();
}
// This implementation is based heavily on node's url.parse
function resolvePathname(to, from = '') {
    const toParts = to && to.split('/') || [];
    let fromParts = from && from.split('/') || [];
    const isToAbs = to && isAbsolute(to);
    const isFromAbs = from && isAbsolute(from);
    const mustEndAbs = isToAbs || isFromAbs;
    if (to && isAbsolute(to)) {
        // to is absolute
        fromParts = toParts;
    }
    else if (toParts.length) {
        // to is relative, drop the filename
        fromParts.pop();
        fromParts = fromParts.concat(toParts);
    }
    if (!fromParts.length) {
        return '/';
    }
    let hasTrailingSlash;
    if (fromParts.length) {
        const last = fromParts[fromParts.length - 1];
        hasTrailingSlash = (last === '.' || last === '..' || last === '');
    }
    else {
        hasTrailingSlash = false;
    }
    let up = 0;
    for (let i = fromParts.length; i >= 0; i--) {
        const part = fromParts[i];
        if (part === '.') {
            spliceOne(fromParts, i);
        }
        else if (part === '..') {
            spliceOne(fromParts, i);
            up++;
        }
        else if (up) {
            spliceOne(fromParts, i);
            up--;
        }
    }
    if (!mustEndAbs) {
        for (; up--; up) {
            fromParts.unshift('..');
        }
    }
    if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) {
        fromParts.unshift('');
    }
    let result = fromParts.join('/');
    if (hasTrailingSlash && result.substr(-1) !== '/') {
        result += '/';
    }
    return result;
}
function valueEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    if (Array.isArray(a)) {
        return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
            return valueEqual(item, b[index]);
        });
    }
    const aType = typeof a;
    const bType = typeof b;
    if (aType !== bType) {
        return false;
    }
    if (aType === 'object') {
        const aValue = a.valueOf();
        const bValue = b.valueOf();
        if (aValue !== a || bValue !== b) {
            return valueEqual(aValue, bValue);
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        return aKeys.every(function (key) {
            return valueEqual(a[key], b[key]);
        });
    }
    return false;
}
function locationsAreEqual(a, b) {
    return a.pathname === b.pathname &&
        a.search === b.search &&
        a.hash === b.hash &&
        a.key === b.key &&
        valueEqual(a.state, b.state);
}
function createLocation(path, state, key, currentLocation) {
    let location;
    if (typeof path === 'string') {
        // Two-arg form: push(path, state)
        location = parsePath(path);
        location.state = state;
    }
    else {
        // One-arg form: push(location)
        location = Object.assign({}, path);
        if (location.pathname === undefined) {
            location.pathname = '';
        }
        if (location.search) {
            if (location.search.charAt(0) !== '?') {
                location.search = '?' + location.search;
            }
        }
        else {
            location.search = '';
        }
        if (location.hash) {
            if (location.hash.charAt(0) !== '#') {
                location.hash = '#' + location.hash;
            }
        }
        else {
            location.hash = '';
        }
        if (state !== undefined && location.state === undefined) {
            location.state = state;
        }
    }
    try {
        location.pathname = decodeURI(location.pathname);
    }
    catch (e) {
        if (e instanceof URIError) {
            throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' +
                'This is likely caused by an invalid percent-encoding.');
        }
        else {
            throw e;
        }
    }
    if (key) {
        location.key = key;
    }
    if (currentLocation) {
        // Resolve incomplete/relative pathname relative to current location.
        if (!location.pathname) {
            location.pathname = currentLocation.pathname;
        }
        else if (location.pathname.charAt(0) !== '/') {
            location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
        }
    }
    else {
        // When there is no prior location and pathname is empty, set it to /
        if (!location.pathname) {
            location.pathname = '/';
        }
    }
    location.query = parseQueryString(location.search);
    return location;
}

const patternCache = {};
const cacheLimit = 10000;
let cacheCount = 0;
// Memoized function for creating the path match regex
function compilePath(pattern, options) {
    const cacheKey = `${options.end}${options.strict}`;
    const cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    const cachePattern = JSON.stringify(pattern);
    if (cache[cachePattern]) {
        return cache[cachePattern];
    }
    const keys = [];
    const re = pathToRegexp(pattern, keys, options);
    const compiledPattern = { re, keys };
    if (cacheCount < cacheLimit) {
        cache[cachePattern] = compiledPattern;
        cacheCount += 1;
    }
    return compiledPattern;
}
/**
 * Public API for matching a URL pathname to a path pattern.
 */
function matchPath(pathname, options = {}) {
    if (typeof options === 'string') {
        options = { path: options };
    }
    const { path = '/', exact = false, strict = false } = options;
    const { re, keys } = compilePath(path, { end: exact, strict });
    const match = re.exec(pathname);
    if (!match) {
        return null;
    }
    const [url, ...values] = match;
    const isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        path,
        url: path === '/' && url === '' ? '/' : url,
        isExact,
        params: keys.reduce((memo, key, index) => {
            memo[key.name] = values[index];
            return memo;
        }, {})
    };
}
function matchesAreEqual(a, b) {
    if (a == null && b == null) {
        return true;
    }
    if (b == null) {
        return false;
    }
    return a && b &&
        a.path === b.path &&
        a.url === b.url &&
        valueEqual(a.params, b.params);
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
function defaultConsumerRender(subscribe, child) {
    return h("context-consumer", { subscribe: subscribe, renderer: child });
}
function createProviderConsumer(defaultState, consumerRender = defaultConsumerRender) {
    let listeners = new Map();
    let currentState = defaultState;
    function notifyConsumers() {
        listeners.forEach(updateListener);
    }
    function updateListener(fields, listener) {
        if (Array.isArray(fields)) {
            [...fields].forEach(fieldName => {
                listener[fieldName] = currentState[fieldName];
            });
        }
        else {
            listener[fields] = Object.assign({}, currentState);
        }
        listener.forceUpdate();
    }
    function attachListener(propList) {
        return (el) => {
            if (listeners.has(el)) {
                return;
            }
            listeners.set(el, propList);
            updateListener(propList, el);
        };
    }
    function subscribe(el, propList) {
        attachListener(propList)(el);
        return function () {
            listeners.delete(el);
        };
    }
    function Provider({ state, children }) {
        currentState = state;
        notifyConsumers();
        return children;
    }
    function Consumer({ children }) {
        return consumerRender(subscribe, children[0]);
    }
    function wrapConsumer(childComponent, fieldList) {
        const Child = childComponent.is;
        return (_a) => {
            var { children } = _a, props = __rest(_a, ["children"]);
            return (h(Child, Object.assign({ ref: attachListener(fieldList) }, props), children));
        };
    }
    function injectProps(childComponent, fieldList) {
        let unsubscribe = null;
        const elementRefName = Object.keys(childComponent.properties).find(propName => {
            return childComponent.properties[propName].elementRef == true;
        });
        if (elementRefName == undefined) {
            throw new Error(`Please ensure that your Component ${childComponent.is} has an attribtue with "@Element" decorator. ` +
                `This is required to be able to inject properties.`);
        }
        const prevComponentWillLoad = childComponent.prototype.componentWillLoad;
        childComponent.prototype.componentWillLoad = function () {
            unsubscribe = subscribe(this[elementRefName], fieldList);
            if (prevComponentWillLoad) {
                return prevComponentWillLoad.bind(this)();
            }
        };
        const prevComponentDidUnload = childComponent.prototype.componentDidUnload;
        childComponent.prototype.componentDidUnload = function () {
            unsubscribe();
            if (prevComponentDidUnload) {
                return prevComponentDidUnload.bind(this)();
            }
        };
    }
    return {
        Provider,
        Consumer,
        wrapConsumer,
        injectProps
    };
}

var ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: null,
    titleSuffix: '',
    root: '/',
    history: null,
    routeViewsUpdated: () => { }
});

const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
const addEventListener = (node, event, listener) => (node.addEventListener
    ? node.addEventListener(event, listener, false)
    : node.attachEvent('on' + event, listener));
const removeEventListener = (node, event, listener) => (node.removeEventListener
    ? node.removeEventListener(event, listener, false)
    : node.detachEvent('on' + event, listener));
const getConfirmation = (message, callback) => (callback(window.confirm(message)));
const isModifiedEvent = (event) => (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
const supportsHistory = () => {
    const ua = window.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
        ua.indexOf('Mobile Safari') !== -1 &&
        ua.indexOf('Chrome') === -1 &&
        ua.indexOf('Windows Phone') === -1) {
        return false;
    }
    return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
const supportsPopStateOnHashChange = () => (window.navigator.userAgent.indexOf('Trident') === -1);
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
const supportsGoWithoutReloadUsingHash = () => (window.navigator.userAgent.indexOf('Firefox') === -1);
const isExtraneousPopstateEvent = (event) => (event.state === undefined &&
    navigator.userAgent.indexOf('CriOS') === -1);
const storageAvailable = (type) => {
    try {
        var storage = window[type], x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
};

export { matchPath as a, matchesAreEqual as b, ActiveRouter as c, storageAvailable as d, createLocation as e, addLeadingSlash as f, stripTrailingSlash as g, hasBasename as h, stripBasename as i, createPath as j, canUseDOM as k, addEventListener as l, removeEventListener as m, getConfirmation as n, supportsHistory as o, supportsPopStateOnHashChange as p, isExtraneousPopstateEvent as q, locationsAreEqual as r, stripLeadingSlash as s, supportsGoWithoutReloadUsingHash as t, isModifiedEvent as u };
