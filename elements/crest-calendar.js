import { LitElement, html, css } from "lit";
import { program } from "./data/crest-program.js";

export class CrestCalendar extends LitElement {

  static properties = {
    currentDate: { type: Object }
  };

  constructor() {
    super();
    this.currentDate = new Date();
  }

  static styles = css`
    .controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    button {
      cursor: pointer;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 5px;
    }

    .day {
      border: 1px solid #ccc;
      min-height: 90px;
      padding: 5px;
      background: var(--card-bg);
    }

    .empty {
      border: none;
    }

    .event {
      font-size: 12px;
      background: #ddd;
      margin-top: 3px;
      padding: 2px;
    }
  `;

  changeMonth(delta) {
    const d = new Date(this.currentDate);
    d.setMonth(d.getMonth() + delta);
    this.currentDate = d;
  }

  renderDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const days = new Date(year, month + 1, 0).getDate();

    const grid = [];

    // FIXED EMPTY CELLS (prevents random shifting)
    for (let i = 0; i < firstDay; i++) {
      grid.push(html`<div class="day empty"></div>`);
    }

    for (let d = 1; d <= days; d++) {

      const dayEvents = program.filter(e => {
        const [y, m, day] = e.date.split("-").map(Number);
        return y === year && m === month + 1 && day === d;
      });

      grid.push(html`
        <div class="day">
          <strong>${d}</strong>
          ${dayEvents.map(e => html`
            <div class="event">${e.name}</div>
          `)}
        </div>
      `);
    }

    return grid;
  }

  render() {
    return html`
      <div class="controls">
        <button @click=${() => this.changeMonth(-1)}>←</button>
        <h3>
          ${this.currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric"
          })}
        </h3>
        <button @click=${() => this.changeMonth(1)}>→</button>
      </div>

      <div class="grid">
        ${this.renderDays()}
      </div>
    `;
  }
}

customElements.define("crest-calendar", CrestCalendar);