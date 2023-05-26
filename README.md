# MVP - Minimum Viable Product

## Project Brief
- Built with HTML, CSS and JavaScript (jQuery is strongly optional)
- Use Javascript for DOM manipulation
- Hosted on Github pages
- Commits to Github frequently
- A README.md file with explanations of the technologies used, the approach taken, a link - to your live site, installation instructions, unsolved problems, etc.
- Be displayed in the browser
- Have some kind of user interaction via mouseclick or keypress

## Timeframe
1 week

## Technologies & Tools Used
- HTML
- CSS
- JavaScript
- Git & GitHub
- Vercel

## Description
This is a classic hangman game adapted to a more kid friendly version. It was designed using HTML, CSS & Javascript during the Software Engineering Immersive @ General Assembly.

## Deployment
The game was deployed live using Vercel at the following link:
https://g-aproject1-ilyas182.vercel.app/

## Wireframe
Before creating the code, I drafted the different screens that I foresee was needed for the game. This helped me to get an overview and a rough idea of the kinds of HTML and CSS codes that was needed for the game. Anything that needed to be added could be improvised at a later stage.

## Game Development 
After the wireframe was done, the next step was to create a MVC approach pseudocode for all possible scenarios of the game. 

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

## Summary & Key Learnings
1. I have never created something like this before hence, it looked like a daunting task initially. Our instructor taught us to to break down the problems into smaller ones which helped.  

2. The MVC (Model-View-Controller) concept was new to me. I wasn't sure whether I could implement it but I still managed to in the end. I was pleased with how it turned out. It made the codes looked very organized and clean. 

3. During the trial homework (Tic tac toe), I felt that I was struggling to do it. I feared that if I took on a harder challenge within a small timeframe, it may be overwhelming. Now that it's completed, I have gained slightly more confidence to take on a more challenging task.