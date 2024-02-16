document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;

  const curalphaElem = document.getElementById("aplha-display");
  const expectedAlpha = curalphaElem.innerText.toLowerCase();

  if (playerPressed === expectedAlpha) {
    console.log("Hoooray! you won the game");

    // find score board and set score

    const dispayScore = document.getElementById("my-score");
    const score = dispayScore.innerText;
    const currentScore = parseInt(score);

    // score update by 1

    const newScore = currentScore + 1;

    //display score

    dispayScore.innerText = newScore;

    keybgHide(expectedAlpha);
    continueGame();
  } else {
    console.log("dur miah vhai");

    const currentLifeElement = document.getElementById("life-span");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    //life calculation

    const newLife = currentLife - 1;

    // display new life

    currentLifeElement.innerText = newLife;

    if (newLife < 0) {
      alert("Your life span in end, please buy new life");
      currentLifeElement.innerText = 0;
    }
  }
});

function continueGame() {
  const alphabet = randomAlphabet_fnc();

  const display = document.getElementById("aplha-display");
  display.innerText = alphabet;

  //set key highlights

  keybgShow(alphabet);
}

function myplay() {
  hideElements("splash");
  showElements("play-ground");
  continueGame();
}
