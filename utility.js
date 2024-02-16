function hideElements(hideID) {
  const hideElem = document.getElementById(hideID);
  hideElem.classList.add("hidden");
}

function showElements(showID) {
  const showElem = document.getElementById(showID);
  showElem.classList.remove("hidden");
}

function keybgShow(elemetnID) {
  const keyshow = document.getElementById(elemetnID);
  keyshow.classList.add("bg-orange-400");
}

function keybgHide(elemetnID) {
  const keyHide = document.getElementById(elemetnID);
  keyHide.classList.remove("bg-orange-400");
}

function randomAlphabet_fnc() {
  // genarate random alphabet

  const alphabetLetter = "abcdefghijklmnopqrstubwxyz";
  const alphabets = alphabetLetter.split("");
  const randomAlpha = Math.random(alphabets) * 25;
  const roundedAlpha = Math.round(randomAlpha);
  const alphabet = alphabets[roundedAlpha];

  return alphabet;
}
