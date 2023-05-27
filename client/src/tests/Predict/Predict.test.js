import React from "react";
import {render} from "@testing-library/react";
import Predict from "../../components/Predict/Predict";

test("render navbar view", async() => {
    render(<Predict/>);
});
