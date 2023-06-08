import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import Dinamic from "../../components/Dinamic/Dinamic";

it("render linechart view", () => {
    const component = renderer.create(
        <Dinamic
            predict={machine.data}
            descMachine="M"
            setDescMachine="9990"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
