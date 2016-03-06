$(document).ready(function(){
	var firebaseLink = 'https://campusspace.firebaseio.com/';
	var rectangles = new Firebase(firebaseLink);
	$("#SubmitRectangle").on('click', function(){
		console.log($("#semesters").val());
		// console.log($("#"))


// 		console.log('Loading:');
// 		var user = {
// 			"college": ['LAS'],
// 			"semester": 2,
// 			"transportation": ["bike", "car"],
// 			"house": [(1, 3), (5, 7)],
// 		}
// 		var rect = {
// 			"label": "Grainger",
// 			"coord": [(1, 1), (2, 4)]
// 		}

// 		var rectangle = {
// 			"user_info": user,
// 			"rectangle": rect
// 		}

// 		rectangles.push(rectangle);
// 		console.log('Posted:');
// 	});
// });

	