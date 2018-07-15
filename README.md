# momath-math-sq
MoMath Hackathon 2018 - Math Square

## Taylor Polynomial Interactive Visualization

*File Location: taylor.js*

The **Taylor Polynomial Interactive Visualization** for the National Museum of Mathematics *Math Square* exhibit creates the opportunity for collaborative, hands-on exploration of one of the most fascinating, powerful results of calculus: the Taylor expansion.

#### Interactive Visualization with Math Square

This exhibit allows a group of museum goers to see the power of Taylor polynomials firsthand. For each museum viewer detected on the *Math Square* by its sensors, the visualization adds an additional term to the finite Taylor expansion of the underlying function. The Taylor expansions and the function that they are approximating are graphed alongside each other on the same set of axes, illustrating their relationship and showing the power granted by additional terms. Museum goers are encouraged to invite passers-by to join in on the fun as they endeavor to build the best possible approximation.

#### About Taylor Series

Infinitely differentiable, real or complex-valued functions can be expanded into an equivalent infinite series, known as a *Taylor series*. This can allow transcendental functions like sine, cosine and the exponential function to be expressed in terms of power series with elegant properties.

Finite Taylor polynomials, consisting of the first *n* terms of a Taylor series, can provide a useful approximation of the underlying function. With an increasing number of terms, this approximation improves. The Taylor series, with infinitely many terms, converges to the function itself.

#### Exhibit Features

* Multiple functions: exponential function, sine, cosine
* Displays Taylor polynomials concurrently with the function
* Taylor polynomials graphed up to the 7th term
* Interactive & collaborative: passers-by join in on the fun! Build the best possible approximation
* Helps the audience develop intuition for the nature of the Taylor series

## Linear Regression Game

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

