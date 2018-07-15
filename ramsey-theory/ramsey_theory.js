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
    var numUsers = floor.users.length;
    if(numUsers == 0 || numUsers == 1 || numUsers == 2){
	var s = 'Have at least 3 people step on the square! How many are required such that any coloring of the triangles has a triangle with only 1 color?';
	this.fill(100);
	this.text(s, 278, 278, 100, 100);
    }
    /*
      Main loop is here, demonstrates the friends and strangers theorem on K_6, the
      complete graph on 6 vertices. A random 2-coloring of the edges will result in a
      at least one triangle of one color.
    */
    if(numUsers == 6){
	/*
	  Run this loop every 40 frames as to slow down how quickly colorings
	  change without slowing down user's framerate.
	*/
    if (frameNum % 40 == 0) {
	for (let u1 of floor.users){
            for (let u2 of floor.users){
		//Color edges at random
		var rand_color = Math.random();    
		if (rand_color > 0.5){
		    //Push new edge defined by 2 users as endpoints to list of edges.
                    listOfPairs.push({user1: u1, user2: u2, color: red});
		}
		else{
                    listOfPairs.push({user1: u1, user2: u2, color: blue});
		}
		
            }
	}
	/*
          We only keep the last 36 edges which enumerate (with repetition, when not
          considering vertex order) of K_6. These are the newest
        */
	if(listOfPairs.length > 36){
	    var newPairs = listOfPairs.slice(36, 72);
	    listOfPairs = newPairs;
	}
	console.log(listOfPairs.length);
    }

    var tris = getAllTriangles();

	/*
	  The next few lines find some triangle in K_6 which is of one color.
	  This exists by the friends and strangers theorem.
	  Note we only ever loop over at most 20 distinct triangles in K_6, since
	  6 choose 3 = 20. These are enumerated in the gT (get Triangles) method.
	*/
    var someUnicolorTri = undefined;
    for(var i = 0; i <= tris.length; i++){
	if(triangleUnicolor(tris[i])){
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
	if(numUsers == 6){
	    pb.drawUser(u1);
	}
	var s = '6 people are enough to force some triangle to be of only one color! This could be interpreted as saying that there exist 3 of you who are all strangers, or 3 of you who are all friends! Check out Ramsey theory for similar results.';
	this.fill(255);
	this.textSize(17);
	this.text(s, 85, 450, 450, 180);
	this.strokeWeight(1);
    }


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
	//Counterexample for n=3.
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
	//Counterexample for n=4.
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
	//Counterexample for n=4.
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


//Return a list of all triangles
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
    title: "Ramsey Theory--R(3,3)=6",
    init: pb.init.bind(pb),
    frameRate: 'sensors',
    render: pb.render.bind(pb),
    numGhosts: 6,
    maxUsers: 6,
    ghostRate: 0.001,
    ghostBounds: {x: 2, y: 2, width: 575, height: 450}
};
export default behavior
