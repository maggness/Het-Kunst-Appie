import './search.js'
import './imageCarousel.js'
import {renderData} from './renderData.js'
import {searchError} from './searchError.js'
import {itemsSection, url} from './variables.js'

// First render
getAndRenderData(url)

// Gets API Data
export function getAndRenderData(url) {
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderHTML(data)
    })
    .catch((err) => console.log(err))
}

// Shows HTML
function renderHTML(data) {
  itemsSection.innerHTML = ""
  renderData(data)
  searchError(data)
}
