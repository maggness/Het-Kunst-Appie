const searchIcon = document.querySelector("#seach")
const searchField = document.querySelector("#searchField")
const leftButton = document.querySelector("#leftButton")
const rightButton = document.querySelector("#rightButton")
let translateXSchilderij = 0

function zoekenOpenen() {  
    searchField.classList.toggle("uitklappen");
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
  
  searchIcon.addEventListener("click", zoekenOpenen);
  leftButton.addEventListener("click", leftImages);
  rightButton.addEventListener("click", rightImages);