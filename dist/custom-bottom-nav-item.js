var customBottomNavItem = customElements.define('custom-bottom-nav-item', class CustomBottomNavItem extends HTMLElement {  
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
    
  get template() {
    return `
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
              
        height: 48px;
        min-height: 48px;
        max-height: 48px;
        box-sizing: border-box;
        overflow: hidden;
        
        color: #333;
        background: #fff;
      }
      
      [name="icon"]::slotted(*) {
        width: 24px;
        height: 24px;
      }
      
      [name="content"]::slotted(*) {
        font-size: 11px;
      }
    
    </style>
    
    <slot name="icon"></slot>
    <slot name="content"></slot>
    `
  }
});

export default customBottomNavItem;
