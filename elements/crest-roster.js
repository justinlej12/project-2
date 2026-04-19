import { LitElement, html, css } from "lit";

export class CrestRoster extends LitElement {

    static get properties() {
        return {
          members: { type: Array }
        };
      }

  constructor() {
    super();
    this.members = [];
  }

  static styles = css`
    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      width: 200px;
      text-align: center;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
  `;

  render() {
    return html`
      <div class="grid">
        ${this.members.map(m => html`
          <div class="card">
            <img src="${m.image}">
            <h4>${m.name}</h4>
            <p>${m.role}</p>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define("crest-roster", CrestRoster);