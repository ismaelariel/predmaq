import React from "react";
import renderer from "react-test-renderer";

import Predict from "../../components/Predict/Predict";

describe('PredictView', () => {
    it('render predict component', () => {
        const component = renderer.create(
            <Predict />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
