/*! Built with http://stenciljs.com */
const{h:t}=window.WuComponents;class e{constructor(){this.resetToValue=0,this.value=0,this.max=5,this.icon="",this.iconOutline="",this.currentFillStates=[],this.onHover=(t=>{this.setVal(t+1)}),this.reset=(()=>{this.setVal(this.resetToValue)}),this.onSelect=(t=>{let e=t+1;this.setVal(e),this.value=e,this.resetToValue=e,this.change.emit()}),this.valueChanged=(()=>{console.log("prop did change: value"),this.el.value!==String(this.value)&&(this.el.value=String(this.value),console.log(this.el.value))})}setVal(t){return this.currentFillStates=this.currentFillStates.map((e,s)=>s<t),this.currentFillStates.filter(t=>t).length}getVal(){return this.value}renderStar(e,s=!1){let l=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},t("path",{d:"M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61"})),i=t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},t("path",{d:"M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61M50 17l8 26h27L64 59l8 26-22-16-22 16 8-26-21-16h27l8-26"}));return t("span",{class:"rating-icon",onClick:()=>this.onSelect(e),onMouseEnter:()=>this.onHover(e)},s?l:i)}componentWillLoad(){let t=[];for(let e=0;e<this.max;e++)e<this.value?t.push(!0):t.push(!1);this.resetToValue=this.value,this.currentFillStates=t}render(){return t("div",{class:"stars",onMouseLeave:()=>this.reset()},this.currentFillStates.map((t,e)=>this.renderStar(e,t)))}static get is(){return"wu-rating"}static get properties(){return{currentFillStates:{state:!0},el:{elementRef:!0},getVal:{method:!0},icon:{type:"Any",attr:"icon"},iconOutline:{type:"Any",attr:"icon-outline"},max:{type:Number,attr:"max"},setVal:{method:!0},value:{type:Number,attr:"value",mutable:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"wu-rating{font-size:1.25rem;color:#666}wu-rating .rating-icon{width:1em;height:1em;display:inline-block;cursor:pointer}wu-rating .rating-icon svg{fill:currentColor}"}}export{e as WuRating};