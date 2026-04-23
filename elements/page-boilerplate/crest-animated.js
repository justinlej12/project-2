import { LitElement, html, css } from "lit";

export class CrestAnimated extends LitElement {

  static properties = {
    src: { type: String },
    hoveredSrc: { type: String },
    link: { type: String }
  };

  static styles = css`
    .wrapper {
      width: 60px;
      height: 60px;
      position: relative;
    }

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: opacity 0.2s ease;
      display: block;
    }

    .hover {
      opacity: 0;
    }

    .wrapper:hover .hover {
      opacity: 1;
    }

    .wrapper:hover .base {
      opacity: 0;
    }
  `;

  render() {
    return html`
      <a href="${this.link || '#'}">
        <div class="wrapper">
          <img class="base" src="${this.src}" alt="logo">
          <img class="hover" src="${this.hoveredSrc}" alt="logo hover">
        </div>
      </a>
    `;
  }
}

customElements.define("crest-animated", CrestAnimated);