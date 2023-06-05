import React from "react";

import GaugeChart from "react-gauge-chart";

const TempChart = ({ predict }) => {
    const temperature = predict.map((data) => data.ProcessTemperature);
    const toolwear = predict.map((data) => data.ToolWear);
    const torque = predict.map((data) => data.Torque);

    return (
        <GaugeChart
            id="gauge-chart"
            nrOfLevels={temperature}
            arcsLength={[temperature, toolwear, torque]}
            colors={['#96C2F2', '#F2A7C0', '#F1C2A4']}
            percent={temperature / 1000}
            arcPadding={0.02}
            needleColor='#96C2F2'
            textColor='#0000ff'
        />
    );
};

export default TempChart;
