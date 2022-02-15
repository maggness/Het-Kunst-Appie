const itemsSection = document.querySelector("#items");
const zoekenIcon = document.querySelector("#zoeken");
const zoekenField = document.querySelector("#zoekenField");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");
const searchInputSearchBar = document.querySelector("#searchInput");
const artistsForError = ['Rembrandt', 'Vermeer', 'Hals', 'Cuyp', 'Asselijn', 'Steen'];
let translateXSchilderij = 0;

const getAndRenderData = () => {
  let searchTerm = searchInputSearchBar.value;

  console.log(searchTerm);
  const getURL =
    "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
    searchTerm +
    "&ps=5";
  fetch(getURL)
    .then((response) => response.json())

    .then((response) => {
      itemsSection.innerHTML = "";

      if (response.artObjects.length === 0) {
        const artistName = artistsForError[Math.floor(Math.random()*artistsForError.length)]
        itemsSection.insertAdjacentHTML("afterbegin", "We found nothing with"+ searchTerm +", try a name like "+ artistName +".")
      }

      response.artObjects.forEach((kunst) => {

        itemsSection.insertAdjacentHTML(
          "afterbegin",
          `<li class="kunstStukSection"><p>${
            kunst.title
          } <br> ${
            kunst.principalOrFirstMaker
          }</p> <img id="imgtest" src="${
            kunst.webImage.url.slice(0, -3) + "=s1000"
          }"></li>`
        );
        imgtest.onload = setTimeout(function () {
            console.log(kunst.title + "loaded 1 sec ago");
               }, 1000);
      });

      response.artObjects.forEach((kunst) => {
        zoekenField.insertAdjacentHTML(
          "afterbegin",
          `<li><p>${kunst.title}</p> <img loading="lazy" src="${
            kunst.webImage.url.slice(0, -3) + "=s1000"
          }"></li>`
        );
      });
    })

    .catch((error) => console.log(error))
};

getAndRenderData();

function zoekenOpenen() {
  zoekenField.classList.toggle("uitklappen");
}

function leftImages() {
  const KunstStukDing = document.querySelectorAll(".kunstStukSection");
  translateXSchilderij = translateXSchilderij + 200;
  if (translateXSchilderij > 0) {
    translateXSchilderij = -800;
  }
  KunstStukDing.forEach((item) => {
    item.style.transform = "translateX(" + translateXSchilderij + "vh)";
  });
}

function rightImages() {
  const KunstStukDing = document.querySelectorAll(".kunstStukSection");
  translateXSchilderij = translateXSchilderij - 200;
  if (translateXSchilderij < -800) {
    translateXSchilderij = 0;
  }
  KunstStukDing.forEach((item) => {
    item.style.transform = "translateX(" + translateXSchilderij + "vh)";
  });
}

zoekenIcon.addEventListener("click", zoekenOpenen);
leftButton.addEventListener("click", leftImages);
rightButton.addEventListener("click", rightImages);

searchInputSearchBar.addEventListener("keyup", function (e) {
  getAndRenderData();
});


