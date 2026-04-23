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
          position: relative;
          min-height: 100vh;
        }
  
        .bg {
          position: fixed;
          inset: 0;
          background-image: url("https://images.squarespace-cdn.com/content/v1/54a65094e4b0631d0c489ac8/30bf8722-6db4-4f40-be88-76d9d06cdb0c/Golden+Hour1-5.jpg");
          background-size: cover;
          background-position: center;
          opacity: 0.25; /* 👈 controls "faded" look */
          z-index: -1;
        }
      `
    ];
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
            { name: "Justin Lejeune", role: "Captain", image: "/images/golfer1.jpg" },
            { name: "Alex Carter", role: "Player", image: "/images/golfer2.jpg" },
            { name: "Noah Smith", role: "Player", image: "/images/golfer3.jpg" },
            { name: "Jonah Lee", role: "Player", image: "/images/golfer4.jpg" }
          ]}></crest-roster>

        </crest-page>
      `;
    }

    if (this.route.startsWith("/about")) {
      return html`
        <crest-page page="about">
          <h2>About Crest Golf League</h2>
          <p>
            Crest Golf League is a premier competitive golf league dedicated to excellence,
            sportsmanship, and community. Our members compete across a full season of events
            designed to challenge skill, strategy, and consistency.

            From weekly matches to championship tournaments, Crest Golf League provides an
            elite environment for golfers to improve their game and build lasting connections.

            Whether you are a seasoned competitor or developing your skills, Crest offers a
            structured, high-level experience focused on performance and growth.
            </p>

            <p>
            Our courses are selected for both beauty and difficulty, ensuring that every round
            presents a unique challenge. Players are expected to uphold the highest standards
            of integrity and respect for the game.

            Join us as we continue to build one of the most competitive and engaging golf
            communities.
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

        <crest-carousel></crest-carousel>

        <crest-event></crest-event>
      </crest-page>
    `;
  }

  render() {
    return html`
      <div class="bg"></div>
      ${this.renderPage()}
    `;
  }
}

globalThis.customElements.define(CrestApp.tag, CrestApp);