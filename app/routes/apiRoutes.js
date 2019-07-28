// ===============================================================================
// LOAD DATA
// ===============================================================================

const data = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    app.post("/api/friends", function (req, res) {
        console.log(data);
        data.push(req.body);
        res.json(true);
    });
};
