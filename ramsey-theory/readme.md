## Ramsey Theory Demonstration 
#### `ramsey-theory/ramsey_theory.js`

### Introduction

The demonstration contained is intended to present a simple to understand yet deep and impressive result in mathematics. The problem at hand can be concretely posed: how many people must be present at a gathering to guarantee that either 3 of them are mutual friend, or that 3 of them are mutual strangers. The answer turns out to be 6, and for any other lower number, there exist counter examples. The problem is not only simple to state, but has a solution that doesn't require heavy mathematical machinery, but remains concise and clever. This little result is a great way to pique many people's interest in math. The problem also abstracts and generalizes naturally, leading to the established field of Ramsey Theory.

### Demonstration

The `behs` files `ramsey_theory.js` is located in the `ramsey-theory` directory and is created for the MoMath math square exhibit. It is intended for 3-6 people. The natural abstraction of the above problem is to consider people as vertices, and relationships between them as edges. If an edge is blue, the people are strangers. If an edge is red, the people are friends. Thus the situation is fully described by a complete graph on n vertices, K_n. The question we asked was whether an arbitrary two-coloring of the edges always yields some triangle that is only one color. As we mentioned, the case is only yes once we reach n=6. 

When 3-5 people are on the board, a counterexample to the problem for that many people is displayed. Once 6 people appear on the board, an arbitrary two coloring of the graph is provided, and a triangle colored by a single color is highlighted. We hope this demonstrates the problem and incites the participant to think about the solution.

### Algorithms

This is a somewhat small example compared to questions in general Ramsey Theory. For instance, when finding a one-color triangle, we know that we probably shouldn't check more than (6 Choose 3) = 30 distinct triangles in the K_6. But even that is not exactly trivial, as the general question of enumerating k-combinations of a set could take some work. For instance, one can use lexicographic ordering or gray codes to avoid repetitions in the enumeration.

### Technical Remarks
 
Since the most interesting and important part of the demonstration happens when 6 people are on the board, when the code is ran on desktop or for a demo, there is a default number of 6 ghost users roaming about, so the counterexamples don't show up directly. However, they are not hard to find and the ghost number can quickly be adjusted to view them. One could also easily opt for a static K_6 to only focus on the highlighting--although default coordinate points for that have not been provided. Instead, one could set the ghostRate to 0. 

### The Solution
We explain the solution to the problem here, after encouraging the reader to try it on their own first. Choose some vertex V. It has 5 neighbors since the graph is complete. By the pigeonhole principle, at least 3 must be one one color, say red. Call those vertices A, B, and C. If any of the edges AB, AC, or BC are red, say AB, then PA, PB, and AB form a red triangle. If none of then are red, then AB, AC, and BC are blue and form blue triangle ABC. Thus some one-colored triangle must exist. 

