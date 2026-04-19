import { LitElement, html, css } from "lit";

export class CrestBanner extends LitElement {

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      background: #0b3d2e;
      color: white;
    }
    nav {
      display: flex;
      gap: 20px;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  `;

  render() {
    return html`
      <header>
        <slot name="logo"></slot>
        <nav>
          <a href="/">Home</a>
          <a href="/schedule">Schedule</a>
          <a href="/team">Team</a>
          <a href="/about">About</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("crest-banner", CrestBanner);