const { check, validationResult } = require('express-validator');

exports.profileRules = () => [
      check('image', 'image is required').notEmpty(),
      check('location', 'location is required ').notEmpty(),
      check('status', 'status is required').notEmpty(),
      check('farmerDomaine', 'farmerDomaine is required ').notEmpty(),
      check('adresse', 'adresse is required ').notEmpty(),
]

exports.validator = (req, res, next) => {
      const errors = validationResult(req)
      errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() })
}