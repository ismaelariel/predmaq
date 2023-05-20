const {MongoClient} = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.ATLAS_URI;
let _client;

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = {
    connectToServer: async(callback) => {
        try {
            await client.connect();
        } catch (e) {
            console.error(e);
        }

        _client = client.db("appdata");

        try {
            var count = await _client.collection("predmaq").countDocuments();
            console.log(count);
        } catch (e) {
            console.error(e);
        }

        if (_client !== undefined) {
            return true;
        }
    },
    getClient: () => {
        return _client;
    },
};
