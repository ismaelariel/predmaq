import React from "react";

import PlotPage from "../PlotPage/PlotPage";

const FixedPlot = ({machine, action, isKeyPress}) => {
    return(
        <PlotPage
            predict={machine}
            action={action}
            isKeyPress={isKeyPress}
        />
    );
};

export default FixedPlot;