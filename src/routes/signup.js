const express = require('express');

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    console.log(req);
    
    if(!req.body.email || !req.body.password){
        throw new Error('invalid data');
    }
    
    // res.send('hi there');
});

module.exports = router;
// export { router as signupRouter };