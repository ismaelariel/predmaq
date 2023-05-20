const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require('body-parser');
const dbo = require("./db/connect");

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

server.listen(PORT, () => {
    dbo.connectToServer(function (error) {
        if (error) console.log(error);
    });

    console.log(`Server listener on port ${PORT}`);
});
