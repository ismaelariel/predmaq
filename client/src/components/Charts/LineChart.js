import React from "react";

import { Chart as ChartJS } from "chart.js/auto";
import { ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const LineChart = ({ predict, nameState }) => {
    const data = {
        labels: predict.map((data) => data.ProductID),
        datasets: [
            {
                label: nameState,
                data: predict.map((data) => nameState === "Desgaste" ?
                    data.ToolWear :
                    data.RotationalSpeed)
            }
        ]
    };

    return (
        <Line
            data={data}
            width={100}
            height={100}
            options={{ maintainAspectRatio: false }}
        />
    );
};

export default LineChart;