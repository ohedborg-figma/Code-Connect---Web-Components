import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class ProductCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
      max-width: 300px;
      margin: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background-color: white;
    }

    .image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .content {
      padding: 15px;
    }

    .title {
      font-size: 1.25em;
      margin: 0;
    }

    .description {
      font-size: 0.875em;
      margin: 10px 0;
    }

    .price {
      font-size: 1.1em;
      font-weight: bold;
    }
  `;

  // Property for the product title
  @property({ type: String }) title = 'Product Title';

  // Property for the product description
  @property({ type: String }) description = 'Product Description';

  // Property for the product image URL
  @property({ type: String }) imgSrc = 'https://via.placeholder.com/300';

  // Property for the product price
  @property({ type: Number }) price = 0;

  // Method to handle button click
  handleButtonClick() {
    alert(`Added ${this.title} to cart!`);
  }

  render() {
    return html`
      <div>
        <img class="image" src="${this.imgSrc}" alt="${this.title}" />
        <div class="content">
          <h2 class="title">${this.title}</h2>
          <p class="description">${this.description}</p>
          <div class="price">$${this.price.toFixed(2)}</div>
          <button-e @click="${this.handleButtonClick}">Add to Cart</button-e>
        </div>
      </div>
    `;
  }
}

customElements.define('product-card', ProductCard);
