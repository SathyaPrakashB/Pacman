var pos = 0;
var pacArray = [
  ["D:/xxxx projects xxxx/java script project/pacman/PacMan1.png", "D:/xxxx projects xxxx/java script project/pacman/PacMan2.png"],
  ["D:/xxxx projects xxxx/java script project/pacman/PacMan3.png", "D:/xxxx projects xxxx/java script project/pacman/PacMan4.png"],
];
var direction = 0;
var focus = 0;

function Run() {  							         
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;                                                            
  direction = checkPageBounds(direction, imgWidth, pos, window.innerWidth);
  img.src = pacArray[direction][focus];

  if (direction === 0) {
    pos += 20;
  } else {
    pos -= 20;
  }
  img.style.left = pos + 'px';
}
setInterval(Run, 200);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth > pageWidth) direction = 1;
  if (pos < 0) direction = 0;

  return direction;
}