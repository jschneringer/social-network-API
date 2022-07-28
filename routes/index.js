// Requires express Router
const router = require('express').Router();

// API routes
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res)=> {
    res.status(404).send('404 Error');
});

//exporting router
module.exports = router;
