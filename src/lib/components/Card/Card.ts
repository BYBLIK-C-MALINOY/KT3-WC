export default class CardComponent extends HTMLElement {
  private template;

  constructor() {
    super();

    this.template = document.createElement("template");
    this.template.innerHTML = `
      <style>
        .card {
          min-height: 377px;
          width: 320px;
          border-radius: var(--radius-md);
          background-color: white;
          box-shadow: var(--shadow);
        }

        .card__header {
          max-height: 180px;
          width: 100%;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .card__content {
          padding: 25px 24px 11px 24px;
        }

        .card__footer {
          /* Настроить отступы и расположение */
        }

        ::slotted(img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        ::slotted(h3) {
          /* добавить стили для заголовка */
        }
        
        ::slotted(p) {
          /* добавить стили для текста */
        }

        ::slotted(button) {
          /* добавить стили для кнопок футера */
        }

        ::slotted(a) {
          margin-left: 50%;
          /* добавить стили для ссылок футера */
        }
               
        /* TODO постараться переиспользовать дизайн-токены из global.css */
      </style>

      <article class="card">
        <header class="card__header">
          <slot name="image"></slot>
        </header>
        <section class="card__content">
          <slot name="title"></slot>
          <slot name="content"></slot>
        </section>
        <footer class="card__ui">
          <slot name="ui"></slot>
        </footer>
      </article>
    `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(this.template.content.cloneNode(true));
  }
}

customElements.define("card-component", CardComponent);
