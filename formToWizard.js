/* Created by jankoatwarpspeed.com */

(function($) {
    $.fn.formToWizard = function(options) {
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var okButtonName = "#" + options.okButton;
        var cancelButtonName = "#" + options.cancelButton;
        $(okButtonName).hide();
        $(cancelButtonName).hide();

        // 2
        $(element).before("<ul id='steps'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");

            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
            }
            else {
                $("#step" + i).hide();
                createNextButton(i);
            }
        });

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' disabled='disabled' id='" + stepName + "Next' class='btn btn-primary next'>Next ></a>");

            $("#" + stepName + "Next").bind("click", function(e) {
                if(!$("#" + stepName + "Next").is('[disabled=disabled]')) {
                    $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                if (i + 3 == count) {
                  /* updates map again just in case */
                  stage.update();
                  /* enables clicking on map */
                  stage.addEventListener("stagemousedown", handleClick);
                }
                if (i + 2 == count) {
                    init2();
                    $(okButtonName).show();
                    $(cancelButtonName).show();
                }
                selectStep(i + 1);
                }
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("current");
            $("#stepDesc" + i).addClass("current");
            setTimeout(function () {
              toQuad();
            }, 100);
        }

    }
})(jQuery);
