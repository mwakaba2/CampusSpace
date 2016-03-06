$(document).ready(function(){
	$("#surveyForm").formToWizard({ okButton: 'SubmitRectangle', cancelButton: 'CancelRectangle' })

	function validateCheckboxes(name) {
	  var getArrVal = $('input[type="checkbox"][name="'+name+'"]:checked').map(function(){
	    return this.value;
	  }).toArray();

	  if(getArrVal.length){
	    $('#show-error-'+name).hide();
	  } else{
	    $('#show-error-'+name).html("<em class='error help-block'>At least one value must be checked!</em>").show();
	    return false;      
	  };
	}

	/* College checkboxes validation */
	$('input[type="checkbox"][name="colleges"]').on('change',function(){
	  validateCheckboxes("colleges");
	});

	/* Vehicles checkboxes validation */
	$('input[type="checkbox"][name="vehicles"]').on('change',function(){
	  validateCheckboxes("vehicles");
	})

	$('input[type="checkbox"][name="consent"]').on('change',function(){
		if($("#consent").is(':checked')) {
			$('#show-error-consent').hide();
		} else {
			$('#show-error-consent').html("<em class='error help-block'>Please agree to this consent</em>").show();
		}
	})

	$("#surveyForm").validate({
		rules: {
			semesters: {
				required: true,
				digits: true
			}
		},
		messages: {
			semesters: {
				required: "Enter the number of semesters",
				digits: "Please enter a number"	
			}
		},
		errorElement: "em",
		errorPlacement: function ( error, element ) {
			// Add the `help-block` class to the error element
			error.addClass( "help-block" );
			if ( element.prop( "type" ) === "checkbox" ) {
				error.insertAfter( element.parent( "label" ) );
			} else {
				error.insertAfter( element );
			}
		},
		highlight: function ( element, errorClass, validClass ) {
			$( element ).addClass( "has-error" ).removeClass( "has-success" );
		},
		unhighlight: function (element, errorClass, validClass) {
			$( element ).addClass( "has-success" ).removeClass( "has-error" );
	  }
	});

	$('#semesters, #colleges, #vehicles, #consent').on('change', function() {
      var invalid = true;
      var collegesError = $('#show-error-colleges').is(':visible');
      var semestersError = $('#semesters-error').is(':visible');
      var vehiclesError = $('#show-error-vehicles').is(':visible');
      var consentError = $('#show-error-consent').is(':visible');

      if(!collegesError && !semestersError && !vehiclesError && !consentError) {
      	invalid = false;
      }

      if (invalid) {
          $('#step0Next').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
      } else {
          $('#step0Next').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
      }
  });

});