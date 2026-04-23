import { LitElement, html, css } from "lit";
import "./crest-banner.js";
import "./crest-animated.js";
import "../crest-social.js";

export class CrestPage extends LitElement {

  static properties = {
    page: { type: String }
  };

  static styles = css`
        .content {
      padding: 20px;
      min-height: 80vh;
      background: var(--bg-color);
      color: var(--text-color);
    }
  `;

  render() {
    return html`
      <crest-banner>
        <crest-animated 
          slot="logo"
          link="/"
          src="./elements/images/crest-home1.png"
          hoveredSrc="./elements/images/crest-home2.png">
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