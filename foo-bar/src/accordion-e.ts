import { Accordion} from './Accordion.js';

// Define the custom element
if (!customElements.get('accordion-component')) {
  window.customElements.define('accordion-component', Accordion);
}
