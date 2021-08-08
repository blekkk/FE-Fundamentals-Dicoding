class SearchInput extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  get value() {
    return this.querySelector('#searchInput').value;
  }

  set clickEventHandler(handler) {
    this._clickEvent = handler;
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>
      Search your anime!
    </h2>
    <form>
      <input placeholder="Enter an Anime title" type="search" name="search" id="searchInput" required/>
      <button type="submit" id="submitBtn">Search</button>
    </form>
    `;

    this.querySelector('#submitBtn').addEventListener('submit', this._clickEvent);
  }
}

customElements.define('search-input', SearchInput);
