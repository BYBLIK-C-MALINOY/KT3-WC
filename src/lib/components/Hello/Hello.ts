export default class HelloComponent extends HTMLElement {
  constructor() {
    super()
    this.textContent = "Hello"
  }
}

customElements.define("hello-component", HelloComponent)
