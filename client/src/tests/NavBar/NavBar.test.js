import React from "react";
import renderer from "react-test-renderer";
import NavBar from "../../App";

const mockTimeOutAsync = (like) => {
    setTimeout(() => {
        like(true);
    }, 1000);
}

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('NavBar Component View', () => {
    test('test mock datetime callbacks navbar', async () => {
        const timeCallback = (data) => {
            expect(data).toBeTruthy();
        }

        mockTimeOutAsync(timeCallback);

        jest.runAllTimers();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });

    it("render navbar view", async () => {
        const component = renderer.create(
            <NavBar />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
