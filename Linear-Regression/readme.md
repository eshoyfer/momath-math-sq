# MoMath _Math Square_ Linear Regression Game

### Overview

This Linear Regression game is made for the _Math Square_ at MoMath NYC. 
https://github.com/momath/math-square

The _Math Square_ is a walkable floor with a full-color 576x576 pixel display, overlaid with a 72x72 binary (on-off) sensor grid.
The floor is made up of 81 (9x9) identical squares, each with a 64x64 LED display and 8x8 touch sensors.

The challenge of the game is for players to move around the floor so that the line of best fit aligns with a target regression line. 
Once this is matched, a new target is made.
It teaches players how data coordinates affects the regression line which is not only dependant on the players position but also the number of users. The more players, the more collaboration required to win the game. 

#### About Linear Regression

Linear Regression is one of the most basic and widely used type of predictive analysis. It is used to explain the relationship between one dependent varible and one or more independent varible. 


#### Installation

Follow the instruction on https://github.com/momath/math-square. 
Place js file inside the /behs folder. 


#### Development

##### Finding Regression between user
Linear regresssion is found using the least square method and a line is then plotted by finding the min and max of x point. With these 2 x coordinates, we can then calculate the 2 corresponding y and then plot a line across these 2 coordinates. 

##### Target Line
The target line is a line where it crossed x @ 0 and x @ max dimension of the floor. y of these 2 coordinates are randomly generated.

##### Matching user regression and line
The game is won when the slope and intercept of the user regression and is within a certain threshold of the target line's respective slope and intercept. Once this is within range, a new target is drawn. 




