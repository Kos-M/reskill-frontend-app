const { query, validationResult } = require("express-validator");

const validatePostID = [
  query("id").optional().isInt().toInt().withMessage("Invalid post ID"),
  // Handle validation results
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validatePostID };
