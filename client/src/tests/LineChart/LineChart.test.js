import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import LineChart from "../../components/LineChart/LineChart";

jest.mock("react-chartjs-2");

it("render linechart view", () => {
    const component = renderer.create(
        <LineChart
            predict={machine.data}
            nameState="Desgaste"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
