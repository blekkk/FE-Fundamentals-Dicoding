import './search-input';

class Wrapper extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <search-input></search-input>
    `;
  }
}

customElements.define('content-wrapper', Wrapper);
