import { getAndRenderData } from "./getAndRenderData.js";
import { searchInputSearchBar, resultLength, itemsSection } from "./variables.js";

//search
const search = () => {
  let searchTerm = searchInputSearchBar.value;
  let url =
    "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" +
    searchTerm +
    "&ps=" +
    resultLength;
  console.log(url);

  if (searchTerm === "maketheitemstiny" || searchTerm === "make the items tiny" || searchTerm === "Make the items tiny") {
    itemsSection.style.transition = "1s"
    itemsSection.style.transform = "scale(.3)"
  }
};

searchInputSearchBar.addEventListener("keyup", function (e) {
  search();
  getAndRenderData();
});
