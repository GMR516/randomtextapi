'use strict';

const router = require('express').Router();
const errors = require('./src/errors');
const generateRouter = require('./src/generate/router');

//serve html
router.use('/', require('express').static('public'));
// Wire up routers
router.use('/generate', generateRouter);

// Wire up error-handling middleware
router.use(errors.errorHandler);
router.use(errors.nullRoute);

// Export the router
module.exports = router;
