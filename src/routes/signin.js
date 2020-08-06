const express = require('express');

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send('hi there');
});

module.exports = router;
// export { router as signinRouter };