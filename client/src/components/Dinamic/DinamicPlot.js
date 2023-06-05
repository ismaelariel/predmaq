import React, { useEffect, useState } from "react";

import PlotPage from "../PlotPage/PlotPage";
import TablePage from "../Table/TablePage";

import "./DinamicPlot.css";

const Dinamic = ({ machine, descMachine, setDescMachine }) => {
    const [predict, setPredict] = useState([]);
    const [modelName, setModelName] = useState("M");

    useEffect(() => {
        const data = machine.filter((model) => model.Torque > 64 && model.Type === modelName);

        const dinamicInterval = setInterval(() => {
            switch(modelName) {
                case "M":
                    setModelName("H");
                    break;
                case "H":
                    setModelName("L");
                    break;
                case "L":
                    setModelName("M");
                    break;
                default:
                    setModelName("M");
                    break;
            }

            setPredict(data);
            setDescMachine(`${modelName} - ${data.length}`);
        }, 5000);

        return () => { clearInterval(dinamicInterval) };
    }, [predict.length]);

    return (
        <div className="div_dinamic_containe">
            <PlotPage
                predict={predict}
                nameState={descMachine}
            />

            <TablePage
                predict={predict}
            />
        </div>
    )
};

const DinamicPlot = ({ machine, descMachine, setDescMachine }) => {
    return (
        <Dinamic
            machine={machine}
            descMachine={descMachine}
            setDescMachine={setDescMachine}
        />
    );
};

export default DinamicPlot;
