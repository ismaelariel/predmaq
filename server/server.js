const express = require("express");
const http = require("http");
const bodyParser = require('body-parser');
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5001;
const router = require("./routes/router");

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(router);

const dbo = require("./dbs/connect");

server.listen(PORT, () => {
    dbo.connectToServer(function (error) {
        if (error) console.log(error);
    });

    console.log(`Server listener on port ${PORT}`);
});
