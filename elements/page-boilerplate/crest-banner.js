import { LitElement, html, css } from "lit";

export class CrestBanner extends LitElement {

  static properties = {
    menu: { type: Array },
    open: { type: Boolean }
  };

  constructor() {
    super();
    this.menu = [];
    this.open = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
  }

  async loadMenu() {
    try {
      const res = await fetch("/api/menu");
      const data = await res.json();
      this.menu = data.items || [];
    } catch (e) {
      console.error("Menu failed to load", e);
    }
  }

  toggleMenu() {
    this.open = !this.open;
  }

  static styles = css`
  :host {
    display: block;
    background: var(--ddd-theme-primary);
    color: var(--ddd-theme-default-white);
    font-family: var(--ddd-font-navigation);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--ddd-spacing-4);
  }

  nav {
    display: flex;
    gap: var(--ddd-spacing-4);
  }

  a {
    color: var(--ddd-theme-default-white);
    text-decoration: none;
    font-weight: bold;
  }

  .menu-button {
    display: none;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    nav {
      position: absolute;
      top: 70px;
      right: 0;
      background: var(--ddd-theme-primary);
      flex-direction: column;
      width: 200px;
      padding: var(--ddd-spacing-3);
      display: none;
    }

    nav.open {
      display: flex;
    }

    .menu-button {
      display: block;
    }
  }
`;

  render() {
    return html`
      <header>
        <slot name="logo"></slot>

        <div class="menu-button" @click=${this.toggleMenu}>
          ☰
        </div>

        <nav class=${this.open ? "open" : ""}>
          ${this.menu.map(item => html`
            <a href="${item.path}">${item.title}</a>
          `)}
        </nav>
      </header>
    `;
  }
}

customElements.define("crest-banner", CrestBanner);