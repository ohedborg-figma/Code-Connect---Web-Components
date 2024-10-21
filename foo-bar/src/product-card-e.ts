import { ProductCard } from './ProductCard.js';

// Define the custom element
if (!customElements.get('product-card')) {
  window.customElements.define('product-card', ProductCard);
}
