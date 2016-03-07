var firebaseLink = 'https://campusspace.firebaseio.com/';
var rectangles = new Firebase(firebaseLink);

var place = [0];
var topX, topY, botX, botY, label;

function init2() {
  $("#maphomes").hide();
  $("#mapplaces").show();

  toQuad();

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

    var s = new createjs.Shape(g);
    // s.x = stage.mouseX;
    // s.y = stage.mouseY;

    place[0] = ([[topX, topY], [botX, botY]]);

    stage.addChild(s);
    stage.update();

    labelAlert();
  }

  stage.removeAllEventListeners("stagemouseup");
  stage.addEventListener("stagemousedown", handleMouseDown);
}

function handleCancel(event) {
  stage.removeChildAt(stage.numChildren - 1);
  stage.update();
}

function labelAlert() {
    label = prompt("How should we label this area?");
    if (label === null) {
      handleCancel();
    } else {
      var semestersNum = $("#semesters").val();
      var collegeNames = [];
      var vehicleNames = [];

      $('#colleges:checked').each(function() {
          collegeNames.push($(this).val());
      });

      $('#vehicles:checked').each(function() {
          vehicleNames.push($(this).val());
      });

      console.log('Loading:');
      var user = {
        "college": collegeNames,
        "semester": semestersNum,
        "transportation": vehicleNames,
        "house": homes,
      }
      var rect = {
        "label": label,
        "coord": place
      }

      var rectangle = {
        "user_info": user,
        "rectangle": rect
      }

      rectangles.push(rectangle);
      console.log('Posted:');
    }
}
