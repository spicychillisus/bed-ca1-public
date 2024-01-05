// required module
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const mainRoutes = require("./routes/mainRoutes");

// this is the message that will display on the body if connection is successful
app.get('/', (req, res, next) => {
    res.send("this bed ca1 was done by spicychillisus"); 
});
app.use("/", mainRoutes);

// app export
module.exports = app;