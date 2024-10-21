import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// Define the Accordion class
export class Accordion extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 10px 0;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }

    .header {
      background: #f1f1f1;
      padding: 10px 15px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color 0.3s ease;
    }

    .header:hover {
      background-color: #e0e0e0; /* Change color on hover */
    }

    .content {
      padding: 10px 15px;
      display: none; /* Hide by default */
      background-color: #fff;
      transition: max-height 0.2s ease-out;
    }

    :host([opened]) .content {
      display: block; /* Show when opened */
    }
  `;

  @property({ type: Boolean, reflect: true }) opened = false;

  @property({ type: String }) headerText = 'Accordion Header';

  render() {
    return html`
      <div class="header" @click="${() => this.opened = !this.opened}">
        <span>${this.headerText}</span>
        <span>${this.opened ? '−' : '+'}</span>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    `;
  }
}

// Define the custom element, ensuring it's not already defined
if (!customElements.get('accordion-component')) {
  customElements.define('accordion-component', Accordion);
}
