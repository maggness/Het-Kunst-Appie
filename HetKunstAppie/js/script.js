const itemsSection = document.querySelector('#items');
const zoekenIcon = document.querySelector('#zoeken');
const zoekenField = document.querySelector('#zoekenField');

const getAndRenderData =  () => {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&involvedMaker=Rembrandt+van+Rijn&ps=25'  
    fetch(getURL).then(response => response.json())
      .then(response => {
        console.log(response.artObjects)
        response.artObjects.forEach(kunst => {
            itemsSection.insertAdjacentHTML( 'afterbegin', `<section class="kunstStukSection"><p>${kunst.title}</p> <img loading="lazy" src="${kunst.webImage.url}"></section>`)
        })
        response.artObjects.forEach(kunst => {
            zoekenField.insertAdjacentHTML( 'afterbegin', `<li><p>${kunst.title}</p> <img loading="lazy" src="${kunst.webImage.url}"></li>`)
        })
      }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
  }

getAndRenderData()

function zoekenOpenen () {
    zoekenField.classList.toggle('uitklappen')
}

zoekenIcon.addEventListener("click", zoekenOpenen);