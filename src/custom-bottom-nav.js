import CustomSelectorMixin from './../node_modules/custom-select-mixins/src/selector-mixin.js'

export default customElements.define('custom-bottom-nav', class CustomBottomClass extends CustomSelectorMixin(HTMLElement) {  
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = this.template
  }
    
  get template() {
    return `
    <style>
    :host {
      display: flex;
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      
      height: 56px;
      min-height: 56px;
      max-height: 56px;
      box-sizing: border-box;
      overflow: hidden;
      
      border-top: 1px solid hsla(0,0%,53.3%,.4);
      background: #fff;
    }
    
    </style>
    
    <slot></slot>
    `
  }
})