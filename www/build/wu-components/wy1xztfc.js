/*! Built with http://stenciljs.com */
const{h:t}=window.WuComponents;class e{constructor(){this.animation="middle-out"}toggle(){let t=document.querySelector(this.target);this.burger.classList.contains("open")?(this.burger.classList.remove("open"),t&&t.classList.remove("open")):(this.burger.classList.add("open"),t&&(t.classList.add("open"),t.focus()))}render(){return t("button",{type:"button",onClick:()=>this.toggle(),class:this.animation},t("span",null),t("span",null),t("span",null))}static get is(){return"wu-burger"}static get properties(){return{animation:{type:String,attr:"animation",reflectToAttr:!0,mutable:!0},burger:{elementRef:!0},target:{type:String,attr:"target",reflectToAttr:!0},theme:{type:String,attr:"theme",reflectToAttr:!0}}}static get style(){return":root{--wu-burger-size:2.25em;--wu-burger-thickness:0.25em;--wu-burger-color:currentColor}wu-burger{font-size:1.125rem}wu-burger[theme=primary]{color:var(--color-primary)}wu-burger[theme=secondary]{color:var(--color-secondary)}wu-burger[theme=success]{color:var(--color-success)}wu-burger[theme=warning]{color:var(--color-warning)}wu-burger[theme=danger]{color:var(--color-danger)}wu-burger[theme=info]{color:var(--color-info)}wu-burger[theme=light]{color:var(--color-light)}wu-burger[theme=grey]{color:var(--color-grey)}wu-burger[theme=dark]{color:var(--color-dark)}wu-burger button{font-size:1em;color:currentColor;position:relative;width:var(--wu-burger-size);height:var(--wu-burger-size);cursor:pointer;background:0 0;border:none;display:inline-block;padding:var(--wu-burger-thickness) 0}wu-burger button:focus{outline:0}wu-burger button span{display:block;left:calc(1 / 6 * var(--wu-burger-size));width:calc(2 / 3 * var(--wu-burger-size));height:var(--wu-burger-thickness);border-radius:var(--wu-burger-thickness);background:var(--wu-burger-color);position:absolute;-webkit-transition:var(--fast) ease-in-out;transition:var(--fast) ease-in-out}wu-burger button span:nth-child(1){top:calc(2 * var(--wu-burger-thickness))}wu-burger button span:nth-child(2){top:calc(4 * var(--wu-burger-thickness))}wu-burger button span:nth-child(3){top:calc(6 * var(--wu-burger-thickness))}wu-burger button.middle-out span{transition:top var(--fast) var(--fast),opacity var(--fast),-webkit-transform var(--fast);-webkit-transition:top var(--fast) var(--fast),opacity var(--fast),-webkit-transform var(--fast);transition:transform var(--fast),top var(--fast) var(--fast),opacity var(--fast);transition:transform var(--fast),top var(--fast) var(--fast),opacity var(--fast),-webkit-transform var(--fast)}wu-burger button.rotate span{transition:top var(--fast),opacity calc(var(--fast)/ 2),-webkit-transform var(--fast);-webkit-transition:top var(--fast),opacity calc(var(--fast)/ 2),-webkit-transform var(--fast);transition:transform var(--fast),top var(--fast),opacity calc(var(--fast)/ 2);transition:transform var(--fast),top var(--fast),opacity calc(var(--fast)/ 2),-webkit-transform var(--fast)}wu-burger.open button.middle-out span{transition:top var(--fast),opacity var(--fast),-webkit-transform var(--fast) var(--fast);-webkit-transition:top var(--fast),opacity var(--fast),-webkit-transform var(--fast) var(--fast);transition:top var(--fast),transform var(--fast) var(--fast),opacity var(--fast);transition:top var(--fast),transform var(--fast) var(--fast),opacity var(--fast),-webkit-transform var(--fast) var(--fast)}wu-burger.open button.middle-out span:nth-child(1){top:calc(4 * var(--wu-burger-thickness));-webkit-transform:rotate(45deg);transform:rotate(45deg)}wu-burger.open button.middle-out span:nth-child(2){opacity:0}wu-burger.open button.middle-out span:nth-child(3){top:calc(4 * var(--wu-burger-thickness));-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}wu-burger.open button.spin-out span:nth-child(1){top:calc(4 * var(--wu-burger-thickness));-webkit-transform:rotate(135deg);transform:rotate(135deg)}wu-burger.open button.spin-out span:nth-child(2){opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}wu-burger.open button.spin-out span:nth-child(3){top:calc(4 * var(--wu-burger-thickness));-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}wu-burger.open button.rotate span:nth-child(1){-webkit-transform:rotate(-135deg);transform:rotate(-135deg);top:calc(4 * var(--wu-burger-thickness))}wu-burger.open button.rotate span:nth-child(2){opacity:0}wu-burger.open button.rotate span:nth-child(3){-webkit-transform:rotate(135deg);transform:rotate(135deg);top:calc(4 * var(--wu-burger-thickness))}"}}export{e as WuBurger};