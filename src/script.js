const body = document.querySelector("body");
const startButton = document.querySelector("#start");
const progress = document.querySelector(".progress");
const container = document.createElement("div");
const textArea = document.createElement("textarea");
const guessButton = document.createElement("button");

let flag = 0;
let res = "start guessing";
let randomNumber = "";
count = 0;
let set = "none";
startButton.addEventListener("click", () => {
  if (flag == 0) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    progress.style.display = "block";
    container.classList.add("contain");
    document.body.appendChild(container);

    textArea.classList.add("custom-text-area");
    textArea.setAttribute("id", "inputArea");
    textArea.setAttribute("rows", "");
    textArea.style.resize = "none";
    container.appendChild(textArea);

    guessButton.classList.add("btn");
    guessButton.setAttribute("id", "guess");
    guessButton.innerHTML = "Guess";
    container.appendChild(guessButton);
    flag = 1;
  }
});

function checker(input) {
  if (input > randomNumber) {
    res = "try Lesser";
    count++;
  } else if (input < randomNumber) {
    res = "try More";
    count++;
  } else {
    res = `Congrats you won in ${count} tries press start to try again`;
    set = "success";
  }
}
function work() {
  let inputValue = textArea.value;
  textArea.value = "";
  checker(inputValue);
  progress.innerHTML = res;
  if (set == "success") {
    document.body.removeChild(container);
    set = "none"
    count = 0
    flag = "0"
  }
}
textArea.addEventListener("keydown",(e)=>{
  if (e.key === "Enter") {
    e.preventDefault();
    work();
  }
})
guessButton.addEventListener("click", ()=>{
  work();
});
