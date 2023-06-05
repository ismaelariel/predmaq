import React from "react";

import PlotPage from "../PlotPage/PlotPage";
import TablePage from "../Table/TablePage";

import "./FixedPlot.css";

const FixedPlot = ({ predict, nameState }) => {
    return (
        <div className="div_fixed_containe">
            <PlotPage
                predict={predict}
                nameState={nameState}
            />

            <TablePage predict={predict} />
        </div>
    );
};

export default FixedPlot;