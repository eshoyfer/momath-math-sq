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

    var tris = getAllTriangles();
    console.log("Num of all tris: " tris.length);
    
    // for(var i = 0; i < listOfPairs.length; i++){
    //   var obj = listOfPairs[i];
    //   //console.log(obj["user1"]);
    //   //console.log(obj["user2"]);
    //   console.log(obj["color"]);
    // }

    var someUnicolorTri = undefined;
    for(var i = 0; i <= tris.length; i++){
	if(triangleUnicolor(tris[i])){
	    console.log("UNICOLOR TRIANGLE");
	    someUnicolorTri = tris[i];
	}
    }
    
    for(var i = 0; i < listOfPairs.length; i++){
	var pair = listOfPairs[i];
	var u1 = pair["user1"];
	var u2 = pair["user2"];
	var color = pair["color"];
	this.stroke(color);
	this.line(u1.x, u1.y, u2.x, u2.y);
	pb.drawUser(u1);
    }
    
    frameNum+=1;
};

//gT is short for getTriangle
function gT(a, b, c){
    return [listOfPairs[a], listOfPairs[b], listOfPairs[c]];
}

function getAllTriangles(){
    //tL is short for triangleList
    var tL = [];
    tL.push(gT(1,2,8));
    tL.push(gT(2,3,15));
    tL.push(gT(3,4,22));
    tL.push(gT(4,5,29));
    tL.push(gT(8,9,15));
    tL.push(gT(9,10,22));
    tL.push(gT(10,11,29));
    tL.push(gT(15,16,22));
    tL.push(gT(16,17,29));
    tL.push(gT(22,23,29));
    tL.push(gT(5,2,17));
    tL.push(gT(1,4,10));
    tL.push(gT(2,4,16));
    tL.push(gT(3,5,23));
    tL.push(gT(1,3,9));
    tL.push(gT(4,1,10));
    tL.push(gT(5,1,11));
    tL.push(gT(1,3,9));
    tL.push(gT(2,4,16));
    tL.push(gT(9,11,23));
    return tL;
}

function triangleUnicolor(tri){
    try{
	var bool = ((tri[0]["color"] == tri[1]["color"]) && (tri[1]["color"] == tri[2]["color"]));
    }
    catch(err){
	return false;
    }
    return bool;
}


export const behavior = {
    title: "Maximal Graph (P5)",
    init: pb.init.bind(pb),
    frameRate: 'sensors',
    render: pb.render.bind(pb),
    numGhosts: 6
};
export default behavior
