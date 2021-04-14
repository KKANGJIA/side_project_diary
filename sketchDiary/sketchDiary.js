"use strict"

let canvas, context; //그림을 그릴 캔버스와 그림을 그리는 도구 변수 지정
function init(){
    canvas = document.querySelector('.myCanvas'); //캔버스 불러오기
    context = canvas.getContext("2d"); //캔버스의 드로잉 컨텍스트를 반환

    context.lineWidth = 2; // 선 굵기를 2픽셀로 설정
    context.strokeStyle = "blue"; // 선 색을 파란색으로 지정

    canvas.addEventListener("mousedown", function(e){pressMouse(e)}, false);//마우스를 누르면
    canvas.addEventListener("mouseup", detachMouse);//마우스를 떼면
    canvas.addEventListener("mousemove", moveMouse);//마우스가 이동하면
    canvas.addEventListener("mouseout", outMouse);//마우스가 캔버스를 벗어나면
}
init();

var startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표

var drawing=false;

function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}

function pressMouse(e) {
    startX = e.offsetX; // 마우스가 클릭되는 지점의 X 좌표
    startY = e.offsetY; // 마우스가 클릭되는 지점의 Y 좌표
    // console.log(startX, startY);
    drawing = true; // 그림을 그리기
}
function detachMouse() {
    drawing = false; // 그림을 그리지 못하게 하기
}
function moveMouse() {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}

function outMouse(e) { drawing = false; }