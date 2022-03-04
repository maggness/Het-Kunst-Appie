import {getAndRenderData} from './getData.js'
import {searchInputSearchBar, resultLength} from './variables.js'

//search
function search() {
    let searchTerm = searchInputSearchBar.value
    let url =
      "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
      searchTerm +
      "&ps=" + resultLength
    console.log(url)
    getAndRenderData(url)
  }

  searchInputSearchBar.addEventListener("keyup", function (e) {
    search();
  });
  