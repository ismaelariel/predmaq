import React from "react";
import GaugeChart from "react-gauge-chart";

const TempChart = ({ machine }) => {
    return (
        <GaugeChart
            id="gauge-chart"
            nrOfLevels={machine.map((data) => data.Torque)}
            arcsLength={[12.75, 25.5, 12.75]}
            colors={['#96C2F2', '#F2A7C0', '#F1C2A4']}
            percent={0.37}
            arcPadding={0.02}
            needleColor='#96C2F2'
            textColor='#0000ff'
        />
    );
};

export default TempChart;
