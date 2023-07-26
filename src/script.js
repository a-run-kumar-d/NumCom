const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const progress =  document.querySelector(".progress");
let resultBar = document.querySelector("#result");
const container = document.createElement("div");
const textArea = document.createElement("textarea");
const guessButton = document.createElement("button");

let flag = 0;
let res = "start guessing"

startButton.addEventListener("click", () => {
  if (flag == 0) {
    progress.style.display = "block"
    container.classList.add("contain");
    document.body.appendChild(container);

    textArea.classList.add("custom-text-area");
    textArea.setAttribute("id", "inputArea");
    container.appendChild(textArea);

    guessButton.classList.add("btn");
    guessButton.setAttribute("id", "guess");
    guessButton.innerHTML = "Guess";
    container.appendChild(guessButton);
    flag = 1;
  }
});

guessButton.addEventListener("click",()=>{
    let inputValue = textArea.value;
    console.log(inputValue);
})