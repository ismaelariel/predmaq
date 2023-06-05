import React from "react";
import renderer from "react-test-renderer";

import DinamicPlot from "../../components/Dinamic/DinamicPlot";

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

describe('DinamicPlot', () => {
    it('render dinamic plot component', () => {
        const component = renderer.create(
            <DinamicPlot  
                machine={machine}
                descMachine=""
                setDescMachine="" />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});