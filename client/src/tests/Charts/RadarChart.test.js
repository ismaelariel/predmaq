import React from "react";
import renderer from "react-test-renderer";

import RadarChart from "../../components/Charts/RadarChart";

jest.mock('react-chartjs-2', () => ({
    Radar: () => null,
}));

const machine = [{
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
}];

describe('RadarChart', () => {
    it('render radar chart component', () => {
        const component = renderer.create(
            <RadarChart predict={machine} nameState="Desgaste" />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});