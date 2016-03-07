var canvas, stage, image, bitmap;

var homes = [];

function toQuad() {
  $(window).scrollTop(1200 - window.innerHeight / 2);
  $(window).scrollLeft(1900 - window.innerWidth / 2 + 250);
}

function init() {
  $("#mapplaces").hide();

  toQuad();

	canvas = document.getElementById("maphomes");

	stage = new createjs.Stage(canvas);

  image = new Image();
  image.src = "darkmap.png";
  bitmap = new createjs.Bitmap(image);
	stage.addChild(bitmap);
  stage.update();

}

function handleClick(event) {
  var g = new createjs.Graphics();
  g.beginFill(createjs.Graphics.getRGB(212,93,0,0.3));
  g.drawCircle(0,0,30);

  var s = new createjs.Shape(g);
  s.x = stage.mouseX;
  s.y = stage.mouseY;

  homes.push([stage.mouseX, stage.mouseY]);

  console.log(homes);

  stage.addChild(s);
  stage.update();
}

$("#clearhomes").on('click', function() {
  stage.removeChildAt(stage.numChildren - 1);
  stage.update();
  homes = [];
});
