import 'regenerator-runtime';
import './components/search-input';
import './components/wrapper';
import './components/anime-list';

const app = () => {
  const contentWrapper = document.querySelector('content-wrapper');
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const renderSeasonalAnime = () => {
    const seasonalList = document.createElement('anime-list');
    seasonalList.setAttribute('id', 'seasonal-list');
    seasonalList.baseUrl = 'https://api.jikan.moe/v3/season/2021/summer';
    seasonalList.sectionHeader = 'Seasonal Anime (Summer 2021)';
    contentWrapper.appendChild(seasonalList);
  };

  const renderSearchResult = () => {
    const seasonalList = document.createElement('anime-list');
    seasonalList.setAttribute('id', 'search-list');
    seasonalList.baseUrl = `https://api.jikan.moe/v3/search/anime?q=${params.search}&page=1`;
    seasonalList.sectionHeader = 'Search Result';
    contentWrapper.insertBefore(seasonalList, document.querySelector('anime-list'));
  };

  if (Object.keys(params).length !== 0) {
    renderSeasonalAnime();
    renderSearchResult();
  } else {
    renderSeasonalAnime();
  }
};

export default app;
