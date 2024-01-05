const pool = require('../services/db');

const SQLSTATEMENT = `
DROP TABLE IF EXISTS User;

DROP TABLE IF EXISTS Task;

DROP TABLE IF EXISTS TaskProgress;

DROP TABLE IF EXISTS vehicle;

DROP TABLE IF EXISTS ownership;

CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username TEXT,
    email TEXT

);

CREATE TABLE Task (
    task_id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT,
    description TEXT,
    points INT

);

CREATE TABLE TaskProgress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    task_id INT NOT NULL,
    completion_date TIMESTAMP,
    notes TEXT

);

CREATE TABLE vehicle (
    vehicle_id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_name TEXT,
    category TEXT,
    vehicle_description TEXT,
    points_needed INT
);

CREATE TABLE ownership (
    id INT PRIMARY KEY AUTO_INCREMENT,
    vehicle_id INT NOT NULL,
    owner_id INT NOT NULL
);

INSERT INTO Task (title, description, points) 
VALUES
("Plant a Tree", "Plant a tree in your neighbourhood or a designated green area." , 50),
("Use Public Transportation", "Use public transportation or carpool instead of driving alone." , 30),
("Reduce Plastic Usage", "Commit to using reusable bags and containers." , 40),
("Energy Conservation", "Turn off lights and appliances when not in use." , 25),
("Composting", "Start composting kitchen scraps to create natural fertilizer" , 35);

INSERT INTO vehicle (vehicle_name, category, vehicle_description, points_needed)
VALUES
("Ferrari SF23", "CAR", "This is the Formula 1 car that Carlos Sainz drove to win the Singapore Grand Prix in 2023", 300),
("Mercedes Benz O405 Hispano Carocerra", "BUS", "This particular bus model was a common sight in the early 2000s, and was operated by Trans Island and SMRT", 290),
("Airbus A380-800", "PLANE", "This is the largest commercial aircraft in the world.", 293022);
`
;
// this is to send the sqlstatement code into mysql workbench.
pool.query(SQLSTATEMENT, (error, results, fields) => {
    if (error) {
        console.error("Error creating tables", error);
    } else {
        console.log("Success.", results);
    }
    process.exit();
});

