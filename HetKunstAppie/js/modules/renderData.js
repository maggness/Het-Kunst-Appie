import {itemsSection} from './variables.js'

export const renderHTML = (data, id) => {
  if (!id) {
    renderDatanoId(data)
    console.log('render zonder ID');
  }
  else {
    item(data, id)
    console.log('render met ID: ' + id);
  }
}

// Render with no ID
export const renderDatanoId = (data) => {
    data.artObjects.forEach((kunst) => {
      itemsSection.insertAdjacentHTML(
        "afterbegin",
        `<li class="kunstStukSection">
          <a href="#art/${kunst.id}">
            <h2>${kunst.title} <br> <i> ${kunst.principalOrFirstMaker} </i></h2> <img id="imgtest" src="${kunst.webImage.url.slice(0, -3) + "=s1000"}">
          </a>
        </li>`
      )
    })
  }

// Render with ID
const item = (data, id) => {

    const filter = data.artObjects.filter((item) => item.id === id)

    const title = filter.map((item) => item.title)
    const image = filter.map((item) => item.webImage.url)

    console.log(filter);
    if (filter.length === 0) {
      console.log('leeg :(');
      window.location.replace('./');
    }

    itemsSection.insertAdjacentHTML(
      "afterbegin",
      `<li class="kunstStukSectionDetails">
          <img id="imgtest" src="${image}">
          <br><br><br><br><h2>${title}</h2>
      </li>`
    )
  }
