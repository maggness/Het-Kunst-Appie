import { itemsSection, searchInputSearchBar } from "./variables.js";

// Dont mind this
export const searchEasterEggs = () => {
  let searchTerm = searchInputSearchBar.value;
  if (
    searchTerm === "makearttiny" ||
    searchTerm === "make art tiny" ||
    searchTerm === "Make art tiny"
  ) {
    itemsSection.style.transition = "1s";
    itemsSection.style.transform = "scale(.3)";
  }
};
