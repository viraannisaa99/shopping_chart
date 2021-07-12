const { check, validationResult } = require('express-validator');

const rules = [
  check('name').notEmpty().withMessage('The name is required').trim().escape(),

  check('description').notEmpty().withMessage('The description is required').trim().escape(),

  check('price').notEmpty().withMessage('The price is required').isNumeric().withMessage('Price must be a decimal').trim().escape(),

  check('countInStock').notEmpty().withMessage('The count is required').isNumeric().withMessage('Count must be a number').trim().escape(),

  check('imageUrl').notEmpty().withMessage('The image url is required').trim().escape(),
];

const validateProduct = [
  rules,
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(402).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateProduct;
