import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../../components/NavBarTop/NavBar";

it("render navbar view page", () => {
    const div = document.createElement("div");
    const navbar = ReactDOM.createRoot(div);
    navbar.render(<NavBar />);
});

const mockTimeOutAsync = (like) => {
    setTimeout(() => {
        like(true);
    }, 1000);
}

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('test mock datetime callbacks', () => {
    const timeCallback = (data) => {
        expect(data).toBeTruthy(); // Pode ser verdadeiro
    }

    mockTimeOutAsync(timeCallback);

    jest.runAllTimers();
    
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
