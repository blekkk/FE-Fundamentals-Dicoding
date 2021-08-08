import './search-input';
import './wrapper';
import './anime-details';

class AnimeItem extends HTMLElement {
  set anime(value) {
    this._anime = value;
    this.render();
  }

  renderAnimeDetails() {
    const animeDetailsElem = document.getElementById('anime-details');

    // if already exist delete it first
    if (animeDetailsElem) {
      animeDetailsElem.remove();
    }
    const animeDetails = document.createElement('anime-details');
    const searchForm = document.querySelector('search-input');
    animeDetails.setAttribute('id', 'anime-details');
    animeDetails.animeId = this._anime.mal_id;
    searchForm.parentNode.insertBefore(animeDetails, searchForm.nextSibling);

    window.location.href = '#anime-details';
  }

  render() {
    this.innerHTML = `
    <h3 id="anime-title">${this._anime.title}</h3>
    <div>
      <img src="${this._anime.image_url}" alt="${this._anime.title}" />
      <p>${this._anime.synopsis}</p>
    </div>
    `;
    this.querySelector('#anime-title').addEventListener('click', () => this.renderAnimeDetails());
  }
}

customElements.define('anime-item', AnimeItem);
