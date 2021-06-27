# MasterMind

Link to the website: https://mastermind-game-react.netlify.app

![‏‏לכידה](https://user-images.githubusercontent.com/76179660/123514820-73721d00-d69d-11eb-8327-b62d06a360b9.PNG)

Mastermind is a code-breaking game against the computer.

## What's New? UI, UX improvements

**UI**

1. The border is removed from the pegs which makes for a cleaner look.

2. The statistics page has a background and shows the table that is exported when the user clicks on the download icon.

3. When hovering over the title "MasterMind", the cursor stays as the default.

4. The level drop-down list is larger and easier to read.

**UX**

1. The guess messages correspond with the order of the pegs (from left to right).

2. A restart game button

3. Rules are shown only when the user first enters the site (using localStorage).

4. When hovering over a peg the cursor turns to a pointer, indicating it's clickable.

5. Shows timed message when the level is changed.

## Rules

The computer will generate a combination of 4 out of 7 unique colored pegs.

The player has 10 attempts to guess the correct combination.
For each guess, the player receives a result consisting of 3 colors according to the guess he made:

1. When the player guesses the correct color in the correct position they receive a “Direct Hit” (Black).
2. When the player guesses the correct color but in the wrong position they receive a “Hit” (White).
3. When the player guesses a color that does not appear in the combination they receive a “Miss” (Red).

When the player guesses the correct combination, the game is over and they receive a “You won!” message showing the numbers of attempts made to achieve the correct combination.

If the player doesn’t manage to guess the correct combination within 10 attempts they receive a “You lost!” message .

## What's New? UI, UX improvements

**UI**

1. The border is removed from the pegs which makes for a cleaner look.

2. The statistics page has a background and shows the table that is exported when the user clicks on the download icon.

3. When hovering over the title "MasterMind", the cursor stays as the default.

4. The level drop-down list is larger and easier to read.

**UX**

1. A restart game button

2. Rules are shown only when the user first enters the site (using localStorage).

3. When hovering over a peg the cursor turns to a pointer, indicating it's clickable.

## Installation

Install mastermind with npm

```bash
  npm install mastermind
  cd mastermind
  npm start
```
