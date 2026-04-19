import { LitElement, html, css } from "lit";

export class CrestButton extends LitElement {

  static properties = {
    label: { type: String },
    link: { type: String }
  };

  static styles = css`
    a {
      text-decoration: none;
      padding: 10px 15px;
      background: #0b3d2e;
      color: white;
      border-radius: 5px;
    }
  `;

  render() {
    return html`
      <a href="${this.link}">${this.label}</a>
    `;
  }
}

customElements.define("crest-button", CrestButton);