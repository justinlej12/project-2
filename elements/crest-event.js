import { LitElement, html, css } from "lit";
import { program } from "./data/crest-program.js";

export class CrestEvent extends LitElement {

  static styles = css`
  .event {
    border-radius: var(--ddd-radius-md);
    padding: var(--ddd-spacing-3);
    margin: var(--ddd-spacing-2) 0;

    background: var(--ddd-theme-default-white);
    box-shadow: var(--ddd-box-shadow-sm);
  }

  h3 {
    font-family: var(--ddd-font-navigation);
  }

  @media (prefers-color-scheme: dark) {
    .event {
      background: var(--ddd-theme-default-slateMax);
      color: white;
    }
  }
`;

  render() {
    return html`
      <h3>Upcoming Events</h3>
      ${program.slice(0,3).map(e => html`
        <div class="event">
          <strong>${e.name}</strong><br>
          ${e.date}<br>
          ${e.location}
        </div>
      `)}
    `;
  }
}

customElements.define("crest-event", CrestEvent);