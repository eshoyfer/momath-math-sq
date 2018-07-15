import * as math from 'mathjs'

/* MoMath Math Square Behavior
 *
 *        Title: Sensors
 *  Description: Display raw sensors, used for 'record' meta-behavior
 * Scheduler ID:
 *    Framework: Canvas2D
 *       Author: Dylan Simon <dylan@dylex.net>
 *      Created: 2017-04
 *       Status: works
 */

import {Behavior} from 'behavior';
import * as Sensor from 'sensors';
import * as Display from 'display';
import Floor from 'floor';

var ctx: CanvasRenderingContext2D;

var FWIDTH = 576;
var FHEIGHT = 576;

var factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600];
// xcoords is [Xmin, Xmax]
// ycoords is [Ymin, Ymax]
// Output a list of coords to plot
function coords_list_gen(func, xcoords, ycoords) {
  var ret = [];
  var xrange = xcoords[1] - xcoords[0];
  var yrange = ycoords[1] - ycoords[0];
  var deltax = xrange / (FWIDTH*1.0);
  var deltay = yrange / (FHEIGHT*1.0);
  for (var i = 0; i < FWIDTH; i++) {
    var x_i = xcoords[0] + deltax * i;
    var y_i = func(x_i);
    var x_display = (x_i * (1.0 / deltax)) + (FWIDTH / 2);
    var y_display = ((-1.0 * y_i) * (1.0 / deltay)) + (FHEIGHT / 2);
    var coords = [x_display, y_display];
    ret.push(coords);
    console.log(coords);
  };
  console.log(ret);
  return ret;
};

// Plot the coords with canvas
function plot_coords_list(coords, ctx, color) {
  console.log(coords[0]);
  console.log("Wuss goin on lmao");
  ctx.beginPath();
//  ctx.moveTo(20,20);
//  ctx.lineTo(20,100);
//  ctx.lineTo(70,100);
  ctx.strokeStyle=color;
//  ctx.stroke();
  var first = true;
  //console.log("COORDSBRUH");
  //console.log(coords);
  for (var i = 0; i < coords.length; i++) {

    var coord = coords[i];
    //console.log("coords");
    //console.log(coord);
    if (first) {
      console.log(coord[0], coord[1]);
      ctx.moveTo(coord[0], coord[1]);

      first = false;
    } else {
      ctx.lineTo(coord[0], coord[1]);
      console.log(coord[0], coord[1]);
      //console.log(coord[0]);
      //console.log(coord[1]);
      //console.log("BRUH WE MOVED LINE");
    };
    ctx.stroke();
  };
};

function form_grid(ctx) {
  ctx.beginPath();
  ctx.strokeStyle="grey";
  ctx.moveTo(0,FHEIGHT/2);
  ctx.lineTo(FWIDTH,FHEIGHT/2);
  ctx.moveTo(FWIDTH/2, 0);
  ctx.lineTo(FWIDTH/2,FHEIGHT);
  ctx.stroke();
  return;
}

function plot_function(func, xcoords, ycoords, ctx, color) {
  console.log("Plot function called");
  var coords = coords_list_gen(func, xcoords, ycoords);
  plot_coords_list(coords, ctx, color);
}

function render(floor: Floor) {
  // var input = floor.sensors;
  // /* clear canvas */
  // ctx.clearRect(0, 0, Sensor.width, Sensor.height);
  //
  // /* draw each sensor */
  // for (let i: Sensor.Index|undefined = new Sensor.Index(); i; i = i.incr())
  //   if (input.get(i))
  //     ctx.fillRect(i.x+0.05, i.y+0.05, 0.9, 0.9);
}

function init(container: HTMLDivElement) {
  const canvas = new Display.Canvas2DContext(container);
  ctx = canvas.context;
  /* set default color */
  ctx.fillStyle = 'white';
  var width = canvas.width;
  var height = canvas.height;
  /* scale to sensor space */
  // ctx.setTransform(Display.sensorWidth, 0, 0, Display.sensorHeight, 0, 0);
  // ctx.beginPath();
  // ctx.moveTo(20,20);
  // ctx.lineTo(20,100);
  // ctx.lineTo(70,100);
  // ctx.strokeStyle="red";
  // ctx.stroke();
  console.log("fucking stroke");
  form_grid(ctx);
  plot_function((function(x) {return Math.sin(x);}), [- (4*Math.PI), (4*Math.PI)], [-2,2], ctx, "white");
  plot_function((function(x) {return x; console.log("hi");}), [- (4*Math.PI), (2*Math.PI)], [-2, 2], ctx, "red");
  plot_function((function(x) {return -(1.0*x*x*x)/6.0 + x; console.log("hi");}), [- (4*Math.PI), (4*Math.PI)], [-2, 2], ctx, "blue");
  plot_function((function(x) {return ((x**5)/120)-(1.0*x*x*x)/6.0 + x; console.log("hi");}), [- (4*Math.PI), (4*Math.PI)], [-2, 2], ctx, "green");
  plot_function((function(x) {return (-(1.0*x**7)/factorials[7]) + ((x**5)/120)-(1.0*x*x*x)/6.0 + x; console.log("hi");}), [- (4*Math.PI), (4*Math.PI)], [-2, 2], ctx, "purple");
  plot_function((function(x) {return ((1.0*x**9)/factorials[9]) + (-(1.0*x**7)/factorials[7]) + ((x**5)/120)-(1.0*x*x*x)/6.0 + x; console.log("hi");}), [- (4*Math.PI), (4*Math.PI)], [-2, 2], ctx, "pink");
  plot_function((function(x) {return (-(1.0*x**11)/factorials[11]) + ((1.0*x**9)/factorials[9]) + (-(1.0*x**7)/factorials[7]) + ((x**5)/120)-(1.0*x*x*x)/6.0 + x; console.log("hi");}), [- (4*Math.PI), (4*Math.PI)], [-2, 2], ctx, "brown");


  console.log("yeah we executed here");
}



export const behavior: Behavior = {
  title: "Sensor Debug (Canvas2D)",
  frameRate: 'sensors',
  maxUsers: 0,
  init: init,
  render: render
};
export default behavior
