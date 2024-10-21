import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class Button extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--foo-bar-text-color, #000);
    }

    .button {
      color: white;
      background-color: grey;
      height: 100px;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      max-height: 50px;
      margin-right: 10px;
    }
  `;

  // Property for button text
  @property({ type: String }) namebutton = 'click to self-destruct';

  // Property for image source (URL)
  @property({ type: String }) imgSrc = '/public/icon-button.svg';

  // Boolean property to control image display
  @property({ type: Boolean }) imgEnabled = true;

  render() {
    return html`
      <button class="button">
        <!-- Dynamically render image based on imgEnabled -->
        ${this.imgEnabled ? html`<img src="${this.imgSrc}" alt="button image" />` : ''}
        ${this.namebutton}
      </button>
    `;
  }
}
