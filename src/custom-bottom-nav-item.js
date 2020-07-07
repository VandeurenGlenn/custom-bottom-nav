export default customElements.define('custom-bottom-nav-item', class CustomBottomNavItem extends HTMLElement {  
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
              
        height: 56px;
        min-height: 56px;
        max-height: 56px;
        
        min-width: 80px;
        max-width: 168px;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;        
        
        padding: 8px 12px 12px 12px;
        color: #333;
        background: #fff;
      }
      
      [name="icon"]::slotted(*) {
        width: 24px;
        height: 24px;
      }
      
      [name="content"]::slotted(*) {
        font-size: 11px;
        text-transform: uppercase;
      }
    
    </style>
    
    <slot name="icon"></slot>
    <slot name="content"></slot>
    `
  }
})