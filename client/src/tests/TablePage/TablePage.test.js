import React from "react";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import TablePage from "../../components/TablePage/TablePage";

it("render linechart view", () => {
    const component = renderer.create(
        <TablePage
            predict={machine.data}
        />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
