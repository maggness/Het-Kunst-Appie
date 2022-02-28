const itemsSection = document.querySelector("#items")
const searchIcon = document.querySelector("#seach")
const searchField = document.querySelector("#searchField")
const leftButton = document.querySelector("#leftButton")
const rightButton = document.querySelector("#rightButton")
const searchInputSearchBar = document.querySelector("#searchInput")
const artistsForError = [
  "Rembrandt",
  "Vermeer",
  "Hals",
  "Cuyp",
  "Asselijn",
  "Steen",
]
let translateXSchilderij = 0
let url = "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&ps=5"
let searchTerm = ""

getAndRenderData(url)

function getAndRenderData(url) {
  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderHTML(data)
    })
    .catch((err) => console.log(err))
}

function renderHTML(data) {
  itemsSection.innerHTML = ""
  searchError(data)
  renderData(data)
}

//search
function search() {
  let searchTerm = searchInputSearchBar.value
  let url =
    "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
    searchTerm +
    "&ps=5"
  console.log(url)
  getAndRenderData(url)
}

function searchError(data) {
  if (data.artObjects.length === 0) {
    const artistName =
      artistsForError[Math.floor(Math.random() * artistsForError.length)]
    itemsSection.insertAdjacentHTML(
      "afterbegin",
      "We found nothing with" +
        searchTerm +
        ", try a name like " +
        artistName +
        "."
    )
  }
}

function renderData(data) {
  data.artObjects.forEach((kunst) => {
    itemsSection.insertAdjacentHTML(
      "afterbegin",
      `<li class="kunstStukSection"><p>${kunst.title} <br> ${
        kunst.principalOrFirstMaker
      }</p> <img id="imgtest" src="${
        kunst.webImage.url.slice(0, -3) + "=s1000"
      }"></li>`
    )
  })
}

function zoekenOpenen() {
  searchField.classList.toggle("uitklappen")
}

function leftImages() {
  const KunstStukDing = document.querySelectorAll(".kunstStukSection")
  translateXSchilderij = translateXSchilderij + 200
  if (translateXSchilderij > 0) {
    translateXSchilderij = -800
  }
  KunstStukDing.forEach((item) => {
    item.style.transform = "translateX(" + translateXSchilderij + "vh)"
  })
}

function rightImages() {
  const KunstStukDing = document.querySelectorAll(".kunstStukSection")
  translateXSchilderij = translateXSchilderij - 200
  if (translateXSchilderij < -800) {
    translateXSchilderij = 0
  }
  KunstStukDing.forEach((item) => {
    item.style.transform = "translateX(" + translateXSchilderij + "vh)"
  })
}

searchIcon.addEventListener("click", zoekenOpenen)
leftButton.addEventListener("click", leftImages)
rightButton.addEventListener("click", rightImages)
searchInputSearchBar.addEventListener("keyup", function (e) {
  search()
})
