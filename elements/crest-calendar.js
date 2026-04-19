import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class CrestCalendar extends DDDSuper(LitElement) {

  static get tag() {
    return "crest-calendar";
  }

  constructor() {
    super();
    this.currentDate = new Date();
    this.events = [];
  }

  static get properties() {
    return {
      currentDate: { type: Object },
      events: { type: Array }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadEvents();
  }

  async loadEvents() {
    try {
      const res = await fetch("/api/crest-schedule");
      this.events = await res.json();
    } catch {
      this.events = [];
    }
  }

  renderDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();

    let grid = [];

    for (let i = 0; i < firstDay; i++) {
      grid.push(html`<div></div>`);
    }

    for (let d = 1; d <= days; d++) {
      const dayEvents = this.events.filter(e => {
        const [y,m,day] = e.date.split("-").map(Number);
        return y === year && m === month+1 && day === d;
      });

      grid.push(html`
        <div class="day">
          <strong>${d}</strong>
          ${dayEvents.map(e => html`<div class="event">${e.name}</div>`)}
        </div>
      `);
    }

    return grid;
  }

  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(7,1fr);
      gap: 5px;
    }
    .day {
      border: 1px solid #ccc;
      padding: 10px;
      min-height: 80px;
      background: white;
    }
    .event {
      font-size: 12px;
      background: #ddd;
      margin-top: 4px;
      padding: 2px;
    }
  `;

  render() {
    return html`
      <h3>${this.currentDate.toLocaleString("default",{month:"long",year:"numeric"})}</h3>
      <div class="grid">${this.renderDays()}</div>
    `;
  }
}

customElements.define(CrestCalendar.tag, CrestCalendar);