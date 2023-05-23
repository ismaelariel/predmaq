import React from "react";

import PlotPage from "../PlotPage/PlotPage";

const FixedPlot = ({machine, action}) => {
    return(
        <PlotPage
            predict={machine}
            action={action}
        />
    );
};

export default FixedPlot;