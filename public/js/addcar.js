$(document).ready(function () {

    function isFilled () {

        var name = validator.trim($('#name').val());
        var brand = validator.trim($('#brand').val());
        var bodyStyle = validator.trim($('#bodyStyle').val());
        var capacity = validator.trim($('#capacity').val());
        var price = validator.trim($('#price').val());
        var description = validator.trim($('#description').val());
        var imgLink = validator.trim($('#imgLink').val());
        var optionImg = validator.trim($('#optionImg').val());

        var nameEmpty = validator.isEmpty(name);
        var brandEmpty = validator.isEmpty(brand);
        var bodyStyleEmpty = validator.isEmpty(bodyStyle);
        var capacityEmpty = validator.isEmpty(capacity);
        var priceEmpty = validator.isEmpty(price);
        var descriptionEmpty = validator.isEmpty(description);
        var imgLinkEmpty = validator.isEmpty(imgLink);
        var optionImgEmpty = validator.isEmpty(optionImg);

        return !nameEmpty && !brandEmpty && !bodyStyleEmpty && !capacityEmpty && !priceEmpty && !descriptionEmpty && !imgLinkEmpty && !optionImgEmpty;
    }

    function validateField(field, fieldName, error) {

        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        if(empty) {

            field.prop('value', '');
            field.css('border-color', 'red');
            error.text(fieldName + ' should not be empty.');

        }

        else {

            error.text('');
            field.css('border-color', '#E3E3E3')

        }

        var filled = isFilled();

        if(filled) {

            $('#submit').prop('disabled', false);

        }

        else {

            $('#submit').prop('disabled', true);

        }

    }

    $('#name').keyup(function() {

        validateField($('#name'), 'Name', $('#nameError'));

    });

    $('#brand').keyup(function () {

        validateField($('#brand'), 'Brand', $('#brandError'));
        
    });

    $('#bodyStyle').keyup(function () {

        validateField($('#bodyStyle'), 'Bodystyle', $('#bodyStyleError'));
        
    });

    $('#capacity').keyup(function () {

        validateField($('#capacity'), 'Capacity', $('#capacityError'));
        
    });

    $('#price').keyup(function () {

        validateField($('#price'), 'Price', $('#priceError'));
        
    });

    $('#description').keyup(function () {

        validateField($('#description'), 'Description', $('#descriptionError'));
        
    });

    $('#imgLink').keyup(function () {

        validateField($('#imgLink'), 'Image URL', $('#imgLinkError'));
        
    });

    $('#optionImg').keyup(function () {

        validateField($('#optionImg'), 'Image URL', $('#optionImgError'));
        
    });
});