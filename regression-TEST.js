/* MoMath Math Square Behavior
 *
 *        Title: Spanning Tree
 *  Description: Construct a minimum spanning tree between users
 * Scheduler ID: 6
 *    Framework: THREE
 *       Author: ?
 *      Created: ?
 *      Updated: 2017-04 for SDK by dylan
 *       Status: works
 */
//C:/Users/cheno/OneDrive/Documents/Momath/math-square-master
//import * as regression from 'packages/npm/regression/src/regression';
//import CIRCLEFIT from 'circlefit';

import THREEContext from 'threectx';
import * as THREE from 'three';
import * as Display from 'display';


import THREEContext from 'threectx';
import * as THREE from 'three';
import * as Display from 'display';
const MAXSIZE = 567;
const THRESHOLD = 100;
const SLOPE_THRESHOLD = 0.2;

var context;

var shortestPairing = new Object();
var lines = new Array();
var lines2 = new Array();
var targetGeometry = new THREE.Geometry();
var targetSlope;
var targetSlopeMin;
var targetSlopeMax;
var targetInterceptMin;
var targetInterceptMax;
var targetIntercept;
	//setInterval(setupTarget, 9000);

function setupTarget(){
	for(var l in lines2) context.scene.remove(lines2[l]);
	lines2 = [];
	targetGeometry = new THREE.Geometry();

	var x1 = 0;
	var y1 = Math.floor(Math.random() * MAXSIZE); 
	
	
	var x2 = MAXSIZE;
	var y2 = Math.floor(Math.random() * MAXSIZE); 
	//var y2 = (maxSize-lr.intercept)/lr.slope;
	//var x2 = maxSize;
	targetSlope= (y2-y1)/(x2-x1);
	targetIntercept= y2+targetSlope*x2;
	
	var a = new THREE.Vector3( x1, y1, 0 );
	var b = new THREE.Vector3( x2, y2, 0 );
	
	targetGeometry.vertices.push(a);
	targetGeometry.vertices.push(b);
	
	var line = new THREE.Line( targetGeometry, new THREE.LineBasicMaterial( { color: 0x842593, linewidth: 10 } ) );
	context.scene.add(line);
	lines2.push(line);
	
	targetSlopeMin = targetSlope-SLOPE_THRESHOLD;
	targetSlopeMax = targetSlope+SLOPE_THRESHOLD;
	targetInterceptMin = targetIntercept*(100-THRESHOLD)/100);
	targetInterceptMax = targetIntercept*(100+THRESHOLD)/100);
}

function linearRegression(y,x){
        var lr = {};
        var n = y.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < y.length; i++) {

            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        }

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

        return lr;
}

function init(container) {
  context = new THREEContext(container);
	console.log("START");
	setupTarget();
  behavior.userUpdate = context.userUpdate.bind(context);
}

function createRandomPointsAndConnect(floor){
  // particles

  for(var l in lines) context.scene.remove(lines[l]);
  lines = [];
  
  var known_y = new Array();
var known_x = new Array();

  var points = new Array();
  for(var user of floor.users){
    var newPosition = new THREE.Vector3(user.x, user.y);
	//var known_y = [1, 2, 3, 4];
	known_y.push(user.y);
	//var known_x = [5.2, 5.7, 5.0, 4.2];
	known_x.push(user.x);
    points.push(newPosition);
  }
  //console.log(points);
  //var regression = new regression();
  
  


var lr = linearRegression(known_y, known_x);
// lr.slope
// lr.intercept
// lr.r2
// y = mx +c


//console.log(lr.intercept);
//console.log(lr.intercept);
//console.log(lr.intercept);
  // TODO: need some initial ghost creation to avoid this case?
  if(points.length == 0)
    return;

  // Prim's Algorithm
  // 1. get random starting position, add as connected point

      //context.scene.add(line);
      //lines.push(line);
	  
	  // new part ///////////////////////////////////////////////////
	  
	var geometry2 = new THREE.Geometry();

	
	//x=0
	//known_x
		var x1 = Math.min(...known_x);
		var y1 = lr.slope*x1+lr.intercept;
		//console.log(y1);
	//x=576
		var x2 = Math.max(...known_x);
		var y2 = lr.slope*x2+lr.intercept;
		//var y2 = (maxSize-lr.intercept)/lr.slope;
		//var x2 = maxSize;
		
		var a = new THREE.Vector3( x1, y1, 0 );
		var b = new THREE.Vector3( x2, y2, 0 );
		// lr.slope
// lr.intercept
// lr.r2
      geometry2.vertices.push(a);
      geometry2.vertices.push(b);

      var line2 = new THREE.Line( geometry2, new THREE.LineBasicMaterial( { color: 0xffff7D, linewidth: 4 } ) );
      context.scene.add(line2);
      lines.push(line2);
	  
	  
	  
	var slopeInRange = (lr.slope >= targetSlopeMin && lr.slope <= targetSlopeMax);
	var interceptInRange = (lr.intercept <= targetInterceptMax &&  lr.intercept >= targetInterceptMin);
	//console.log("intercept " + interceptInRange);
	//console.log("slope " + slopeInRange);
	//console.log(lr.slope + " --- " + targetSlope);
	console.log(slopeInRange);
	
	if(slopeInRange && interceptInRange ){
	setupTarget();
	}	
}


function animate(floor) {
  createRandomPointsAndConnect(floor);
	
  context.render();
}
function checkMatch(){
	
}

export const behavior = {
  title: "Linear Regression",
  frameRate: 'sensors',
  numGhosts: 5,
  init: init,
  render: animate
};
export default behavior;
