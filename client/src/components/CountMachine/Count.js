import React from "react";

import "./Count.css";

const Count = ({predict, modelValue, isKeyPress}) => {
    return(
        <div className="div_count_container">
            <h4 id="id_count_info">{!isKeyPress ? "" : `${modelValue} - ${predict.length}`}</h4>
        </div>
    );
};

export default Count;
