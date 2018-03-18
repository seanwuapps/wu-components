/*! Built with http://stenciljs.com */
const { h } = window.WuComponents;

class WuAccodionContent {
    render() {
        return h("slot", null);
    }
    static get is() { return "wu-accordion-content"; }
    static get style() { return "wu-accordion-content {\n  padding: 40px; }"; }
}

export { WuAccodionContent as WuAccordionContent };
