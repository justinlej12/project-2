import { LitElement, html, css } from "lit";

export class CrestEvent extends LitElement {

  static get tag() {
    return "crest-event";
  }

  constructor() {
    super();
    this.events = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadEvents();
  }

  async loadEvents() {
    const res = await fetch("/api/crest-schedule");
    this.events = await res.json();
  }

  static styles = css`
    .event {
      border: 1px solid #ccc;
      padding: 10px;
      margin: 5px 0;
      background: var(--card-bg);
      color: var(--text-color);
    }
  `;

  render() {
    return html`
      <h3>Upcoming Events</h3>
      ${this.events.slice(0,3).map(e => html`
        <div class="event">
          <strong>${e.name}</strong><br>
          ${e.date}<br>
          ${e.location}
        </div>
      `)}
    `;
  }
}

customElements.define(CrestEvent.tag, CrestEvent);