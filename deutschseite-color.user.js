// ==UserScript==
// @name        Toms Deutschseite Color
// @author      0657_Code
// @include     http://www.deutschseite.de
// @include     http://www.deutschseite.de/*
// @version     1.0
// @grant    none
// ==/UserScript==

//COLORS (see https://htmlcolor-codes.com/)
var COLOR_BLACK = "#000000"
var COLOR_WHITE = "#FFFFFF"
var COLOR_LIGHTGREEN  = "#90EE90"
var COLOR_GRAY = "#808080"


//START
changeBackgroundColor(COLOR_WHITE); 
changeTextColor(COLOR_BLACK);


//FUNCTIONS
function changeTextColor(color){
  addGlobalStyle('p { color: '+color+' ! important; }');
  addGlobalStyle('ul,ol { color: '+color+' ! important; }');
  addGlobalStyle('h1 { color: '+color+' ! important; }');
}
function changeBackgroundColor(color) {
  var body = document.getElementsByTagName("body")[0];
  body.setAttribute("bgcolor", color);
  console.log("Background color changed to " + color);
}
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
