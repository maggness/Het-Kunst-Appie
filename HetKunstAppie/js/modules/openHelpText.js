import { rotateInfoBotton, rotateInfoText } from "./variables.js";

// Open help text for rotation
const rotateHelpTextToggle = () => {
  rotateInfoText.classList.toggle("visible");
};

rotateInfoBotton.addEventListener("click", rotateHelpTextToggle);
