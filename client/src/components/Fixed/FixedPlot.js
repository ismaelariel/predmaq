import React from "react";

import PlotPage from "../PlotPage/PlotPage";
import TablePage from "../Table/TablePage";

import "./FixedPlot.css";

const FixedPlot = ({ machine, action, isKeyPress }) => {
    return (
        <div className="div_fixed_containe">
            <PlotPage
                predict={machine}
                action={action}
                isKeyPress={isKeyPress}
            />

            <TablePage
                machine={machine}
            />
        </div>
    );
};

export default FixedPlot;