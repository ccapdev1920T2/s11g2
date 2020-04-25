
const { check } = require('express-validator');

const validation = {

    registerValidation: function () {

        var validation = [

            check('fname', 'First name should not be empty.').notEmpty(),

            check('lname', 'Last name should not be empty.').notEmpty(),

            check('username').notEmpty(),

            check('pw', 'Passwords should contain at least 8 characters.')
            .isLength({min: 8}),

            check('email', 'Email should not be empty.').notEmpty(),

            check('ccNo', 'Credit Card Numbers should not be empty.').notEmpty(),

            check('ccNo', 'Please enter numbers only').isDecimal(),

            check('ccExp', 'Credit Card Expiry Date should not be empty.').notEmpty(),

            check('ccPin', 'Credit Card PIN should not be empty.').notEmpty(),

            check('dlNo', 'Driver\'s License Number should not be empty.').notEmpty()

        ];

        return validation;
    }
}

module.exports = validation;
