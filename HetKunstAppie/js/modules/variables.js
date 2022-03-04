export const searchInputSearchBar = document.querySelector("#searchInput")
export const itemsSection = document.querySelector("#items")
export let resultLength = 8
export let url = "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&ps=" + resultLength

// searchError
export const artistsForError = [
    "Rembrandt",
    "Vermeer",
    "Hals",
    "Cuyp",
    "Asselijn",
    "Steen",
  ]