// This file handles the routing for an API using Express.js and the Router module.
// It sets up different sections of routes and attaches them to the main router.


const express = require('express'); // using express.js
const router = express.Router(); // uses router module
// the below gets the data for the routes
const userRoutes = require('./userRoutes');
const taskProgressRoutes = require('./taskProgressRoutes'); 
const taskRoutes = require('./taskRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const ownershipRoutes = require('../routes/ownershipRoutes');

// SECTION A
router.use("/task_progress", taskProgressRoutes);
router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);

// SECTION B
router.use("/vehicles", vehicleRoutes);
router.use("/ownership", ownershipRoutes);

module.exports = router;    