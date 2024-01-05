// Section A
// this model handles all required mysql syntax for the vehicle table
// required module
const pool = require('../services/db');

module.exports.checkForDuplicateName = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT count(vehicle_name) AS count FROM vehicle
    WHERE vehicle_name = ?;
    `

    const VALUES = [data.vehicle_name];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.checkForDuplicateDescript = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT count(vehicle_description) AS count FROM vehicle
    WHERE vehicle_description = ?;
    `;

    const VALUES = [data.vehicle_description];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

// POST /vehicle
module.exports.createNewVehicle = (data, callback) => {
    const SQLSTATEMENT = `
    INSERT INTO vehicle (vehicle_name, category, vehicle_description, points_needed)
    VALUES (?, UPPER(?), ?, ?);
    `
    ;
    const VALUES = [data.vehicle_name, data.category, data.vehicle_description, data.points_needed];

    pool.query(SQLSTATEMENT, VALUES, callback);
};

// GET ALL VEHICLES
module.exports.selectAll = (callback) => {
    const SQLSTATEMENT = `
    SELECT * FROM vehicle;
    `;

    pool.query(SQLSTATEMENT, callback)
};

// get vehicle by certain id
module.exports.selectVehicleById = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT * FROM vehicle
    WHERE vehicle_id = ?;
    `;

    const VALUES = [data.vehicle_id];

    pool.query(SQLSTATEMENT, VALUES, callback)
};

// filters the vehicle results by category
module.exports.filterByCat = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT * FROM vehicle
    WHERE category = ?;
    `;

    const VALUES = [data.category];  
    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.updateVehicleDetails = (data, callback) => {
    const SQLSTATEMENT = `
    UPDATE vehicle
    SET vehicle_name = ?, category = UPPER(?), vehicle_description = ?, points_needed = ?
    WHERE vehicle_id = ?;
    `;

    const VALUES = [data.vehicle_name, data.category, data.vehicle_description, data.points_needed, data.vehicle_id];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

module.exports.deleteVehicleById = (data, callback) => {
    const SQLSTATEMENT = `
    DELETE FROM vehicle
    WHERE vehicle_id = ?;

    ALTER TABLE vehicle AUTO_INCREMENT = 1;
    `;

    const VALUES = [data.vehicle_id];
    pool.query(SQLSTATEMENT, VALUES, callback);
};