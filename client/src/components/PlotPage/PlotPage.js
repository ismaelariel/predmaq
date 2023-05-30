import React from "react";

import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import RadarChart from "../Charts/RadarChart";
import TempChart from "../Charts/TempChart";

import "./PlotPage.css";

const PlotPage = ({ predict, action }) => {
    const viewManyPlot = () => {
        if (action === "Rotação") {
            return (
                <div className="div_plot_content">
                    <BarChart
                        machine={predict}
                        action={action}
                    />
                </div>
            );
        } else if (action === "Desgaste") {
            return (
                <div className="div_plot_content">
                    <BarChart
                        machine={predict}
                        action={action}
                    />
                </div>
            );
        } else if (action === "Pesquisa por Modelo") {
            return (
                <div className="div_plot_content">
                    <BarChart
                        machine={predict}
                        action={action}
                    />
                </div>
            );
        } else {
            return (
                <div className="div_plot_content">
                    <RadarChart
                        machine={predict}
                        action={action}
                    />
                </div>
            );
        }
    };

    return (
        <div className="div_plot_conatiner">
            {viewManyPlot()}

            <div className="div_plot_content">
                {predict.length > 1 ? (<LineChart
                    machine={predict}
                    action={action}
                />) : <TempChart
                    machine={predict}
                />}
            </div>
        </div>
    );
};

export default PlotPage;
