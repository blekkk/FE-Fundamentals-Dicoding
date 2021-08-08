import './anime-item';

const axios = require('axios');

class AnimeList extends HTMLElement {
  constructor() {
    super();
    this.result = [];
  }

  set baseUrl(value) {
    this._baseUrl = value;
  }

  set sectionHeader(value) {
    this._sectionHeader = value;
  }

  async connectedCallback() {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.innerHTML = '<h2>Loading...</h2>';
      const result = await axios.get(`${this._baseUrl}`);
      this.result = result.data;
      console.log(this.result);
      this.render();
    } catch (error) {
      console.log(error);
      this.onErrorRender();
    }
  }

  onErrorRender() {
    this.innerHTML = `
      <h2>Something is wrong</h2>
    `;
  }

  render() {
    console.log(this.result);
    this.innerHTML = `
      <h2>${this._sectionHeader}</h2>
    `;
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'anime-list-wrapper');
    this.appendChild(wrapper);

    // forced to be this way because of bad api design
    if (this._baseUrl.includes('season')) {
      this.result.anime.slice(0, 50).forEach((anime) => {
        const animeItem = document.createElement('anime-item');
        animeItem.anime = anime;
        this.querySelector('#anime-list-wrapper').appendChild(animeItem);
      });
    } else if (this._baseUrl.includes('search')) {
      this.result.results.forEach((anime) => {
        const animeItem = document.createElement('anime-item');
        animeItem.anime = anime;
        this.querySelector('#anime-list-wrapper').appendChild(animeItem);
      });
    }
  }
}

customElements.define('anime-list', AnimeList);
