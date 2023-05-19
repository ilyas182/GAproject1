* data
    - choice of words
    - secret word
    - guessed letters
    - player guess
    - tries left
    - show message (win/lose state) 

* logic
* render

* pseudocode
    - secret word to be randomly selected from choice of words 
    - player to use keyboard to guess secret word
    - catch every keypress event
        1) for every wrong guess, minus 1 from 'tries left' 
        2) for every corret guess, make letter(s) appear on screen
    - game state
        1) lose if out of tries left without guessing word
        2) win if managed to guess word without finishing tries

//!!!!!  CODE !!!!!!!!!!!!!
// MODEL    
/*----- constants -----*/

/*----- state variables -----*/


/*----- cached elements  -----*/

/*----- event listeners -----*/


/*----- functions -----*/
// VIEW (render)
// CONTROLLER (logic)