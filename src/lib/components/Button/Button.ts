export class ButtonComponent extends HTMLButtonElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const variant = this.getAttribute("variant") || "primary";

    this.shadowRoot!.innerHTML = `
      <style>
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .primary {
          background-color: #007bff;
          color: white;
        }
        .secondary {
          background-color: #f0f0f0;
          color: #333;
        }
        .icon {
          background: transparent;
          border: none;
          padding: 4px;
        }
        .link {
          background: none;
          border: none;
          color: #007bff;
          text-decoration: underline;
          padding: 0;
        }
      </style>
      <button class="${variant}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("button-component", ButtonComponent, { extends: "button" });
