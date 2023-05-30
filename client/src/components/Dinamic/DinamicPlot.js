import React, { useEffect, useState } from "react";

import PlotPage from "../PlotPage/PlotPage";
import TablePage from "../Table/TablePage";

import "./DinamicPlot.css";

const Dinamic = ({ machine, action }) => {
    const [modelType, setModelType] = useState("M");
    const [predict, setPredict] = useState([]);

    useEffect(() => {
        if (modelType === "M") {
            setModelType("H");
        } else if (modelType === "H") {
            setModelType("L");
        } else if (modelType === "L") {
            setModelType("M");
        }

        const dataRuins = machine.filter((model) => model.Torque > 64 && model.Type === modelType);

        const dinamicInterval = setInterval(() => {
            setPredict(dataRuins);
        }, 5000);

        return () => { clearInterval(dinamicInterval) };
    }, [predict.length]);

    return (
        <div className="div_dinamic_containe">
            <PlotPage
                predict={predict}
                action={action}
            />

            <TablePage
                machine={predict}
            />
        </div>
    )
};

const DinamicPlot = ({ machine, action }) => {
    return (
        <Dinamic
            machine={machine}
            action={action}
        />
    );
};

export default DinamicPlot;