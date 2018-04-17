/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + (usePolyfills(win, win.location, x, 'import("")') ? appCorePolyfilled : appCore);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=es5') > -1) {
        // force es5 polyfill w/ ?core=es5 querystring
        return true;
    }
    if (location.protocol === 'file:') {
        // file protocol cannot use dynamic module imports
        return true;
    }
    if (!win.customElements) {
        // does not have customElement support
        return true;
    }
    if (!win.fetch) {
        // does not have fetch support
        return true;
    }
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // does not have CSS variables support
        return true;
    }
    if (!('noModule' in scriptElm)) {
        // does not have static ES module support
        return true;
    }
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "WuComponents","wu-components","/build/wu-components/",true,"wu-components.core.js","es5-build-disabled.js","hydrated",[["code-block","code-block",1,[["code",1,1,2],["language",1,1,2]]],["wu-accordion","code-block",1],["wu-accordion-content","code-block",1],["wu-accordion-header","code-block",1,[["header",7]]],["wu-burger","code-block",1,[["burger",7]]],["wu-button","wu-button",1,[["button",7]]],["wu-card","wu-card",1],["wu-col","code-block",1,[["basis",1,1,2],["col",7]]],["wu-float-aside","wu-float-aside",1,[["trigger",1,1,2]]],["wu-img","wu-img",1,[["alt",1,1,2],["el",7],["loading",5],["src",1,1,2],["thumb",1,1,2]]],["wu-rating","code-block",1,[["currentFillStates",5],["getVal",6],["icon",1,1,1],["iconOutline",1,"icon-outline",1],["max",1,1,4],["setVal",6],["value",1,1,4]]],["wu-row","code-block",1,[["maxCols",1,"max-cols",4]]],["wu-shadow","wu-shadow",1,[["depth",1,1,4],["type",1,1,2]]],["wu-spinner","code-block",1,[["color",1,1,2],["type",1,1,2]]]]);