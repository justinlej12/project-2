import { LitElement, html, css } from "lit";

export class CrestCarousel extends LitElement {

  static properties = {
    index: { type: Number }
  };

  constructor() {
    super();
    this.index = 0;
    this.images = [];
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

  render() {
    return html`
      <div class="container">
        <slot></slot>
        <button class="prev" @click=${this.prev}>◀</button>
        <button class="next" @click=${this.next}>▶</button>
      </div>
    `;
  }

  next() { this.index++; }
  prev() { this.index--; }
}

customElements.define("crest-carousel", CrestCarousel);