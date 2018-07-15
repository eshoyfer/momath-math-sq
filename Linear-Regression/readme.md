
### Linear Regression Game

*File Location: Linear-Regression/regression-TEST.js*

This Linear Regression game is made for the _Math Square_ at MoMath NYC. 
https://github.com/momath/math-square

The challenge of the game is for players to move around the floor so that the line of best fit aligns with a target regression line. 
Once this is matched, a new target is made.
It teaches players how data coordinates affects the regression line which is not only dependant on the players position but also the number of users. The more players, the more collaboration required to win the game. 

#### About Linear Regression

Linear Regression is one of the most basic and widely used type of predictive analysis. Used to explain the relationship between one dependent varible and one or more independent varible, its use impact our daily lifes. 
This interactive visualization is therefore beneficial for young museum vistors to understand the concept at an early age. 

#### Exhibit Features

* No limit of players-- the more players, the more interactive.
* Player have to work together to win.
* Effectively show the concepts of regressions such as how extreme outliers can affect the regression, weighted towards clusters of players etc..

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




