import React from "react";

import PlotPage from "../PlotPage/PlotPage";
import TablePage from "../TablePage/TablePage";

import "./Fixed.css";

const Fixed = ({ predict, nameState }) => {
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

export default Fixed;