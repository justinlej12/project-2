import { LitElement, html, css } from "lit";

import "./crest-banner.js";
import "./crest-animated.js";
import "../crest-social.js";

export class CrestPage extends LitElement {

  static properties = {
    page: { type: String }
  };

  static styles = css`
  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--ddd-font-body);
  }

  .content {
    flex: 1;
    padding: var(--ddd-spacing-5);

    background: var(--ddd-theme-default-white);
    color: var(--ddd-theme-default-black);
  }

  @media (prefers-color-scheme: dark) {
    .content {
      background: var(--ddd-theme-default-slateMax);
      color: var(--ddd-theme-default-white);
    }
  }
`;

  render() {
    return html`
      <crest-banner>
        <crest-animated 
          slot="logo"
          link="/"
          src="/images/crest-home1.png"
          hoveredSrc="/images/crest-home2.png">
        </crest-animated>
      </crest-banner>

      <div class="content">
        <slot></slot>
      </div>

      <crest-social></crest-social>
    `;
  }
}

customElements.define("crest-page", CrestPage);