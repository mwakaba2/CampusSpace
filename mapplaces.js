var canvas, stage, image, bitmap;

var places = [];
var topX, topY, botX, botY, entry;

function init() {

  $(window).scrollTop(1200 - window.innerHeight / 2);
  $(window).scrollLeft(1900 - window.innerWidth / 2);

	canvas = document.getElementById("mapplaces");

	stage = new createjs.Stage(canvas);
  stage.addEventListener("stagemousedown", handleMouseDown);

  image = new Image();
  image.src = "darkmap.png";
  bitmap = new createjs.Bitmap(image);
	stage.addChild(bitmap);
  stage.update();
}

function handleMouseDown(event) {
  topX = stage.mouseX;
  topY = stage.mouseY;
  botX = stage.mouseX;
  botY = stage.mouseY;

  stage.removeAllEventListeners("stagemousedown");
  stage.addEventListener("stagemouseup", handleMouseUp);
}

function handleMouseUp(event) {

  if (stage.mouseX === topX || stage.mouseY === topY) {

    // nothing (box is a line)

  } else {

    if (stage.mouseX > topX) {
      botX = stage.mouseX;
    } else {
      topX = stage.mouseX;
    }
    if (stage.mouseY > topY) {
      botY = stage.mouseY;
    } else {
      topY = stage.mouseY;
    }

    var g = new createjs.Graphics();
    g.beginFill(createjs.Graphics.getRGB(212,93,0, 0.3));
    g.drawRect(topX, topY, botX - topX, botY - topY);

    entry = new createjs.Shape(g);
    // s.x = stage.mouseX;
    // s.y = stage.mouseY;

    places.push([[topX, topY], [botX, botY]]);

    stage.addChild(entry);
    stage.update();
  }

  stage.removeAllEventListeners("stagemouseup");
  stage.addEventListener("stagemousedown", handleMouseDown);
}
