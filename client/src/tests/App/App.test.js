import React, { Component } from "react";
import { render } from "@testing-library/react";

import App from "../../App";

test("resize chart observer", () => {
    jest.mock('react-chartjs-2', () => ({
        Bar: () => null,
        Line: () => null,
        Doughnut: () => null
    }));
});

test("render app view", () => {
    render(<App />);
});
