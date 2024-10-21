// Navbar.ts
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class Navbar extends LitElement {
  static styles = css`
    :host {
      display: block;
      --navbar-background-color: #333; /* Default background color */
    }

    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      background-color: var(--navbar-background-color);
      color: white;
      width: 100%;
    }

    .title {
      font-size: 1.5em;
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 15px;
      padding: 0;
      margin: 0;
    }

    .nav-links li {
      margin: 0;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 1em;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: lightgray;
    }
  `;

  // Property for the navbar title
  @property({ type: String }) title = 'My Navbar';

  // Array of links (each link is an object with `label` and `href`)
  @property({ type: Array }) links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  render() {
    return html`
      <nav class="navbar">
        <div class="title">${this.title}</div>
        <ul class="nav-links">
          ${this.links.map(link => html`<li><a href="${link.href}">${link.label}</a></li>`)}
        </ul>
      </nav>
    `;
  }
}

// Define the custom element
window.customElements.define('navbar-e', Navbar);
