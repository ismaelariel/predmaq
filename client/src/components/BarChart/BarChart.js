import React from "react";

import { Chart as ChartJS } from "chart.js/auto";
import { ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = ({ predict, nameState }) => {
    const labelOne = {
        labels: predict.map((data) => data.ProductID),
        datasets: [
            {
                label: nameState,
                data: predict.map((data) => nameState === "Desgaste" ?
                    data.ToolWear : data.RotationalSpeed),
                backgroundColor: '#0000ff'
            }
        ]
    };

    const labelMany = {
        labels: predict.map((data) => data.ProductID),
        datasets: [
            {
                label: "Temperature",
                data: predict.map((data) => data.ProcessTemperature),
                backgroundColor: '#0000ff'
            },
            {
                label: "Desgaste",
                data: predict.map((data) => nameState === "Desgaste" ||
                    nameState === "Pesquisa por Modelo" ?
                    data.ToolWear :
                    data.RotationalSpeed),
                backgroundColor: '#ff0000'
            },
            {
                label: "Torque",
                data: predict.map((data) => data.Torque),
                backgroundColor: '#008000'
            }
        ]
    };

    return (
        <Bar
            data={predict.length === 1 ? labelMany : labelOne}
            width={100}
            height={100}
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default BarChart;
