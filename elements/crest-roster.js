import { LitElement, html, css } from "lit";

export class CrestRoster extends LitElement {

  static properties = {
    members: { type: Array }
  };

  static styles = css`
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: var(--ddd-spacing-4);
    justify-content: center;
  }

  .card {
    width: 200px;
    text-align: center;
    background: var(--ddd-theme-default-white);
    border-radius: var(--ddd-radius-md);
    padding: var(--ddd-spacing-3);
    box-shadow: var(--ddd-box-shadow-sm);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: var(--ddd-radius-sm);
  }

  h4 {
    margin-top: var(--ddd-spacing-2);
    font-size: var(--ddd-font-size-m);
  }

  p {
    font-size: var(--ddd-font-size-s);
    color: var(--ddd-theme-default-slate);
  }

  @media (prefers-color-scheme: dark) {
    .card {
      background: var(--ddd-theme-default-slateMax);
      color: white;
    }
  }
`;

  render() {
    return html`
      <div class="grid">
        ${this.members?.map(m => html`
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