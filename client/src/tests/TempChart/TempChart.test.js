import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import TempChart from "../../components/TempChart/TempChart";

jest.mock("react-gauge-chart");

it("render tempchat view", () => {
    const component = renderer.create(
        <TempChart predict={machine.data} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
