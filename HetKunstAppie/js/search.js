import {getAndRenderData} from './mainScript.js'
import {searchInputSearchBar} from './variables.js'

//search
export function search() {
    let searchTerm = searchInputSearchBar.value
    let url =
      "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
      searchTerm +
      "&ps=5 "
    console.log(searchTerm)
    getAndRenderData(url)
  }

  searchInputSearchBar.addEventListener("keyup", function (e) {
    search();
  });