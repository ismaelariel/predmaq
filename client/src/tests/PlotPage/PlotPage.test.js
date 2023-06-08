import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import PlotPage from "../../components/PlotPage/PlotPage";

it("render linechart view", () => {
    const component = renderer.create(
        <PlotPage
            predict={machine.data}
            nameState="Desgaste"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
