const express = require('express');
const NotFoundError = require('./../errors/not-found-error');

const router = express.Router();

router.post('*', (req, res) => {
    throw new NotFoundError('not found');
});

module.exports = router;