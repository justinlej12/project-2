import { LitElement } from "lit";

class CrestImage extends LitElement {

  static properties = {
    src: { type: String }
  };

  createRenderRoot() {
    return this;
  }

  async connectedCallback() {
    super.connectedCallback();

    const res = await fetch(this.src);
    const images = await res.json();

    images.forEach(img => {
      const el = document.createElement("img");
      el.src = img.src;
      el.style.width = "100%";
      el.style.marginBottom = "10px";
      this.appendChild(el);
    });
  }
}

customElements.define("crest-image", CrestImage);