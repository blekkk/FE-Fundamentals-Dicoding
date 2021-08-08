class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2><a href=".">Dicoding Anime</a></h2>
      <h2>Search your favourite anime</h2>
    `;
  }
}

customElements.define('app-header', Header);
