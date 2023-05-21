const express = require("express");
const router = express.Router();
const connect = require("../db/connect");

router.route("/").get((req, res) => {
    const db = connect.getClient();

    db.collection("predmaq").find({}).toArray().then((data) => {
        res.json(data);
    });
});

module.exports = router;
