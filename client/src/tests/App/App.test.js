import React from "react";
import renderer from "react-test-renderer";

import App from "../../App";

const { MongoClient } = require('mongodb');

describe('App Component View', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        db = await connection.db(globalThis.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('test mongodb connection', async () => {
        const mcdb = db.collection('predmaq');

        const machine = {
            _id: '6443e224931711288579065c',
            UDI: 1,
            ProductID: 'M14860',
            Type: 'M',
            AirTemperature: 298.1,
            ProcessTemperature: 308.6,
            RotationalSpeed: 1551,
            Torque: 42.8,
            ToolWear: 0,
            Target: 0,
            FailureType: 'No Failure'
        };

        await mcdb.insertOne(machine);

        const insertedMachine = await mcdb.findOne({ _id: '6443e224931711288579065c' });
        expect(insertedMachine).toEqual(machine);
    });

    beforeEach(async () => {
        await db.collection('predmaq').deleteMany({});
    });

    it('render app root component', () => {
        const component = renderer.create(
            <App />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
