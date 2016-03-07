$(document).ready(function(){

	var collegesError = true;
	var semestersError = true;
	var consentError = true;

	$("#surveyForm").formToWizard({ okButton: 'SubmitRectangle', cancelButton: 'CancelRectangle' })

	function validateCheckboxes(name) {
	  var getArrVal = $('input[type="checkbox"][name="'+name+'"]:checked').map(function(){
	    return this.value;
	  }).toArray();

	  if(getArrVal.length){
	    $('#show-error-'+name).hide();
			/* HARDCODED */
			if (name == "colleges") {
				collegesError = false;
			}
	  } else{
	    $('#show-error-'+name).html("<em class='error help-block'>At least one value must be checked</em>").show();
			/* HARDCODED */
			if (name == "colleges") {
				collegesError = true;
			}
	    return false;
	  };
	}

	/* College checkboxes validation */
	$('input[type="checkbox"][name="colleges"]').on('change',function(){
	  validateCheckboxes("colleges");
	});

	$('input[type="checkbox"][name="consent"]').on('change',function(){
		if($("#consent").is(':checked')) {
			$('#show-error-consent').hide();
			consentError = false;
		} else {
			$('#show-error-consent').html("<em class='error help-block'>Please agree to this consent</em>").show();
			consentError = true;
		}
	})

	$("#surveyForm").validate({
		rules: {
			semesters: {
				required: true,
				digits: true,
				max: 300
			}
		},
		messages: {
			semesters: {
				required: "Enter the number of semesters",
				digits: "Please enter a number",
				max: "It's unlikely that you've been here for that long"
			}
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "help-block" );
			// if ( element.prop( "type" ) === "checkbox" ) {
				error.insertBefore( element.parent( "div" ) );
			// } else {
				// error.insertAfter( element );
			// }
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).addClass( "has-error" ).removeClass( "has-success" );
			semestersError = true;
			checkStepOne(); // because it does this after the check
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).addClass( "has-success" ).removeClass( "has-error" );
			semestersError = false;
			checkStepOne(); // because it does this after the check
	  }
	});

	$('input').on('change', function() {
			checkStepOne();
  });

	function checkStepOne() {

		var invalid = true;
		
		if(!collegesError && !semestersError && !consentError) {
			invalid = false;
		}

		if (invalid) {
				$('#step0Next').fadeOut();
				$('#step0Next').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
		} else {
				$('#step0Next').fadeIn();
				$('#step0Next').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
		}
	}

});
