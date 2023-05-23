import React from "react";
import {render, screen} from "@testing-library/react";
import PlotPage from "../../components/PlotPage/PlotPage";

import '@testing-library/jest-dom';

test('render predict view', async() => {
    const predict = [{
        UDI: 1,
        ProductID: "M14860",
        Type: "M",
        AirTemperature: 298.1,
        ProcessTemperature: 308.6,
        RotationalSpeed: 1551,
        Torque: 42.8,
        ToolWear: 0,
        Target: 0,
        FailureType: "No Failure"
    }];

    const {getByTestId} = render(<PlotPage predict={predict} action={false}/>);

    const predictView = getByTestId('div_plot_content');
    expect(predictView).toBeInTheDocument();
});
