$(document).ready(function(){
	var firebaseLink = 'https://campusspace.firebaseio.com/';
	var rectangles = new Firebase(firebaseLink);
	$("#SubmitRectangle").on('click', function(){
		var semestersNum = $("#semesters").val();
		var collegeNames = [];
		var vehicleNames = [];

		$('.colleges-section input:checked').each(function() {
			collegeNames.push($(this).val());
			console.log("pushed college");
		});

		$('.vehicles input:checked').each(function() {
			vehicleNames.push($(this).val());
			console.log("pushed vehicle");
		});

		console.log('Loading:');
		var user = {
			"college": collegeNames,
			"semester": semestersNum,
			"transportation": vehicleNames,
			"house": homes
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
	});
});
