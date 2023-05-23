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
  // words: ["Liechtenstein", "Singapore", "Argentina", "Switzerland", "Malaysia"],
  Easy: ["China", "India", "Spain", "Qatar", "Italy", "Japan", "Brazil", "Canada"],
  Medium: ["Singapore", "Malaysia", "Thailand", "Germany", "New Zealand", "Australia", "Phillipines"],
  Hard: ["Liechtenstein", "Switzerland", "Luxemborg", "Turkmenistan", "Venezuela", "Zimbabwe"],
  usedLetters: [],
  triesLeft: 6,
  secretWord: (level) => {
    console.log(game[level])
    return game[level][Math.floor(Math.random() * game[level].length)]
  },

}
/*----- cached elements  -----*/
const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const gameOverScreen = document.querySelector('#gameOverScreen');
const winScreen = document.querySelector('#winScreen');
const difficultyScreen = document.querySelector('#difficultyScreen');

const startButton = document.querySelector("#startButton");
const easyButton = document.querySelector('#easyButton');
const mediumButton = document.querySelector('#mediumButton');
const hardButton = document.querySelector('#hardButton');
const returnButton = document.querySelector('#returnButton');

let tries = document.querySelector('#tries');
let secretWord;
let letter;

/*----- event listeners -----*/
startButton.addEventListener("click", handleStart);
easyButton.addEventListener("click", (event) => handleDifficulty(event));
mediumButton.addEventListener("click", (event) => handleDifficulty(event));
hardButton.addEventListener("click", (event) => handleDifficulty(event));
returnButton.addEventListener("click", handleReturn);

/*----- functions -----*/
//!!!!!!!!!!!!!!! VIEW (render) !!!!!!!!!!!!!!!!!!!!!!!
function renderScreen() {
  startScreen.classList.add("hide");
  difficultyScreen.classList.add("hide");
  gameScreen.classList.add("hide");
  gameOverScreen.classList.add("hide");
  winScreen.classList.add('hide');
  
  document.querySelector(`#${game.screen}`).classList.remove("hide");
}
function renderTry() {
  document.querySelector('#tries').innerText = "Tries left:" + game.triesLeft;
}



//!!!!!!!!!!!!!!!!! CONTROLLER (logic) !!!!!!!!!!!!!!!!!!!

function handleStart() {
  game.screen = "difficultyScreen";
  renderScreen();
}

function handleDifficulty(event){
  let difficulty = event.target.innerText;
  game.screen = "gameScreen";
  secretWord = game.secretWord(difficulty);
  console.log(secretWord);
  renderScreen();
  renderTry();
  createWord();
  keypressEvent();
}

function createWord() {
  for (let i = 0; i < secretWord.length; i++)
  {
    letter = document.createElement("h3");
    letter.innerText = secretWord.charAt(i);
    console.log(letter);
    gameScreen.appendChild(letter);
    letter.classList.add("horizontal");
    letter.classList.add("hide-text");
    letter.classList.add(letter.innerText.toLowerCase());
  }  
}

function keypressEvent() {
  document.addEventListener('keypress', function(event) {
    
      console.log(event.key);
        if (secretWord.toLowerCase().includes(event.key))
        {
          Array.from(document.getElementsByClassName(event.key)).forEach((element) => element.classList.remove('hide-text'));
          checkIfWordGuessed();
        }
        else
        {
        game.triesLeft--;
        renderTry();
        gameOver();
        }
      })
}

function gameOver(){
  if (game.triesLeft === 0) {
    game.screen = "gameOverScreen";
    renderScreen();
  }
}

function checkIfWordGuessed() {
  let wordArray = [];
  Array.from(document.getElementsByClassName('horizontal')).forEach((elem) => {
    if (elem.classList.contains('hide-text'))
     wordArray.push(1);
     console.log(wordArray);
  });
  winGame(wordArray);
}

function winGame(array){
  if (array.length === 0) 
  {
    console.log('win');
    game.screen = "winScreen";
    renderScreen();
  }    
}

function handleReturn() {
  game.screen = "startScreen";
  restartGame();
}

function restartGame(){
  let elements = document.querySelectorAll('.horizontal');
  console.log(elements);
  elements.forEach(element =>  {
    element.remove();
  });
  game.triesLeft = 6;
  // document.removeEventListener('keypress', )
  renderTry();
  renderScreen();
}