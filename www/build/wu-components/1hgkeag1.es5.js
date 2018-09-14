/*! Built with http://stenciljs.com */
WuComponents.loadBundle("1hgkeag1",["exports"],function(e){var t=window.WuComponents.h,i=function(){function e(){this.img="",this.imgShape="square",this.imgHref=""}return e.prototype.render=function(){return t("div",null,this.img.length>0?t("div",{class:"img"},this.imgHref.length?t("a",{href:this.imgHref},t("img",{src:this.img,class:"circle"===this.imgShape?"circle":null})):t("img",{src:this.img,class:"circle"===this.imgShape?"circle":null})):null,t("div",{class:"title"},t("slot",{name:"title"})),t("div",{class:"sub-title"},t("slot",{name:"sub-title"})))},Object.defineProperty(e,"is",{get:function(){return"wu-menu-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{img:{type:String,attr:"img"},imgHref:{type:String,attr:"img-href"},imgShape:{type:String,attr:"img-shape"},theme:{type:String,attr:"theme"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"wu-menu-header{display:block;padding:20px;border-bottom:1px solid #ccc;position:relative}wu-menu-header[theme=primary]{background:var(--color-primary);color:var(--color-primary-contrast)}wu-menu-header[theme=secondary]{background:var(--color-secondary);color:var(--color-secondary-contrast)}wu-menu-header[theme=success]{background:var(--color-success);color:var(--color-success-contrast)}wu-menu-header[theme=warning]{background:var(--color-warning);color:var(--color-warning-contrast)}wu-menu-header[theme=danger]{background:var(--color-danger);color:var(--color-danger-contrast)}wu-menu-header[theme=info]{background:var(--color-info);color:var(--color-info-contrast)}wu-menu-header[theme=light]{background:var(--color-light);color:var(--color-light-contrast)}wu-menu-header[theme=grey]{background:var(--color-grey);color:var(--color-grey-contrast)}wu-menu-header[theme=dark]{background:var(--color-dark);color:var(--color-dark-contrast)}wu-menu-header .img{margin-top:16px;margin-bottom:4px}wu-menu-header .img img{-webkit-box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3);box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3);-webkit-transition:-webkit-box-shadow .3s ease-out;transition:-webkit-box-shadow .3s ease-out;transition:box-shadow .3s ease-out;transition:box-shadow .3s ease-out,-webkit-box-shadow .3s ease-out;width:54px;height:54px;-o-object-fit:cover;object-fit:cover;padding:2px;border:2px solid #fff}wu-menu-header .img img.circle{border-radius:50%}wu-menu-header .title{font-size:1.375rem;font-weight:700}wu-menu-header .sub-title{font-size:.875rem}wu-menu-header a{color:currentColor;text-decoration:none}"},enumerable:!0,configurable:!0}),e}();e.WuMenuHeader=i,Object.defineProperty(e,"__esModule",{value:!0})});