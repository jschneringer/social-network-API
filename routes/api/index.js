const router = require('express').Router();

//declaring variables for routes

const userRoutes = requires('./userRoutes.js');
const thoughtsRoutes = requires('./thoughtRoutes.js');

//created users and thoughts route
router.use('/users', userRoutes);
router.use('/thoughts', thoughtsRoutes);

module.exports = router;


