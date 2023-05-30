import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { ArcElement, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = ({ machine, action }) => {
    const labelOne = {
        labels: machine.map((data) => data.ProductID),
        datasets: [
            {
                label: action,
                data: machine.map((data) => action === "Desgaste" ? data.ToolWear : data.RotationalSpeed)
            }
        ]
    };

    const labelMany = {
        labels: machine.map((data) => data.ProductID),
        datasets: [
            {
                label: "Temperature",
                data: machine.map((data) => data.ProcessTemperature),
                backgroundColor: '#96c2f2'
            },
            {
                label: "Desgaste",
                data: machine.map((data) => action === "Desgaste" || action === "Pesquisa por Modelo" ? data.ToolWear : data.RotationalSpeed),
                backgroundColor: '#f2a7c0'
            },
            {
                label: "Torque",
                data: machine.map((data) => data.Torque),
                backgroundColor: '#f1c2a4'
            }
        ]
    };

    return (
        <Bar
            data={machine.length === 1 ? labelMany : labelOne}
            width={100}
            height={100}
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default BarChart;