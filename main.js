ctx=document.getElementById("Canvas");
ctx.canvas.getContext("2d");
var color=document.getElementById("color").value;
var radius=document.getElementById("radius").value;
var width=document.getElementById("width").value;
cpox="";
cpoy="";
mousevent=" ";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mousevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mousevent=mouseup;
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mousevent=mouseleave;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    cpox=e.clientX-canvas.offsetleft;
    cpoy=e.clientY-canvas.offsetTop;
    if (mousevent=="mouseDown");
    console.log("Current position of x and y coordinates=");
    console.log("x="+cpox+"y="+cpoy);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(cpox,cpoy,radius,0,360);
    ctx.stroke(); 
}