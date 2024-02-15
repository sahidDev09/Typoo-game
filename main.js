function play() {
  const splash = document.getElementById("splash");
  splash.classList.add("hidden");

  const playground = document.getElementById("play-ground");
  playground.classList.remove("hidden");

  const alphabetStrings = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetStrings.split("");
  console.log(alphabets);

  const randomNumber = Math.random() * 25;
  const finalRandomNumber = Math.round(randomNumber);

  const alphabet = alphabets[finalRandomNumber];

  const display = document.getElementById("aplha-display");
  display.innerText = alphabet;

  const setbg = document.getElementById(alphabet);
  setbg.classList.add("bg-yellow-400");
}
