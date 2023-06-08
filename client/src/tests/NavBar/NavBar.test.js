import React from "react";
import renderer from "react-test-renderer";

import NavBar from "../../components/NavBar/NavBar";

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('test mock datetime callbacks navbar', async () => {
    const timerApp = require("../../utils/timerApp");
    const callback = jest.fn();

    timerApp(callback);

    renderer.act(() => {
        // Neste momento, o retorno de chamada ainda não deveria ter sido chamado
        expect(callback).not.toBeCalled();

        // Avanço rápido até que todos os temporizadores tenham sido executados
        jest.advanceTimersByTime(1000);

        // Agora nosso retorno deveria ter sido chamado!
        expect(callback).toBeCalled();
        expect(callback).toHaveBeenCalledTimes(1);
    });
});

it("render navbar", async () => {
    const component = renderer.create(
        <NavBar />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
