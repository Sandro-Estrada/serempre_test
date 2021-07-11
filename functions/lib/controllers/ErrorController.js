"use strict";

module.exports = {
  conflict(req, res, params) {
    return res.status(409).json(params);
  },
  validationError: (req, res, params) => {
    let errors = params.errors;
    if (errors[0] && errors[0].message) {
      errors = errors.map((error) => error.message);
    }
    const response = {
      type: "validation_error",
      errors: errors,
    };

    return res.status(422).json(response);
  },
  appAuthError: (req, res, params) => {
    return res.status(401).json(params);
  },
  notFoundError: (req, res, details) => {
    return res.status(404).json(details);
  },
  serverError: (req, res, params) => {
    const err = params.err;

    return res.status(500).json({
      err: err ? err.toString() : "Not 'err' supplied",
      stack: err ? err.stack : "Not 'err' supplied",
    });
  },
  forbidden: (req, res, params) => {
    const err = params.err;

    return res.status(403).json({
      err: err ? err.toString() : "Not 'err' supplied",
      stack: err ? err.stack : "Not 'err' supplied",
    });
  },
};
