canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");
color="red";
radius="empty";
width=1;
var mouseEvent="empty";
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseMove", my_mousemove);
function my_mousemove(e){
    cpox=e.clientX-canvas.offsetleft;
    cpoy=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown");
    console.log("Current position of x and y coordinates=");
    console.log("x="+cpox+"y="+cpoy);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(cpox,cpoy,radius,0,360);
    ctx.stroke(); 
}
canvas.addEventListener("mouseUp",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseLeave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}