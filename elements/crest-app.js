import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./page-boilerplate/crest-page.js";
import "./crest-calendar.js";
import "./crest-carousel.js";
import "./crest-event.js";
import "./crest-image.js";
import "./crest-roster.js";

export class CrestApp extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "crest-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  initRouting() {
    this.route = window.location.pathname;

    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  renderPage() {

    if (this.route.startsWith("/schedule")) {
      return html`
        <crest-page page="schedule">
          <h2>League Schedule</h2>
          <crest-calendar></crest-calendar>
          <crest-event></crest-event>
        </crest-page>
      `;
    }

    if (this.route.startsWith("/team")) {
      return html`
        <crest-page page="team">
          <h2>Team Roster</h2>

          <crest-roster .members=${[
            { name: "Justin Lejeune", role: "Captain", image: "https://randomuser.me/api/portraits/men/1.jpg" },
            { name: "Alex Carter", role: "Player", image: "https://randomuser.me/api/portraits/men/2.jpg" },
            { name: "Noah Smith", role: "Player", image: "https://randomuser.me/api/portraits/men/3.jpg" },
            { name: "Jonah Lee", role: "Player", image: "https://randomuser.me/api/portraits/men/4.jpg" }
          ]}></crest-roster>

        </crest-page>
      `;
    }

    if (this.route.startsWith("/about")) {
      return html`
        <crest-page page="about">
          <h2>About Crest Golf League</h2>
          <p>
            Crest Golf League is a competitive and community-driven golf league focused on skill,
            sportsmanship, and elite competition.
          </p>

          <crest-carousel>
            <crest-image src="/api/crest-images.json"></crest-image>
          </crest-carousel>

        </crest-page>
      `;
    }

    return html`
      <crest-page page="home">
        <h2>Welcome to Crest Golf League</h2>

        <crest-carousel>
          <crest-image src="/api/crest-images.json"></crest-image>
        </crest-carousel>

        <crest-event></crest-event>
      </crest-page>
    `;
  }

  render() {
    return html`${this.renderPage()}`;
  }
}

globalThis.customElements.define(CrestApp.tag, CrestApp);