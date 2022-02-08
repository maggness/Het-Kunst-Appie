let textLetterT = document.querySelector('#textLetterT');
let textLetterI = document.querySelector('#textLetterI');
let textLetterM = document.querySelector('#textLetterM');
let backgroundKaartjeSection = document.querySelector('#kaartjeSection');
let infoOnderSection = document.querySelector('#infoOnderaaaa');
let infoOverTimText = document.querySelector('#infoOverTim');
let KaartjeSectionbackup1 = document.querySelector('#Kaartjebackup1');
let KaartjeSectionbackup2 = document.querySelector('#Kaartjebackup2');
let KaartjeSectionbackup3 = document.querySelector('#Kaartjebackup3');
let TextVormNummer = 0;
let textInOverMij = ['Hoi ik ben Tim!', 'Ik ben Grapic Designer & Developer', 'Bekijk mijn website: www.timderoller.nl', 'Email me: Timderoller@gmail.com' , 'Bel me: 0645490344', 'Beweeg me!'];
let backgroundColor = ['Oranje', 'Red', 'Yellow', 'Green' , 'Blue', 'Paars'];

// getAndRenderData()

// function getAndRenderData () {
//     const getURL = 'https://tribe.api.fdnd.nl/v1/list'
//     fetch(getURL).then(response => response.json())
//     .then(response => {
//         console.log(response)
//         response.data.forEach(member => {
//             document.body.insertAdjacentHTML('beforebegin',`<p>${member.memberName} ${member.memberSurname}</p>`)
//         })
//     }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
// }


function hoverTextLetterT() {

    let minKans = 0;
    let maxKans = 5;
    let TextVormNummer = Math.floor( Math.random() * (maxKans-minKans+1) ) + minKans ;

    let TextVormNummerBackup1 = TextVormNummer + 1;
    let TextVormNummerBackup2 = TextVormNummer - 1;
    let TextVormNummerBackup3 = TextVormNummer + 2;

    backgroundKaartjeSection.classList.remove('backgroundOranje', 'backgroundRed', 'backgroundYellow', 'backgroundGreen', 'backgroundBlue', 'backgroundPaars');
    backgroundKaartjeSection.classList.add('background' + backgroundColor[TextVormNummer]);

    KaartjeSectionbackup1.classList.remove('backgroundOranje', 'backgroundRed', 'backgroundYellow', 'backgroundGreen', 'backgroundBlue', 'backgroundPaars');
    KaartjeSectionbackup1.classList.add('background' + backgroundColor[TextVormNummerBackup1]);

    KaartjeSectionbackup2.classList.remove('backgroundOranje', 'backgroundRed', 'backgroundYellow', 'backgroundGreen', 'backgroundBlue', 'backgroundPaars');
    KaartjeSectionbackup2.classList.add('background' + backgroundColor[TextVormNummerBackup2]);

    KaartjeSectionbackup3.classList.remove('backgroundOranje', 'backgroundRed', 'backgroundYellow', 'backgroundGreen', 'backgroundBlue', 'backgroundPaars');
    KaartjeSectionbackup3.classList.add('background' + backgroundColor[TextVormNummerBackup3]);

    console.log(backgroundColor[TextVormNummer]);

    infoOverTimText.textContent = textInOverMij[TextVormNummer];
}

function outTextLetterT() {
    backgroundKaartjeSection.classList.remove('backgroundRed');
}

dragElement(document.getElementById("backgroundKaartjeSection"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

textLetterT.addEventListener("mouseover", hoverTextLetterT);
textLetterI.addEventListener("mouseover", hoverTextLetterT);
textLetterM.addEventListener("mouseover", hoverTextLetterT);