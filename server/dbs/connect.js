const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.ATLAS_URI;
let _db;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = {
    connectToServer: async function (callback) {
        try {
            await client.connect();
        } catch (e) {
            console.error(e);
        }

        _db = client.db("appdata");

        try {
            var count = await _db.collection("db_maintenance").countDocuments();
            console.log(count);
        } catch (e) {
            console.error(e);
        }

        if (_db !== undefined) {
            return true;
        }
    },
    getDb: function () {
        return _db;
    },
};
