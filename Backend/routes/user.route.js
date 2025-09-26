const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('user route by Harsh');
});

module.exports = router;