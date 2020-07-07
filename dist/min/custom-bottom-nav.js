var e=(e={},t={})=>{for(const s of Object.keys(e))t[s]&&Object.assign(e[s],t[s]);for(const s of Object.keys(t))e[s]||(e[s]=t[s]);return e};window.Backed=window.Backed||{},window.Backed.PropertyStore=window.Backed.PropertyStore||new Map;var t=e=>class extends e{static get observedAttributes(){return Object.entries(this.properties).map(e=>e[1].reflect?e[0]:null)}get properties(){return customElements.get(this.localName).properties}constructor(){if(super(),this.properties)for(const e of Object.entries(this.properties)){const{observer:t,reflect:s,renderer:i}=e[1];this.defineProperty(e[0],e[1])}}connectedCallback(){if(super.connectedCallback&&super.connectedCallback(),this.attributes)for(const e of this.attributes)if(String(e.name).includes("on-")){const t=e.value,s=e.name.replace("on-","");this.addEventListener(String(s),e=>{let s=e.path[0];for(;!s.host;)s=s.parentNode;s.host[t]&&s.host[t](e)})}}attributeChangedCallback(e,t,s){this[e]=s}defineProperty(e=null,{strict:t=!1,observer:s,reflect:i=!1,renderer:r,value:n}){Object.defineProperty(this,e,{set(t){if(t!==this["___"+e]&&(this["___"+e]=t,i&&(t?this.setAttribute(e,String(t)):this.removeAttribute(e)),s&&(s in this?this[s]():console.warn(`observer::${s} undefined`)),r)){const s={};s[e]=t,r in this?this.render(s,this[r]):console.warn(`renderer::${r} undefined`)}},get(){return this["___"+e]},configurable:!t});const o=this.getAttribute(e);this[e]=o||this.hasAttribute(e)||n}},s=s=>class extends(t(s)){static get properties(){return e(super.properties,{selected:{value:0,observer:"__selectedObserver__"}})}constructor(){super()}get slotted(){return this.shadowRoot?this.shadowRoot.querySelector("slot"):this}get _assignedNodes(){const e="assignedNodes"in this.slotted?this.slotted.assignedNodes():this.children,t=[];for(var s=0;s<e.length;s++){const i=e[s];1===i.nodeType&&t.push(i)}return t}get attrForSelected(){return this.getAttribute("attr-for-selected")||"name"}set attrForSelected(e){this.setAttribute("attr-for-selected",e)}attributeChangedCallback(e,t,s){t!==s&&(isNaN(s)||(s=Number(s)),this[e]=s)}select(e){e&&(this.selected=e),this.multi&&this.__selectedObserver__()}next(e){const t=this.getIndexFor(this.currentSelected);-1!==t&&t>=0&&this._assignedNodes.length>t&&t+1<=this._assignedNodes.length-1&&(this.selected=this._assignedNodes[t+1])}previous(){const e=this.getIndexFor(this.currentSelected);-1!==e&&e>=0&&this._assignedNodes.length>e&&e-1>=0&&(this.selected=this._assignedNodes[e-1])}getIndexFor(e){return e&&e instanceof HTMLElement==!1?console.error(e+" is not an instanceof HTMLElement"):this._assignedNodes.indexOf(e||this.selected)}_updateSelected(e){e.classList.add("custom-selected"),this.currentSelected&&this.currentSelected!==e&&this.currentSelected.classList.remove("custom-selected"),this.currentSelected=e}__selectedObserver__(e){const t=typeof this.selected;if(Array.isArray(this.selected))for(const e of this._assignedNodes)1===e.nodeType&&(-1!==this.selected.indexOf(e.getAttribute(this.attrForSelected))?e.classList.add("custom-selected"):e.classList.remove("custom-selected"));else{if("object"===t)return this._updateSelected(this.selected);if("string"===t){for(const e of this._assignedNodes)if(1===e.nodeType&&e.getAttribute(this.attrForSelected)===this.selected)return this._updateSelected(e)}else{const e=this._assignedNodes[this.selected];e&&1===e.nodeType&&this._updateSelected(e)}}}},i=t=>class extends(s(t)){static get properties(){return e(super.properties,{selected:{value:0,observer:"__selectedObserver__"},multi:{value:!1,reflect:!0}})}constructor(){super()}connectedCallback(){super.connectedCallback(),this._onClick=this._onClick.bind(this),this.addEventListener("click",this._onClick)}disconnectedCallback(){this.removeEventListener("click",this._onClick)}_onClick(e){const t=e.path?e.path[0]:e.composedPath()[0],s=t.getAttribute(this.attrForSelected);let i;if(i=t.localName!==this.localName?s||t:s,this.multi){Array.isArray(this.selected)||(this.selected=[]);const e=this.selected.indexOf(i);-1===e?this.selected.push(i):this.selected.splice(e,1),this.select(this.selected)}else this.selected=i;this.dispatchEvent(new CustomEvent("selected",{detail:i}))}},r=customElements.define("custom-bottom-nav",class extends(i(HTMLElement)){constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=this.template}get template(){return"\n    <style>\n    :host {\n      display: flex;\n      position: fixed;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      \n      height: 48px;\n      min-height: 48px;\n      max-height: 48px;\n      box-sizing: border-box;\n      overflow: hidden;\n      \n      border-top: 1px solid hsla(0,0%,53.3%,.4);\n      background: #fff;\n    }\n    \n    </style>\n    \n    <slot></slot>\n    "}});export default r;
