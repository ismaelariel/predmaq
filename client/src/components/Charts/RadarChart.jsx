import React from "react";

import {Chart as ChartJS} from "chart.js/auto";
import {ArcElement, Tooltip, Legend} from "chart.js";
import {Radar} from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadarChart = ({machine, action}) => {
    const data = {
        labels: machine.map((data) => data.ProductID),
        datasets: [
            {
                label: action,
                data: machine.map((data) => data.ProcessTemperature)
            }
        ]
    };
    
    return(
        <>
            <Radar
                data={data}
                width={100}
                height={100}
                options={{ maintainAspectRatio: false }}
            />
        </>
    );
};

export default RadarChart;