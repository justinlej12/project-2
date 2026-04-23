import { LitElement, html, css } from "lit";

export class CrestCarousel extends LitElement {

  static properties = {
    index: { type: Number }
  };

  constructor() {
    super();
    this.index = 0;

    this.images = [
      "https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZiUyMGNvdXJzZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1700667315305-ef2a027f9078?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZiUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://www.golfcoursearchitecture.net/images/ULN-1_web.jpg",
      "https://i0.wp.com/capemaymag.com/site/wp-content/uploads/golfc.jpg?resize=800%2C514&ssl=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/38/05/38/rivercrest-clubhouse.jpg?w=1200&h=-1&s=1",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvg8SlW47SFDkGqWaTmSi2A55OBBSrE2iIzA&s",
      "https://www.gccsc.com/images/dynamic/getImage.gif?ID=103185"
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