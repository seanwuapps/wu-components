/*! Built with http://stenciljs.com */
WuComponents.loadBundle("vap43gmd",["exports"],function(e){var t=window.WuComponents.h,n=function(){function e(){this.type="button",this.disabled=!1}return e.prototype.onClick=function(){},e.prototype.render=function(){var e=this.href?"a":"button",n="button"===e?{type:this.type}:{href:this.href};return t(e,Object.assign({},n,{disabled:this.disabled,onClick:this.onClick.bind(this)}),t("slot",null))},Object.defineProperty(e,"is",{get:function(){return"wu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{button:{elementRef:!0},disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},href:{type:String,attr:"href"},type:{type:String,attr:"type"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":root{--button-padding-x:30px;--button-padding-y:10px}wu-button{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);box-shadow:0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);-webkit-transition:-webkit-box-shadow .3s ease-out;transition:-webkit-box-shadow .3s ease-out;transition:box-shadow .3s ease-out;transition:box-shadow .3s ease-out,-webkit-box-shadow .3s ease-out;background:#fff;color:currentColor;max-width:100%;display:inline-block;margin:5px;transition:box-shadow var(--fast) ease-out,-webkit-filter var(--fast) ease-in;-webkit-transition:-webkit-box-shadow var(--fast) ease-out,-webkit-filter var(--fast) ease-in;transition:-webkit-box-shadow var(--fast) ease-out,-webkit-filter var(--fast) ease-in;transition:box-shadow var(--fast) ease-out,filter var(--fast) ease-in;transition:box-shadow var(--fast) ease-out,filter var(--fast) ease-in,-webkit-box-shadow var(--fast) ease-out,-webkit-filter var(--fast) ease-in;transition:box-shadow var(--fast) ease-out,filter var(--fast) ease-in,-webkit-filter var(--fast) ease-in;width:auto;height:auto}wu-button[theme=primary]{background:var(--color-primary);color:var(--color-primary-contrast)}wu-button[theme=primary][outline]{background:#fff;border:1px solid var(--color-primary);color:currentColor}wu-button[theme=secondary]{background:var(--color-secondary);color:var(--color-secondary-contrast)}wu-button[theme=secondary][outline]{background:#fff;border:1px solid var(--color-secondary);color:currentColor}wu-button[theme=success]{background:var(--color-success);color:var(--color-success-contrast)}wu-button[theme=success][outline]{background:#fff;border:1px solid var(--color-success);color:currentColor}wu-button[theme=warning]{background:var(--color-warning);color:var(--color-warning-contrast)}wu-button[theme=warning][outline]{background:#fff;border:1px solid var(--color-warning);color:currentColor}wu-button[theme=danger]{background:var(--color-danger);color:var(--color-danger-contrast)}wu-button[theme=danger][outline]{background:#fff;border:1px solid var(--color-danger);color:currentColor}wu-button[theme=info]{background:var(--color-info);color:var(--color-info-contrast)}wu-button[theme=info][outline]{background:#fff;border:1px solid var(--color-info);color:currentColor}wu-button[theme=light]{background:var(--color-light);color:var(--color-light-contrast)}wu-button[theme=light][outline]{background:#fff;border:1px solid var(--color-light);color:currentColor}wu-button[theme=grey]{background:var(--color-grey);color:var(--color-grey-contrast)}wu-button[theme=grey][outline]{background:#fff;border:1px solid var(--color-grey);color:currentColor}wu-button[theme=dark]{background:var(--color-dark);color:var(--color-dark-contrast)}wu-button[theme=dark][outline]{background:#fff;border:1px solid var(--color-dark);color:currentColor}wu-button[outline]{border:1px solid currentColor}wu-button:focus,wu-button:hover{-webkit-box-shadow:0 2px 7px 0 rgba(0,0,0,.2),0 10px 18px 0 rgba(0,0,0,.19);box-shadow:0 2px 7px 0 rgba(0,0,0,.2),0 10px 18px 0 rgba(0,0,0,.19);-webkit-filter:brightness(105%);filter:brightness(105%)}wu-button a,wu-button button{cursor:pointer;height:100%;padding:var(--button-padding-y) var(--button-padding-x);text-decoration:none;font-size:1rem;line-height:1.25rem;border:none;display:block;background:0 0;color:currentColor;text-align:center}wu-button[block]{display:block}wu-button[block] a,wu-button[block] button{width:100%;text-align:center;padding-left:0;padding-right:0}wu-button[flat],wu-button[flat]:hover{-webkit-box-shadow:none;box-shadow:none}wu-button[shape=circle]{width:3em;height:3em;border-radius:50%}wu-button[shape=circle] a,wu-button[shape=circle] button{padding:0;width:100%;height:3em;line-height:3em;font-size:1em;text-align:center;white-space:nowrap}"},enumerable:!0,configurable:!0}),e}();e.WuButton=n,Object.defineProperty(e,"__esModule",{value:!0})});