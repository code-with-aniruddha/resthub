const express = require('express');

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
    res.send('hi there');
});

module.exports = router;
// export { router as signoutRouter };