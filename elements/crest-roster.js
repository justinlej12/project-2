
import { LitElement, html, css } from "lit";

export class CrestRoster extends LitElement {

  static properties = {
    members: { type: Array }
  };

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
      height: 220px;
      object-fit: cover;
      border-radius: 10px;
    }
  `;

  render() {
    return html`
      <div class="grid">
        ${this.members.map(m => html`
          <div class="card">
            <img src="${m.image}" alt="${m.name}">
            <h4>${m.name}</h4>
            <p>${m.role}</p>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define("crest-roster", CrestRoster);