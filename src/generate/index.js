'use strict';

const errors = require('../errors');

exports.findAll = (req, res, next) => {
  // Simulate task list, normally this would be retrieved from a database
  const tasks = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  res.status(200).json(tasks);
};

exports.buggyRoute = (req, res, next) => {
  // Simulate a custom error
  next(errors.newHttpError(400, 'bad request'));
};
