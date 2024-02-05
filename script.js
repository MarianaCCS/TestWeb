"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
//const noButton = document.querySelector(".btn--no");
const dinoImg = document.querySelector(".dino-img");
let button = document.querySelector("#button2")
const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);
button.addEventListener("mouseover",movementBTN);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  } 
});

function handleYesClick() {
  titleElement.innerHTML = "Te amo ❤️";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}




function changeImage(image) {
  dinoImg.src = `img/dino_${image}.jpg`;
}


function movementBTN(){
    if (button.classList.contains("normal")){
        button.classList.replace("normal","move1");
    } else if (button.classList.contains("move1")){
        button.classList.replace("move1","move2");
    } else if (button.classList.contains("move2")){
        button.classList.replace("move2","move3");
    } else if (button.classList.contains("move3")){
        button.classList.replace("move3","move4");
    } else if (button.classList.contains("move4")){
        button.classList.replace("move4","move5");
    } else if (button.classList.contains("move5")){
      button.classList.replace("move5","normal");
    }

}