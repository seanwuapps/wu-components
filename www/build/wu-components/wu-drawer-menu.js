/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuDrawerMenu {
    constructor() {
        this.items = {
            home: {
                label: 'Home'
            }
        };
        this.closeMenu = this.closeMenu.bind(this);
    }
    componentDidLoad() {
        if (this.theme) {
            this.el.setAttribute('theme', this.theme);
        }
        // remove overlay after fade out transition
        let overlay = this.el.querySelector('.side-menu-overlay');
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
    static get style() { return ":root {\n  --wu-drawer-menu-overlay-color: rgba(0, 0, 0, 0.4);\n}\n\n\n/**\n  CSS Utilities\n*/\n.text-left {\n  text-align: left; }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.f-align-start {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.f-align-end {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end; }\n\n.f-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.no-margin {\n  margin: 0; }\n\n.no-padding {\n  padding: 0; }\n\n.hidden {\n  display: none; }\n\nwu-drawer-menu.open .side-menu {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  opacity: 1; }\n\nwu-drawer-menu.open .side-menu-overlay {\n  opacity: 1;\n  z-index: 9; }\n\nwu-drawer-menu .side-menu {\n  -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 0.3s ease-out;\n  transition: -webkit-box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out;\n  transition: box-shadow 0.3s ease-out, -webkit-box-shadow 0.3s ease-out;\n  position: fixed;\n  z-index: 9999;\n  width: 280px;\n  height: 100vh;\n  opacity: 0;\n  background: white;\n  color: currentColor;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  transition: opacity var(--fast), -webkit-transform var(--fast);\n  -webkit-transition: opacity var(--fast), -webkit-transform var(--fast);\n  transition: transform var(--fast), opacity var(--fast);\n  transition: transform var(--fast), opacity var(--fast), -webkit-transform var(--fast);\n  top: 0;\n  left: 0;\n  -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0); }\n  wu-drawer-menu .side-menu[theme='primary'] {\n    background: var(--color-primary);\n    color: var(--color-primary-contrast); }\n  wu-drawer-menu .side-menu[theme='secondary'] {\n    background: var(--color-secondary);\n    color: var(--color-secondary-contrast); }\n  wu-drawer-menu .side-menu[theme='success'] {\n    background: var(--color-success);\n    color: var(--color-success-contrast); }\n  wu-drawer-menu .side-menu[theme='warning'] {\n    background: var(--color-warning);\n    color: var(--color-warning-contrast); }\n  wu-drawer-menu .side-menu[theme='danger'] {\n    background: var(--color-danger);\n    color: var(--color-danger-contrast); }\n  wu-drawer-menu .side-menu[theme='info'] {\n    background: var(--color-info);\n    color: var(--color-info-contrast); }\n  wu-drawer-menu .side-menu[theme='light'] {\n    background: var(--color-light);\n    color: var(--color-light-contrast); }\n  wu-drawer-menu .side-menu[theme='grey'] {\n    background: var(--color-grey);\n    color: var(--color-grey-contrast); }\n  wu-drawer-menu .side-menu[theme='dark'] {\n    background: var(--color-dark);\n    color: var(--color-dark-contrast); }\n  wu-drawer-menu .side-menu wu-menu-list {\n    overflow: auto; }\n  wu-drawer-menu .side-menu wu-divider {\n    --wu-divider-spacing: 5px; }\n  wu-drawer-menu .side-menu wu-menu-sub-heading {\n    display: block;\n    color: #999;\n    padding: 10px;\n    font-size: 14px;\n    font-size: 0.875rem; }\n\nwu-drawer-menu[position='left'] .side-menu {\n  right: auto; }\n\nwu-drawer-menu[position='right'] .side-menu {\n  left: auto;\n  right: 0;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0); }\n\nwu-drawer-menu .side-menu-overlay {\n  background: var(--wu-drawer-menu-overlay-color);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  width: 100vw;\n  height: 100%;\n  height: 100vh;\n  opacity: 0;\n  z-index: -9;\n  -webkit-transition: opacity var(--fast);\n  transition: opacity var(--fast); }"; }
}

export { WuDrawerMenu };
