// navbar-e.ts
import { Navbar } from './Navbar.js';

// Define the custom element only if it hasn't been defined already
if (!customElements.get('navbar-e')) {
  window.customElements.define('navbar-e', Navbar);
}
