import { LitElement, html, css } from "lit";

export class CrestCarousel extends LitElement {

  static properties = {
    index: { type: Number }
  };

  constructor() {
    super();
    this.index = 0;

    this.images = [
      "https://images.unsplash.com/photo-1592919505780-303950717480",
      "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2",
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
      "https://images.unsplash.com/photo-1579952363877-27f3bade9f55",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    ];
  }

  static styles = css`
    .container {
      position: relative;
      max-width: 600px;
      margin: auto;
    }

    .image-wrapper {
      width: 100%;
      height: 350px;
      overflow: hidden;
      border-radius: 12px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: black;
      color: white;
      border: none;
      padding: 8px;
      cursor: pointer;
    }

    .prev { left: 0; }
    .next { right: 0; }
  `;

  next() {
    this.index = (this.index + 1) % this.images.length;
  }

  prev() {
    this.index = (this.index - 1 + this.images.length) % this.images.length;
  }

  render() {
    return html`
      <div class="container">
        <div class="image-wrapper">
          <img src="${this.images[this.index]}" />
        </div>
        <button class="prev" @click=${this.prev}>◀</button>
        <button class="next" @click=${this.next}>▶</button>
      </div>
    `;
  }
}

customElements.define("crest-carousel", CrestCarousel);