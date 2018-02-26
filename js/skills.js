$(document).ready(function() {
			checked_skills = [];
			checked_skills.push('shando');

			$('#multiple-checkboxes1').change( function () {

					checked_skills.push($('option:checked').val());
					fuck = jQuery.inArray( "$('option:not(:checked)').val()", checked_skills);

			if (jQuery.inArray( "$('option:not(:checked)').val()", checked_skills) != -1){
				alert('removing item');
				checked_skills.splice($.inArray($('option:not(:checked)').val(), checked_skills),1);
			}

			});

		});