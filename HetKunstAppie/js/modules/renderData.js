import { itemsSection } from "./variables.js";

export const renderHTML = (data, id) => {
  if (!id) {
    renderDatanoId(data);
    console.log("render zonder ID");
  } else {
    item(data, id);
    console.log("render met ID: " + id);
  }
};

// Render with no ID
export const renderDatanoId = (data) => {
  data.artObjects.forEach((kunst) => {
    itemsSection.insertAdjacentHTML(
      "afterbegin",
      `<li class="kunstStukSection">
          <a href="#art/${kunst.id}">
            <h2>${kunst.title} <br> <i> ${
        kunst.principalOrFirstMaker
      } </i></h2> <img src="${kunst.webImage.url.slice(0, -3) + "=s1000"}">
          </a>
        </li>`
    );
  });
};

// Render with ID
const item = (data, id) => {
  const filter = data.artObjects.filter((item) => item.id === id);

  const title = filter.map((item) => item.longTitle);
  const maker = filter.map((item) => item.principalOrFirstMaker);
  const image = filter.map((item) => item.webImage.url);

  console.log(filter);
  if (filter.length === 0) {
    console.log("leeg :(");
    window.location.replace("./");
  }

  itemsSection.insertAdjacentHTML(
    "afterbegin",
    `<li class="kunstStukSectionDetails" id="artDetail">
          <img src="${image}">
          <h2>${title} <br> <i>- ${maker}</i> <span>Tap artwork to zoom in</span></h2>
      </li>`
  );

  // Zoom for artwork
  let artWorkScale = 1;
  const detailItemSection = document.querySelector("#artDetail");
  const detailItemSectionImg = document.querySelector("#artDetail img");
  const zoomInArtwork = () => {
    artWorkScale = artWorkScale * 2;
    if (artWorkScale > 8) {
      artWorkScale = 1;
    }
    console.log(artWorkScale);
    detailItemSectionImg.className = "";
    detailItemSectionImg.classList.add(
      "artWorkScaleTranslate" + artWorkScale + ""
    );
  };

  detailItemSection.addEventListener("click", zoomInArtwork);
};
