$(document).ready(function () {

    function isFilled () {

        var name = validator.trim($('#name').val());
        var brand = validator.trim($('#brand').val());
        var bodystyle = validator.trim($('#bodystle').val());
        var capacity = validator.trim($('#capacity').val());
        var price = validator.trim($('#price').val());
        var desc = validator.trim($('#desc').val());
        var img = validator.trim($('#desc').val());
        var optionimg = validator.trim($('#optionimg').val());

        var nameEmpty = validator.isEmpty(name);
        var brandEmpty = validator.isEmpty(brand);
        var bodystyleEmpty = validator.isEmpty(bodystyle);
        var capacityEmpty = validator.isEmpty(capacity);
        var priceEmpty = validator.isEmpty(price);
        var descEmpty = validator.isEmpty(desc);
        var imgEmpty = validator.isEmpty(img);
        var optionimgEmpty = validator.isEmpty(optionimg);

        return !nameEmpty && !brandEmpty && !bodystyleEmpty && !capacityEmpty && !priceEmpty && !descEmpty && !imgEmpty && !optionimgEmpty;
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

    $('#bodystyle').keyup(function () {

        validateField($('#bodystyle'), 'Bodystyle', $('#bodystyleError'));
        
    });

    $('#capacity').keyup(function () {

        validateField($('#capacity'), 'Capacity', $('#capacityError'));
        
    });

    $('#price').keyup(function () {

        validateField($('#price'), 'Price', $('#priceError'));
        
    });

    $('#desc').keyup(function () {

        validateField($('#desc'), 'Description', $('#descError'));
        
    });

    $('#img').keyup(function () {

        validateField($('#img'), 'Image URL', $('#imgError'));
        
    });

    $('#optionimg').keyup(function () {

        validateField($('#optionimg'), 'Image URL', $('#optionimgError'));
        
    });
});