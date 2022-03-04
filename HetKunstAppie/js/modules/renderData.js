import {itemsSection} from './variables.js'

export function renderData(data) {
    data.artObjects.forEach((kunst) => {
      itemsSection.insertAdjacentHTML(
        "afterbegin",
        `<li class="kunstStukSection" id="testid">
          <h2>${kunst.title} <br> <i> ${kunst.principalOrFirstMaker} </i></h2> <img id="imgtest" src="${kunst.webImage.url.slice(0, -3) + "=s1000"}">
        </li>
        `
      )
    })
  }

  // <article class="kunstStukSectionArticleHidden" id="test">
  //           <h3>${kunst.longTitle}</h3>
  //           <i>${kunst.principalOrFirstMaker}</i>
  //           <p>${kunst.productionPlaces}</p>
  //         </article>
