class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>© 2021 Blek. Made for Dicoding Submission</p>
    `;
  }
}

customElements.define('app-footer', Footer);
