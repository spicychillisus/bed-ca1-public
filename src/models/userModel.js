
// SECTION A
// this handles all the required mysql syntax for user handling
// required module
const pool = require('../services/db');

// code for getting all users
module.exports.selectAll = (callback) => {

    const SQLSTATEMENT = `
    SELECT * FROM user;
    `;

    pool.query(SQLSTATEMENT, callback)
};

// sql code for getting individual user data
module.exports.selectByID = (data, callback) => {

    const SQLSTATEMENT = `
    SELECT u.*, COALESCE(SUM(CAST(t.points AS SIGNED)), 0) AS userpoints
    FROM User u
    LEFT JOIN TaskProgress tp ON u.user_id = tp.user_id
    LEFT JOIN Task t ON tp.task_id = t.task_id
    WHERE u.user_id = ?
    GROUP BY u.user_id;
    `;

    const VALUES = [data.user_id];

    pool.query(SQLSTATEMENT, VALUES, callback)
}

// this will add a new user into the user and pointhandle table
module.exports.insertSingle = (data, callback) => {
    const SQLSTATEMENT = `
    INSERT INTO User (username, email)
    VALUES (?, ?);
    `
    ;

    const VALUES = [data.username, data.email, data.username, data.email];
    pool.query(SQLSTATEMENT, VALUES, callback)
};

// checking for duplicate email using count function
module.exports.checkForDuplicateEmail = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT count(email) AS count FROM user
    WHERE email = ?;
    ;
    `;
    const VALUES = [data.email];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

// checking for duplicate username using count function
module.exports.checkForDuplicateUsername = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT count(username) AS count FROM user
    WHERE username = ?;
    ;
    `;
    const VALUES = [data.username];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

// updates by providing user ID
module.exports.updateByID = (data, callback) => {
    const SQLSTATEMENT = `
    UPDATE user 
    SET username = ?, email = ? 
    WHERE user_id = ?;
    `;
    const VALUES = [data.username, data.email, data.user_id];
    pool.query(SQLSTATEMENT, VALUES, callback);
}

// deletes by providing user ID
module.exports.deleteUserByID = (data, callback) => {
    const SQLSTATEMENT = `
    DELETE FROM User
    WHERE user_id = ?;

    ALTER TABLE User AUTO_INCREMENT = 1;
    `;

    const VALUES = [data.user_id];
    pool.query(SQLSTATEMENT, VALUES, callback);
};