import { LitElement, html, css } from "lit";
import { images } from "./data/crest-images.js";

export class CrestCarousel extends LitElement {

  static properties = {
    index: { type: Number }
  };

  constructor() {
    super();
    this.index = 0;
  }

  static styles = css`
    .container {
      position: relative;
      max-width: 500px;
      margin: auto;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: black;
      color: white;
      border: none;
      padding: 5px;
      cursor: pointer;
    }

    .prev { left: 0; }
    .next { right: 0; }
  `;

  next() {
    this.index = (this.index + 1) % images.length;
  }

  prev() {
    this.index = (this.index - 1 + images.length) % images.length;
  }

  render() {
    const img = images[this.index];

    return html`
      <div class="container">
        <img src="${img.src}" alt="${img.alt}" />
        <button class="prev" @click=${this.prev}>◀</button>
        <button class="next" @click=${this.next}>▶</button>
      </div>
    `;
  }
}

customElements.define("crest-carousel", CrestCarousel);