import React from "react";
import axios from "axios";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";
import MockAdapter from 'axios-mock-adapter';

import Predict, { pathAPI } from "../../components/Predict/Predict";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import RadarChart from "../../components/Charts/RadarChart";
import DoughnutChart from "../../components/Charts/DoughnutChart";

describe('Predict Component View', () => {
    const mock = new MockAdapter(axios);

    const machine = {
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

    test("test api machine", async () => {
        mock.onGet(pathAPI).reply(200, { data: [machine] });
    });

    mock.reset();

    it("render app root and chart component", () => {
        const component = renderer.create(
            <Predict />,
            <BarChart machine={machine} action="Desgaste" />,
            <LineChart machine={machine} action="Desgaste" />,
            <RadarChart machine={machine} action="Desgaste" />,
            <DoughnutChart machine={machine} action="Desgaste" />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
