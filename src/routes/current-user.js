const express = require('express');
const currentUser = require('./../middlewares/current-user');
const NotAuthorized = require('./../middlewares/not-authorized');
const router = express.Router();

router.get('/api/users/currentuser', currentUser, NotAuthorized, (req, res) => {
    res.send({currentUser: req.currentUser || null});
});

module.exports = router;
// export { router as currentUserRouter };