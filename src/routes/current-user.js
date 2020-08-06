const express = require('express');

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
    res.send('hi there');
});

module.exports = router;
// export { router as currentUserRouter };