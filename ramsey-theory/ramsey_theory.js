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
    //console.log(floor.users.length);
    var numUsers = floor.users.length;
    if(numUsers == 0 || numUsers == 1 || numUsers == 2){
	var s = 'Have at least 3 people step on the square! How many are required such that any coloring of the triangles has a triangle with only 1 color?';
	this.fill(100);
	this.text(s, 278, 278, 100, 100);
    }
    if(numUsers == 6){
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
	    var newPairs = listOfPairs.slice(36, 72);
	    listOfPairs = newPairs;
	}
	console.log(listOfPairs.length);
    }

    var tris = getAllTriangles();

    //console.log("Num of all tris: " tris.length);
    
    //for(var i = 0; i < listOfPairs.length; i++){
    //   var obj = listOfPairs[i];
    //   //console.log(obj["user1"]);
    //   //console.log(obj["user2"]);
    //   console.log(obj["color"]);
    // }

    var someUnicolorTri = undefined;
    for(var i = 0; i <= tris.length; i++){
	if(triangleUnicolor(tris[i])){
	    //console.log("UNICOLOR TRIANGLE");
	    someUnicolorTri = tris[i];
	    break;
	}
    }

    console.log(someUnicolorTri.length);
    
    for(var i = 0; i < listOfPairs.length; i++){
	var pair = listOfPairs[i];
	var u1 = pair["user1"];
	var u2 = pair["user2"];
	var color = pair["color"];
	this.stroke(color);
	this.line(u1.x, u1.y, u2.x, u2.y);
	//if(someUnicolorTri.includes(pair)){
	  //  this.strokeWeight(10);
	  //  this.line(u1.x, u1.y, u2.x, u2.y);
	//}
	if(numUsers == 6){
	    pb.drawUser(u1);
	}
	var s = '6 people is enough to force a triangle to be of one color! This could be interpreted as saying that 3 of you are all strangers, or 3 of you are all friends! Check our Ramsey theory for similar results.';
	this.fill(100);
	this.strokeWeight(1);
	this.text(s, 370, 370, 180, 180);
    }

    
    //this.stroke("#ffff00");
    this.strokeWeight(7);
    var tri = someUnicolorTri;
    var a = tri[0];
    var a1 = a["user1"];
    var a2 = a["user2"];
    var col = a["color"];
    this.stroke(col);
    this.line(a1.x, a1.y, a2.x, a2.y);
	
    var b = tri[1];
    var b1 = b["user1"];
    var b2 = b["user2"];
    this.line(b1.x, b1.y, b2.x, b2.y);

    var c = tri[2];
    var c1 = c["user1"];
    var c2 = c["user2"];
    this.line(c1.x, c1.y, c2.x, c2.y);
   
    }else if (numUsers == 3){
	//console.log(listOfPairs.length % 3);
	this.stroke(red);
	this.strokeWeight(4);
	this.line(50,50, 100, 100);	
	this.stroke(blue);
	this.line(100, 100, 120, 250);
	this.line(120, 250, 50, 50);
	var s = 'False! See the counterexample. Try adding a person!';
	this.fill(110);
	this.stroke(1);
	this.text(s, 250, 250, 70, 80);
    }else if (numUsers == 4){
	//console.log(listOfPairs.length % 3);
	this.stroke(blue);
	this.strokeWeight(4);
	this.line(50,50, 50, 200);	
	this.stroke(red);
	this.line(50, 200, 150, 300);
	this.stroke(blue);
	this.line(150, 300, 50,50);
	this.stroke(blue);
	this.line(150, 300, 300, 10);
	this.stroke(red);
	this.line(50, 50, 300, 10);
	this.line(300,10, 50, 200);
	var s = 'False! See the counterexample. Try adding a person!';
	this.fill(110);
	this.stroke(1);
	this.text(s, 250, 250, 70, 80);
    }
    else if (numUsers == 5){
	//console.log(listOfPairs.length % 3);
	this.stroke(red);
	this.strokeWeight(4);
	this.line(50,50, 50, 200);	
	this.stroke(red);
	this.line(50, 200, 150, 300);
	this.stroke(blue);
	this.line(150, 300, 50,50);
	this.stroke(blue);
	this.line(150, 300, 300, 10);
	this.stroke(red);
	this.line(50, 50, 300, 10);
	this.stroke(blue);
	this.line(300,10, 50, 200);
	this.stroke(red);
	this.line(400, 200, 300, 10);
	this.stroke(blue);
	this.line(400, 200, 50, 200);
	this.stroke(blue);
	this.line(400,200, 50, 50);
	this.stroke(red);
	this.line(400, 200, 150, 300);
	var s = 'False! See the counterexample. Try adding a person!';
	this.fill(110);
	this.stroke(1);
	this.text(s, 330, 330, 70, 80);

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
	var uni = ((tri[0]["color"] === tri[1]["color"]) && (tri[1]["color"] === tri[2]["color"]))
    }catch(err){
	return false;
    }
    return uni;
}


export const behavior = {
    title: "Maximal Graph (P5)",
    init: pb.init.bind(pb),
    frameRate: 'sensors',
    render: pb.render.bind(pb),
    numGhosts: 6;
    maxUsers: 6;
    ghostRate: 0.001;
};
export default behavior
