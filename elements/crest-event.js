import { LitElement, html, css } from "lit";
import { program } from "./data/crest-program.js";

export class CrestEvent extends LitElement {

  static styles = css`
    .event {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 5px 0;
      background: var(--card-bg);
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