import React from "react";
import {Chart as ChartJS} from "chart.js/auto";
import {ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({machine}) => {
    const data = {
        labels: machine.map((data) => data.ProductID),
        datasets: [
            {
                label: "Pesquisa por Modelo",
                data: [machine.map((data) => data.Torque), machine.map((data) => data.ToolWear)]
            }
        ]
    };

    return (
        <Doughnut
            data={data}
            width={100}
            height={100}
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default DoughnutChart;