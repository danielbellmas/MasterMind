# MasterMind

![‏‏לכידה](https://user-images.githubusercontent.com/76179660/123514820-73721d00-d69d-11eb-8327-b62d06a360b9.PNG)

Mastermind is a code-breaking game against the computer.

## Rules

The computer will generate a combination of 4 out of 7 unique colored pegs.

The player has 10 attempts to guess the correct combination.
For each guess, the player receives a result consisting of 3 colors according to the guess he made:

1. When the player guesses the correct color in the correct position they receive a “Direct Hit” (Black).
2. When the player guesses the correct color but in the wrong position they receive a “Hit” (White).
3. When the player guesses a color that does not appear in the combination they receive a “Miss” (Red).

When the player guesses the correct combination, the game is over and they receive a “You won!” message showing the numbers of attempts made to achieve the correct combination.

If the player doesn’t manage to guess the correct combination within 10 attempts they receive a “You lost!” message .

## Installation

Install mastermind with npm

```bash
  npm install mastermind
  cd mastermind
  npm start
```
