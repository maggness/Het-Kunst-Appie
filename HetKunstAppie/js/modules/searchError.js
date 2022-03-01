import './search.js'
import {searchInputSearchBar, itemsSection, artistsForError} from './variables.js'

export function searchError(data) {
    let searchTerm = searchInputSearchBar.value
    if (data.artObjects.length === 0) {
      const artistName =
        artistsForError[Math.floor(Math.random() * artistsForError.length)]
      itemsSection.insertAdjacentHTML(
        "afterbegin",
        "We found nothing with '" +
          searchTerm +
          "', try a name like " +
          artistName +
          "."
      )
    }
  }