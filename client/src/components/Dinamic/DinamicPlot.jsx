import React, {useEffect, useState} from "react";
import PlotPage from "../PlotPage/PlotPage";

const Dinamic = ({machine, action}) => {
    const [modelType, setModelType] = useState("M");
    const [predict, setPredict] = useState([]);
    
    useEffect(() => {
        if(modelType === "M") {
            setModelType("H");
        } else if(modelType === "H") {
            setModelType("L");
        } else if(modelType === "L") {
            setModelType("M");
        }
        
        const dataRuins = machine.filter((model) => model.Torque > 64 && model.Type === modelType);
    
        const dinamicInterval = setInterval(() => {
            setPredict(dataRuins);
        }, 5000);
    
        return () => {clearInterval(dinamicInterval)};
    }, [predict.length]);

    return(
        <PlotPage
            predict={predict}
            action={action}
        />
    )
};

const DinamicPlot = ({machine, action, isDinamic}) => {
    return(isDinamic ?
        <Dinamic
            machine={machine}
            action={action}
        /> :
        ""
    );
};

export default DinamicPlot;