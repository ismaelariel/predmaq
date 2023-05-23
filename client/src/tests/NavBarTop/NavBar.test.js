import React from "react";
import {render} from "@testing-library/react";
import NavBar from "../../components/NavBarTop/NavBar";

test("render navbar view", async() => {
    render(<NavBar/>);
});

const mockTimeOutAsync = (like) => {
    setTimeout(() => {
        like(true);
    }, 1000);
}

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('test mock datetime callbacks', async() => {
    const timeCallback = (data) => {
        expect(data).toBeTruthy(); // Pode ser verdadeiro
    }

    mockTimeOutAsync(timeCallback);

    jest.runAllTimers();
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
