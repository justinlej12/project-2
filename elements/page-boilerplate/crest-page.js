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
  }

  .content {
    flex: 1; 
    padding: 20px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(4px);
  }

  @media (prefers-color-scheme: dark) {
    .content {
      background: rgba(20, 20, 20, 0.75);
      color: white;
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