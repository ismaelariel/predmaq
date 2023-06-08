import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import BarChart from "../../components/BarChart/BarChart";

it("render linechart view", () => {
    const component = renderer.create(
        <BarChart
            predict={machine.data}
            nameState="Desgaste"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
