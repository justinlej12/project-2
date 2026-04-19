import { LitElement, html, css } from "lit";

export class CrestSocial extends LitElement {

  static styles = css`
    footer {
      padding: 20px;
      text-align: center;
      background: #111;
      color: white;
    }
  `;

  render() {
    return html`
      <footer>
        © 2026 Crest Golf League
      </footer>
    `;
  }
}

customElements.define("crest-social", CrestSocial);