$(document).ready(function() {
    $('#multiple-checkboxes1').multiselect({

        nonSelectedText:'ACCOUNTS',
        nSelectedText: 'ACCOUNTS',
        allSelectedText: 'ACCOUNTS',
        wa:'YAHYAH',
        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('#multiple-checkboxes2').multiselect({

        nonSelectedText:'RESEARCH',
        nSelectedText: 'RESEARCH',
        allSelectedText: 'RESEARCH',

        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('#multiple-checkboxes3').multiselect({

        nonSelectedText:'CREATIVE',
        nSelectedText: 'CREATIVE',
        allSelectedText: 'CREATIVE',

        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('#multiple-checkboxes4').multiselect({

        nonSelectedText:'DIGITAL',
        nSelectedText: 'DIGITAL',
        allSelectedText: 'DIGITAL',

        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('#multiple-checkboxes5').multiselect({

        nonSelectedText:'MEDIA',
        nSelectedText: 'MEDIA',
        allSelectedText: 'MEDIA',

        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });
    $('#multiple-checkboxes6').multiselect({

        nonSelectedText:'ADMIN',
        nSelectedText: 'ADMIN',
        allSelectedText: 'ADMIN',

        templates: { // Use the Awesome Bootstrap Checkbox structure
            li: '<li><div class="checkbox"><label></label></div></li>'
        }
    });

    $('.multiselect-container div.checkbox').each(function (index) {

        var id = 'multiselect-' + index,
            $input = $(this).find('input');

        // Associate the label and the input
        $(this).find('label').attr('for', id);
        $input.attr('id', id);

        // Remove the input from the label wrapper
        $input.detach();

        // Place the input back in before the label
        $input.prependTo($(this));

        $(this).click(function (e) {
            // Prevents the click from bubbling up and hiding the dropdown
            e.stopPropagation();
        });

    });
	
	
	
});
