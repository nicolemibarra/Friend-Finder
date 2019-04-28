// Dependencies
var path = require("path");

// Routing
module.exports = (app) => {

    // HTML GET request to survey
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // HTML GET request to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
