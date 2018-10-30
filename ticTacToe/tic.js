/* Const */
const playerX = "X";
const playerO = "O";
const boardState = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
let turn = 0;
let turnCount = 0;

/* Setup functions */
function init(){
  var canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var ctx = canvas.getContext('2d');
  board = new Board(tiles, player0, player1);
  drawBoardAndPieces();
  canvas.addEventListener('click',mouseClick);
  canvas.addEventListener('mousemove',mouseOver);

}
function BoardPiece(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor((Math.random() * colorArray.length))];

  this.draw = function() {
      c.beginPath();
      c.arc(this.x,this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.stroke();
  }

  this.update = function() {
    this.draw();
  }
}
var boardArray = [];
for (var i = 0; i < 9; i++) {
  context.strokeStyle = "#000000";
	context.fillRect(x*dim, y*dim, dim, dim);
  boardArray.push(new BoardPiece(x,y,dx,dy,radius));
}
function drawBoardTile(y, x){
	context.fillStyle = board[y][x].color;
	context.fillRect(x*dim, y*dim, dim, dim);
}
function Space() {

}
function Player() {

}
function checkBoardState() {

}
function resetGame() {

}
function fillSpace() {

}



/* Gameplay functions */
function mouseClick(event){

}
function mouseOver(event){

}
// move event
// check move event
// win event
function animate(){

}
