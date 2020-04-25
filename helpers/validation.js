
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

    addCarValidation: function(){
        var validation = [
            check('name', 'Car name should be atleast three characters.').isLength({min:3}),

            check('brand', 'Brand name should be atleast three characters.').isLength({min:3}),

            check('carClass', 'Car class should not be empty.').notEmpty(),

            check('bodyStyle', 'Car body style should be atleast three characters.').isLength({min:3}),

            check('capacity', 'Invalid input.').notEmpty().isDecimal(),

            check('price', 'Invalid price').notEmpty().isDecimal(),

            check('description', 'Description should be atleast three characters.').isLength({min:3}),

            check('imgLink', 'Image link should be atleast three characters.').isLength({min:3}),

            check('optionImg', 'Option Image link should be atleast three characters.').isLength({min:3})
        ];

        return validation;
    }

    updateCarValidation: function(){
        var validation = [
            check('name', 'Car name should be atleast three characters.').isLength({min:3}),

            check('brand', 'Brand name should be atleast three characters.').isLength({min:3}),

            check('carClass', 'Car class should not be empty.').notEmpty(),

            check('bodyStyle', 'Car body style should be atleast three characters.').isLength({min:3}),

            check('capacity', 'Invalid input.').notEmpty().isDecimal(),

            check('price', 'Invalid price').notEmpty().isDecimal(),

            check('description', 'Description should be atleast three characters.').isLength({min:3}),

            check('imgLink', 'Image link should be atleast three characters.').isLength({min:3}),
            
            check('optionImg', 'Option Image link should be atleast three characters.').isLength({min:3})
        ];

        return validation;
    }
}

module.exports = validation;
