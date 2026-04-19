import { LitElement, html, css } from "lit";

export class CrestAnimated extends LitElement {

  static properties = {
    src: { type: String },
    hoveredSrc: { type: String },
    link: { type: String },
    hovered: { type: Boolean }
  };

  constructor() {
    super();
    this.hovered = false;
  }

  static styles = css`
    img {
      width: 60px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <a href="${this.link || '#'}">
        <img 
          src="${this.hovered ? this.hoveredSrc : this.src}"
          @mouseenter=${() => this.hovered = true}
          @mouseleave=${() => this.hovered = false}
        >
      </a>
    `;
  }
}

customElements.define("crest-animated", CrestAnimated);