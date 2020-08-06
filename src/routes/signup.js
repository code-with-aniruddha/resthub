const express = require('express');

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    res.send('hi there');
});

module.exports = router;
// export { router as signupRouter };