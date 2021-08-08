const axios = require('axios');

class AnimeDetails extends HTMLElement {
  set animeId(value) {
    this._animeId = value;
  }

  async connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.innerHTML = '<h2>Loading...</h2>';
      const result = await axios.get(`https://api.jikan.moe/v3/anime/${this._animeId}`);
      this.result = result.data;
      console.log(this.result);
      this.render();
    } catch (error) {
      console.log(error);
      this.onErrorRender();
    }
  }

  render() {
    this.innerHTML = `
    <div class='anime-details-image'>
      <img src="${this.result.image_url}" alt="${this.result.title}" />
    </div>
    <div class='anime-details-content'>
      <h2>${this.result.title}</h2>
      <br />
      <p><strong>Rank:</strong> ${this.result.rank}</p>
      <p><strong>Score</strong> ${this.result.score}/10</p>
      <p><strong>Type:</strong> ${this.result.type}</p>
      <p><strong>Episodes:</strong> ${this.result.episodes}</p>
      <p><strong>Status:</strong> ${this.result.airing ? 'Airing' : 'Completed'}</p>
      <p><strong>Premiered:</strong> ${this.result.premiered}</p>
      <p><strong>Genres:</strong> ${this.result.genres.map((genre) => genre.name).join(' ')}</p>
      <br />
      <p>Synopsis: ${this.result.synopsis}</p>
    </div>
    `;
  }
}

customElements.define('anime-details', AnimeDetails);
