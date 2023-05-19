// data
    // - choice of words
    // - secret word
    // - guessed letters
    // - player guess
    // - tries left
    // - show message (win/lose state) 

// * logic
// * render

// * pseudocode
//     - secret word to be randomly selected from choice of words 
//     - player to use keyboard to guess secret word
//     - catch every keypress event
//         1) for every wrong guess, minus 1 from 'tries left' 
//         2) for every corret guess, make letter(s) appear on screen
//     - game state
//         1) lose if out of tries left without guessing word
//         2) win if managed to guess word without finishing tries

//!!!!!  CODE !!!!!!!!!!!!!
// MODEL    
/*----- constants -----*/

/*----- state variables -----*/
const game = {
  screen: "startScreen",
  words: ["Liechtenstein", "Singapore", "Argentina", "Switzerland", "Malaysia"],
  usedLetters: [],
  triesLeft: 6,
  secretWord: () => game.words[Math.floor(Math.random()*game.words.length)],

}
/*----- cached elements  -----*/
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");

const startButton = document.querySelector("#startButton");

let tries = document.querySelector('#tries');
/*----- event listeners -----*/
startButton.addEventListener("click", handleStart);

/*----- functions -----*/
//!!!!!!!!!!!!!!! VIEW (render) !!!!!!!!!!!!!!!!!!!!!!!
function renderScreen() {
  startScreen.classList.add("hide");
  gameScreen.classList.add("hide");
  
  document.querySelector(`#${game.screen}`).classList.remove("hide");
}

//!!!!!!!!!!!!!!!!! CONTROLLER (logic) !!!!!!!!!!!!!!!!!!!

function handleStart() {
  game.screen = "gameScreen";
  renderScreen();
}