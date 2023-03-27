const express = require("express");
const router = express.Router();
const dbo = require("../dbs/connect");

router.route("/").get((req, res) => {
    let db_connect = dbo.getDb();
    db_connect
        .collection("db_maintenance")
        .find({})
        .toArray()
        .then((data) => {
            res.json(data);
        });
});

module.exports = router;
