/*! Built with http://stenciljs.com */
const { h } = window.App;

/*! Built with http://stenciljs.com */
var ContextConsumer=function(){function e(){this.context={},this.renderer=function(e){return null};}return e.prototype.componentWillLoad=function(){this.unsubscribe=this.subscribe(this.el,"context");},e.prototype.componentDidUnload=function(){this.unsubscribe();},e.prototype.render=function(){return this.renderer(Object.assign({},this.context))},Object.defineProperty(e,"is",{get:function(){return "context-consumer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return {context:{type:"Any",attr:"context"},el:{elementRef:!0},renderer:{type:"Any",attr:"renderer"},subscribe:{type:"Any",attr:"subscribe"},unsubscribe:{state:!0}}},enumerable:!0,configurable:!0}),e}();

export { ContextConsumer };
