import {rotateInfoBotton, rotateInfoText} from "./variables.js"

const rotateHelpTextToggle = () => {
    rotateInfoText.classList.toggle("visible")
}

rotateInfoBotton.addEventListener("click", rotateHelpTextToggle);