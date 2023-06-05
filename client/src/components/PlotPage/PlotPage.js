import React from "react";

import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import TempChart from "../Charts/TempChart";

import "./PlotPage.css";

const PlotPage = ({ predict, nameState }) => {
    return (
        <div className="div_plot_conatiner">
            <div className="div_plot_content">
                <BarChart
                    predict={predict}
                    nameState={nameState}
                />
            </div>

            <div className="div_plot_content">
                {predict.length > 1 ?
                    (<LineChart
                        predict={predict}
                        nameState={nameState}
                    />) :
                    <TempChart
                        predict={predict}
                    />}
            </div>
        </div>
    );
};

export default PlotPage;
