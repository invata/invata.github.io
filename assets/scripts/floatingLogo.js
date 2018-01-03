/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Sandeep Gangadharan | http://sivamdesign.com/scripts/ */
var x1 = 31;   // change the # on the left to adjust the X co-ordinate
var y1 = 530;  // change the # on the left to adjust the Y co-ordinate


(document.getElementById && !document.all) ? dom = true : dom = false;

function typeStart() {
  if (dom) {
    document.write('<div id="logoBox" style="position:absolute; left:' + (window.innerWidth-x1) + 'px; visibility:visible">') }
  if (document.all) {
    document.write('<div id="logoBox" style="position:absolute; left:' + (document.documentElement.clientWidth-x1) + 'px; visibility:visible">') }
 }

function typeEnd() {
  if (document.all || dom) { document.write('</div>') }
 }
 
function placeIt() {
  if (dom) {document.getElementById("logoBox").style.top = window.pageYOffset + y1 + "px"; document.getElementById("logoBox").style.left = window.pageXOffset + x1 + "px";}
  if (document.all) {document.all["logoBox"].style.top = document.documentElement.scrollTop + y1 + "px"; document.all["logoBox"].style.left = document.documentElement.scrollLeft + x1 + "px";}
  window.setTimeout("placeIt()", 10);
 }



// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  placeIt();
});
