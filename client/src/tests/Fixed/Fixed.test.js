import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import Fixed from "../../components/Fixed/Fixed";

it("render linechart view", () => {
    const component = renderer.create(
        <Fixed
            predict={machine.data}
            nameState="M"
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
