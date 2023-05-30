const { TextEncoder, TextDecoder } = require("util");
const MemoryDatabaseServer = require("./MemoryDatabaseServer");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = async () => {
    await MemoryDatabaseServer.start();
};