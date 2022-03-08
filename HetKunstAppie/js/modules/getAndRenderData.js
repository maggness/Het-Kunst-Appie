import "./search.js";
import { renderHTML } from "./renderData.js";
import { itemsSection, searchInputSearchBar } from "./variables.js";
import { searchError } from "./searchError.js";

// Gets API Data
export const getAndRenderData = (id) => {
  let searchTerm = searchInputSearchBar.value;
  const apiLink = {
    url: "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb",
    searchValue: searchTerm,
    artLength: 8,
  };

  const { url, searchValue, artLength } = apiLink;
  const apiUrlUpdated = `${url}&q=${searchValue}&ps=${artLength}`;
  const data = fetch(apiUrlUpdated)
    .then((response) => response.json())
    .then((data) => {
      renderData(data, id, url);
    })
    .catch((err) => console.log(err));
};

// Shows HTML
export const renderData = (data, id, url) => {
  itemsSection.innerHTML = "";
  searchError(data);
  renderHTML(data, id, url);
};
