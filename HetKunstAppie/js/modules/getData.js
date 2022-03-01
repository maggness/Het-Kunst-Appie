import './search.js'
import {renderData} from './renderData.js'
import {searchError} from './searchError.js'
import {itemsSection} from './variables.js'

// Gets API Data
export function getAndRenderData(url) {
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderHTML(data)
    })
    .catch((err) => console.log(err))
}

// Shows HTML
function renderHTML(data) {
  itemsSection.innerHTML = ""
  searchError(data)
  renderData(data)
}
