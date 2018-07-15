/* MoMath Math Square Behavior
 *
 *        Title: Maximal Graph
 *  Description: Displays maximal graph with each user as a node
 * Scheduler ID:
 *    Framework: P5
 *       Author: Allen He <he@momath.org>
 *      Created: 2017-05-23
 *       Status: works
 */

import P5Behavior from 'p5beh';

const pb = new P5Behavior();
var blue = "#0000FF";
var red = "#FF0000";
var dict = {};
var frameNum = 40;
var keys = [];
var listOfPairs = [];


pb.draw = function (floor, p) {  
    this.clear();
    if (frameNum % 40 == 0) {
	for (let u1 of floor.users){
            for (let u2 of floor.users){
		var rand_color = Math.random();    
		if (rand_color > 0.5){
                    listOfPairs.push({user1: u1, user2: u2, color: red});
		}
		else{
                    listOfPairs.push({user1: u1, user2: u2, color: blue});
		}
		
            }
	}
	if(listOfPairs.length > 36){
	    listOfPairs.splice(listOfPairs.length - 36);
	}
	console.log(listOfPairs.length);
    }
    
    // for(var i = 0; i < listOfPairs.length; i++){
    //   var obj = listOfPairs[i];
    //   //console.log(obj["user1"]);
    //   //console.log(obj["user2"]);
    //   console.log(obj["color"]);
    // }

    
    for(var i = 0; i < listOfPairs.length; i++){
	var pair = listOfPairs[i];
	var u1 = pair["user1"];
	var u2 = pair["user2"];
	var color = pair["color"];
	this.stroke(color);
	this.line(u1.x, u1.y, u2.x, u2.y);
	colorTriangle();
	pb.drawUser(u1);
    }
    
    frameNum+=1;
};

function colorTriangle(){
    

};


export const behavior = {
    title: "Maximal Graph (P5)",
    init: pb.init.bind(pb),
    frameRate: 'sensors',
    render: pb.render.bind(pb),
    numGhosts: 6
};
export default behavior
