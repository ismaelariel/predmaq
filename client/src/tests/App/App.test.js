import React from "react";
import renderer from "react-test-renderer";

import App from "../../App";

test('use jsdom and set the URL in this test file', () => {
    expect(window.location.href).toBe('http://localhost:3000/');
});

it("render linechart view", () => {
    const component = renderer.create(
        <App />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
