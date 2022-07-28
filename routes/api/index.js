const router = require('express').Router();

//declaring variables for routes

const userRoutes = require('./userRoutes.js');
const thoughtsRoutes = require('./thoughtRoutes.js');

//created users and thoughts route
router.use("/users", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;


