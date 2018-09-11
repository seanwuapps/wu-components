/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppMenu {
    render() {
        return (h("wu-drawer-menu", { id: "menu", position: "left", class: "open" },
            h("wu-menu-header", { theme: "secondary", img: "/assets/images/cap.svg", "img-shape": "circle", "img-href": "#" },
                h("span", { slot: "title" },
                    h("a", { href: "#" }, "Steve Rogers")),
                h("span", { slot: "sub-title" },
                    h("a", { href: "#" }, "Captain America"))),
            h("wu-menu-list", null,
                h("wu-menu-item", null,
                    h("a", { href: "#" },
                        h("i", { class: "material-icons" }, "home"),
                        "Home")),
                h("wu-divider", null),
                h("wu-menu-sub-heading", null, "Components"),
                this.menuItems.map(item => (h("wu-menu-item", null,
                    h("a", { href: "#" },
                        h("i", { class: "material-icons" }, "star_rate"),
                        "Primary")))))));
    }
    static get is() { return "app-menu"; }
}

class WuDivider {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-divider"; }
    static get style() { return ":root{\n  --wu-divider-spacing: 10px;\n}\n\nwu-divider {\n  border-top: 1px solid #dedede;\n  margin-top: var(--wu-divider-spacing);\n  height: var(--wu-divider-spacing);\n  display: block;\n  width: 100%; }"; }
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
        }
    }; }
    static get style() { return ":root{ \n  --wu-drawer-menu-overlay-color: rgba(0,0,0,0.4)\n}\n\nwu-drawer-menu.open[position='left'] .side-menu, wu-drawer-menu.open[position='right'] .side-menu {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\nwu-drawer-menu.open .side-menu-overlay {\n  opacity: 1;\n  z-index: 9; }\n\nwu-drawer-menu .side-menu {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  position: fixed;\n  z-index: 9999;\n  width: 300px;\n  height: 100vh;\n  opacity: 0;\n  background: white;\n  color: currentColor;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  transition: opacity var(--fast), -webkit-transform var(--fast);\n  -webkit-transition: opacity var(--fast), -webkit-transform var(--fast);\n  transition: transform var(--fast), opacity var(--fast);\n  transition: transform var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n  top: 0;\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  wu-drawer-menu .side-menu[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-drawer-menu .side-menu[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-drawer-menu .side-menu[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-drawer-menu .side-menu[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-drawer-menu .side-menu[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-drawer-menu .side-menu[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-drawer-menu .side-menu[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-drawer-menu .side-menu[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-drawer-menu .side-menu[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-drawer-menu .side-menu wu-menu-list {\n    overflow: auto; }\n  wu-drawer-menu .side-menu wu-divider {\n    --wu-divider-spacing: 5px; }\n  wu-drawer-menu .side-menu wu-menu-sub-heading {\n    display: block;\n    color: #999;\n    padding: 10px;\n    font-size: 14px;\n    font-size: 0.875rem; }\n\nwu-drawer-menu[position='left'] .side-menu {\n  right: auto; }\n\nwu-drawer-menu[position='right'] .side-menu {\n  left: auto;\n  right: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\nwu-drawer-menu .side-menu-overlay {\n  background: var(--wu-drawer-menu-overlay-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  width: 100vw;\n  height: 100%;\n  height: 100vh;\n  opacity: 0;\n  z-index: -1;\n  -webkit-transition: opacity var(--fast);\n  transition: opacity var(--fast); }"; }
}

class WuMenuHeader {
    constructor() {
        this.img = '';
        this.imgShape = 'square';
        this.imgHref = '';
    }
    render() {
        return (h("div", null,
            this.img.length > 0 ? (h("div", { class: "img" }, this.imgHref.length ? (h("a", { href: this.imgHref },
                h("img", { src: this.img, class: this.imgShape === 'circle' ? 'circle' : null }))) : (h("img", { src: this.img, class: this.imgShape === 'circle' ? 'circle' : null })))) : null,
            h("div", { class: "title" },
                h("slot", { name: "title" })),
            h("div", { class: "sub-title" },
                h("slot", { name: "sub-title" }))));
    }
    static get is() { return "wu-menu-header"; }
    static get properties() { return {
        "img": {
            "type": String,
            "attr": "img"
        },
        "imgHref": {
            "type": String,
            "attr": "img-href"
        },
        "imgShape": {
            "type": String,
            "attr": "img-shape"
        }
    }; }
    static get style() { return "wu-menu-header {\n  display: block;\n  padding: 20px;\n  border-bottom: 1px solid #ccc;\n  position: relative; }\n  wu-menu-header[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-menu-header[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-menu-header[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-menu-header[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-menu-header[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-menu-header[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-menu-header[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-menu-header[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-menu-header[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-menu-header .img {\n    margin-top: 16px;\n    margin-bottom: 4px; }\n    wu-menu-header .img img {\n      -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n      -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n      transition: -webkit-box-shadow 0.3s ease-out;\n      transition: box-shadow 0.3s ease-out;\n      transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n      width: 54px;\n      height: 54px;\n      -o-object-fit: cover;\n         object-fit: cover;\n      padding: 2px;\n      border: 2px solid white; }\n      wu-menu-header .img img.circle {\n        border-radius: 50%; }\n  wu-menu-header .title {\n    font-size: 22px;\n    font-size: 1.375rem;\n    font-weight: bold; }\n  wu-menu-header .sub-title {\n    font-size: 14px;\n    font-size: 0.875rem; }\n  wu-menu-header a {\n    color: currentColor;\n    text-decoration: none; }"; }
}

class WuMenuItem {
    render() {
        return (h("div", { class: "menu-item" },
            h("slot", null)));
    }
    static get is() { return "wu-menu-item"; }
    static get style() { return "wu-menu-item {\n  display: block;\n  position: relative; }\n  wu-menu-item[theme='primary'] {\n    color: var(--color-primary);\n    background: white; }\n  wu-menu-item[theme='secondary'] {\n    color: var(--color-secondary);\n    background: white; }\n  wu-menu-item[theme='success'] {\n    color: var(--color-success);\n    background: white; }\n  wu-menu-item[theme='warning'] {\n    color: var(--color-warning);\n    background: white; }\n  wu-menu-item[theme='danger'] {\n    color: var(--color-danger);\n    background: white; }\n  wu-menu-item[theme='info'] {\n    color: var(--color-info);\n    background: white; }\n  wu-menu-item[theme='light'] {\n    color: var(--color-light);\n    background: white; }\n  wu-menu-item[theme='grey'] {\n    color: var(--color-grey);\n    background: white; }\n  wu-menu-item[theme='dark'] {\n    color: var(--color-dark);\n    background: white; }\n  wu-menu-item:hover::before, wu-menu-item:focus::before {\n    content: '';\n    background: currentColor;\n    opacity: 0.1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1; }\n  wu-menu-item .menu-item {\n    position: relative;\n    z-index: 2; }\n  wu-menu-item [href] {\n    display: block;\n    text-decoration: none;\n    color: currentColor;\n    padding: 15px 10px 18px 20px; }\n    wu-menu-item [href] i {\n      width: 1em;\n      max-width: 1em;\n      margin-right: 10px;\n      vertical-align: text-bottom; }"; }
}

export { AppMenu, WuDivider, WuDrawerMenu, WuMenuHeader, WuMenuItem };
