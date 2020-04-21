$(document).ready(function () {

    var today = new Date();
    var dd = String(today.getDate()).toString().padStart(2, '0');
    var mm = String(today.getMonth() + 1).toString().padStart(2, '0');
    var yyyy = today.getFullYear().toString();

    today = yyyy + '-' + mm + '-' + dd;

    $('#bday').prop('value', today);
    $('#dlStart').prop('value', today);
    $('#dlExp').prop('value', today);

    $('#bday').blur(function() {

        if($('#bday').val() == '')
            $('#bday').prop('value', today);
    })

    $('#dlStart').blur(function() {

        if($('#dlStart').val() == '')
            $('#dlStart').prop('value', today);
    })

    $('#dlExp').blur(function() {

        if($('#dlExp').val() == '')
            $('#dlExp').prop('value', today);
    })




    function isFilled() {

        var fname = validator.trim($('#fname').val());
        var lname = validator.trim($('#lname').val());
        var username = validator.trim($('#username').val());
        var pw = validator.trim($('#pw').val());
        var email = validator.trim($('#email').val());
        var ccNo = validator.trim($('#ccNo').val());
        var ccExp = validator.trim($('#ccExp').val());
        var ccPin = validator.trim($('#ccPin').val());
        var dlNo = validator.trim($('#dlNo').val());

        var fnameEmpty = validator.isEmpty(fname);
        var lnameEmpty = validator.isEmpty(lname);
        var usernameEmpty = validator.isEmpty(username);
        var pwEmpty = validator.isEmpty(pw);
        var emailEmpty = validator.isEmpty(email);
        var ccNoEmpty = validator.isEmpty(ccNo);
        var ccExpEmpty = validator.isEmpty(ccExp);
        var ccPinEmpty = validator.isEmpty(ccPin);
        var dlNoEmpty = validator.isEmpty(dlNo);

        return !fnameEmpty && !lnameEmpty && !usernameEmpty && !pwEmpty && !emailEmpty && !ccNoEmpty && !ccExpEmpty && !ccPinEmpty && !dlNoEmpty;

    }

    function isValidUsername(field, callback) {

        var username = validator.trim($('#username').val());
        var isEmpty = validator.isEmpty(username);

        if(!isEmpty) {
            
            $.get('/getCheckUsername', {uName: username}, function (result) {

                /*
                    if the current value of idNum exists in the database
                    change the background-color of the `<input>` element to red
                    display an error message
                    and disable the submit button
                */
                if(result.uName == username) {

                    if(field.is($('#username'))){

                        $('#usernameError').text('Username already registered');
                        $('#username').css('border-color', 'red');

                    }

                    return callback(false);
                    
                }
    
                /*
                    else
                    change the background-color of the `<input>` element back
                    remove the error message
                    and enable the submit button
                */
                else {

                    if(field.is($('#username'))){

                        $('#usernameError').text('');
                        $('#username').css('border-color', '#E3E3E3');

                    }
                    
                    return callback(true);
                }
            });
        }

        else {

            if(field.is($('#username'))){

                $('#usernameError').text('Username should not be empty');
                $('#username').css('border-color', 'red');

            }

            return callback(false);

        }
    }

    function isValidPassword (field) {

        var validPassword = false;

        var pw = validator.trim($('#pw').val());
        var isValidLength = validator.isLength(pw, {min: 8});
        

        if(isValidLength) {

            if(field.is($('#pw'))) {

                $('#pwError').text('');
                $('#pw').css('border-color', '#E3E3E3');
            }

            validPassword = true;

        }

        else {

            if(field.is($('#pw'))) {

                $('#pwError').text('Passwords should contain at least 8 characters.');
                $('#pw').css('border-color', 'red');

            }
        }

        return validPassword;

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

        var validPassword = isValidPassword(field);

        isValidUsername(field, function(validUsername) {

            if(filled && validPassword && validUsername) {

                $('#submit').prop('disabled', false);

            }

            else {

                $('#submit').prop('disabled', true);

            }
        });
    }

    $('#fname').keyup(function() {

        validateField($('#fname'), 'First name', $('#fnameError'));

    });

    $('#lname').keyup(function() {

        validateField($('#lname'), 'Last name', $('#lnameError'));

    });

    $('#username').keyup(function() {

        validateField($('#username'), 'Username', $('#usernameError'));

    });

    $('#pw').keyup(function() {

        validateField($('#pw'), 'Password', $('#pwError'));

    });

    $('#email').keyup(function() {

        validateField($('#email'), 'Email', $('#emailError'));

    });

    $('#ccNo').keyup(function() {

        validateField($('#ccNo'), 'Credit Card Numbers', $('#ccNoError'));

    });

    $('#ccExp').keyup(function() {

        validateField($('#ccExp'), 'Credit Card Expiration', $('#ccExpError'));

    });

    $('#ccPin').keyup(function() {

        validateField($('#ccPin'), 'Credit Card PIN', $('#ccPinError'));

    });

    $('#dlNo').keyup(function() {

        validateField($('#dlNo'), 'Driver\'s License Number', $('#dlNoError'));

    });
});