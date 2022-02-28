import {itemsSection} from './variables.js'

export function renderData(data) {
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