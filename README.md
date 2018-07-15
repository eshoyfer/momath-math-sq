# momath-math-sq
# MoMath Hackathon 2018: "Expressions" - Math Square

Learn more about the MoMath *Math Square*: http://moeyinc.com/math-square/.
From their website:
*Math Square is an interactive installation that includes a series of different math games users play by stepping across the floor. This playful interface introduces complex math concepts such as fractals, mazes and the Voronoi algorhytm in an engaging manner. Moey built and designed Math Square in collaboration with the team at MoMath.*

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

## Ramsey Theory Demonstration 
*File Location: ramsey-theory/ramsey_theory.js*

#### Introduction

The demonstration contained is intended to present a simple to understand yet deep and impressive result in mathematics. The problem at hand can be concretely posed: how many people must be present at a gathering to guarantee that either 3 of them are mutual friend, or that 3 of them are mutual strangers. The answer turns out to be 6, and for any other lower number, there exist counter examples. The problem is not only simple to state, but has a solution that doesn't require heavy mathematical machinery, but remains concise and clever. This little result is a great way to pique many people's interest in math. The problem also abstracts and generalizes naturally, leading to the established field of Ramsey Theory.

#### Demonstration

The `behs` files `ramsey_theory.js` is located in the `ramsey-theory` directory and is created for the MoMath math square exhibit. It is intended for 3-6 people. The natural abstraction of the above problem is to consider people as vertices, and relationships between them as edges. If an edge is blue, the people are strangers. If an edge is red, the people are friends. Thus the situation is fully described by a complete graph on n vertices, K_n. The question we asked was whether an arbitrary two-coloring of the edges always yields some triangle that is only one color. As we mentioned, the case is only yes once we reach n=6. 

When 3-5 people are on the board, a counterexample to the problem for that many people is displayed. Once 6 people appear on the board, an arbitrary two coloring of the graph is provided, and a triangle colored by a single color is highlighted. We hope this demonstrates the problem and incites the participant to think about the solution.

#### Algorithms

This is a somewhat small example compared to questions in general Ramsey Theory. For instance, when finding a one-color triangle, we know that we probably shouldn't check more than (6 Choose 3) = 30 distinct triangles in the K_6. But even that is not exactly trivial, as the general question of enumerating k-combinations of a set could take some work. For instance, one can use lexicographic ordering or gray codes to avoid repetitions in the enumeration.

#### Technical Remarks
 
Since the most interesting and important part of the demonstration happens when 6 people are on the board, when the code is ran on desktop or for a demo, there is a default number of 6 ghost users roaming about, so the counterexamples don't show up directly. However, they are not hard to find and the ghost number can quickly be adjusted to view them. One could also easily opt for a static K_6 to only focus on the highlighting--although default coordinate points for that have not been provided. Instead, one could set the ghostRate to 0. 

#### The Solution
We explain the solution to the problem here, after encouraging the reader to try it on their own first. Choose some vertex V. It has 5 neighbors since the graph is complete. By the pigeonhole principle, at least 3 must be one one color, say red. Call those vertices A, B, and C. If any of the edges AB, AC, or BC are red, say AB, then PA, PB, and AB form a red triangle. If none of then are red, then AB, AC, and BC are blue and form blue triangle ABC. Thus some one-colored triangle must exist. 
