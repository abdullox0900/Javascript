// let result = prompt("he")

// alert(result)

// document.write(result)

// console.log(result);

// var canvas = document.getElementById("myCanvas");
// var context = canvas.getContext("2d");

// context.font = "24px Arial";
// context.fillText("Salom, dunyo!", 150, 150);



var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

svg.setAttribute("width", "200");
svg.setAttribute("height", "200");
svg.setAttribute("color", "red");

var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
text.setAttribute("x", "50");
text.setAttribute("y", "50");
text.setAttribute("color", "red");
text.setAttribute("font-size", "24");
text.setAttribute("font-family", "Arial");

var textNode = document.createTextNode("Salom, dunyo!");
text.appendChild(textNode);

svg.appendChild(text);
document.body.appendChild(svg);
