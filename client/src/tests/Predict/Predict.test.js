import React from "react";
import axios from "axios";
import renderer from "react-test-renderer";
import machine from "../../utils/machine.json";

import Predict from "../../components/Predict/Predict";

jest.mock('axios');

test('deve buscar valores de estado da maquina', () => {
    const model = { Torque: 42.8 };
    const resp = {data: model}

    axios.get.mockResolvedValue(resp);

    return machine.data.all().then(data => expect(data).toEqual(model));
});

it("render root app", () => {
    const component = renderer.create(
        <Predict />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
