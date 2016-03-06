$(document).ready(function(){
	var firebaseLink = 'https://campusspace.firebaseio.com/';
	var rectangles = new Firebase(firebaseLink);
	$("#SubmitRectangle").on('click', function(){
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
			"house": [[1, 3], [5, 7]],
		}
		var rect = {
			"label": "Grainger",
			"coord": [[1, 1], [2, 4]]
		}

		var rectangle = {
			"user_info": user,
			"rectangle": rect
		}

		rectangles.push(rectangle);
		console.log('Posted:');
 	});
 });

