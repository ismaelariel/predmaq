import React, {useEffect, useState} from "react";
import axios from "axios";

import NavBar from "../NavBarTop/NavBar";
import FixedPlot from "../Fixed/FixedPlot";
import DinamicPlot from "../Dinamic/DinamicPlot";
import TablePage from "../Table/TablePage";
import CountMachine from "../Count/CountMachine";

import img from "../../images/predmaq.jpeg";
import "./Predict.css";

const Predict = () => {
    const [machine, setMachine] = useState([]);
    const [predict, setPredict] = useState([]);
    const [modelValue, setModelValue] = useState("");
    const [isDinamic, setIsDinamic] = useState(false);
    const [isPredict, setIsPredict] = useState(false);
    const [isKeyPress, setIsKeyPress] = useState(false);
    const [btnTitle, setBtnTitle] = useState("Pausada");
    const [actionName, setActionName] = useState("Temperatura");

    const btnStyle = {backgroundColor: isDinamic ? "#008000" : "#ff0000"};

    const handlerMachineState = () => {
        if(predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.Torque > 64);
        
        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }
    };

    const handlerActionTemperature = () => {
        if(predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.ProcessTemperature > 311.1);
        
        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredict(true);
        setActionName("Temperatura");
    };

    const handlerActionRotation = () => {
        if(predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.RotationalSpeed < 1229);
        
        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredict(true);
        setActionName("Rotação");
    };

    const handlerActionToolWear = () => {
        if(predict.length > 0) {
            setPredict([]);
        }

        let data = machine.filter((model) => model.ToolWear > 200);
        
        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredict(true);
        setActionName("Desgaste");
    };

    const handlerChange = (event) => {
        const value = event.target.value.toUpperCase();

        if(value.length < 1) {
            setIsPredict(false);
            setIsKeyPress(false);
            setActionName("Temperatura");
        }
        
        setModelValue(value);
    }

    const handlerPressKey = (event) => {
        if(event.key === "Enter") {
            event.preventDefault();

            if(predict.length > 0) {
                setPredict([]);
            }
            
            let data = machine.filter((model) => model.Torque > 64 &&
            (model.Type === modelValue || model.ProductID === modelValue));
            
            if(data) {
                setPredict(data);
            } else {
                setPredict([]);
            }

            setIsPredict(true);
            setIsKeyPress(true);
            setActionName("Pesquisa por Modelo");
        }
    };

    const handlerDinamic = () => {
        if(!isDinamic) {
            setBtnTitle("Analizando");
            setIsDinamic(true);
        } else {
            setBtnTitle("Pausada");
            setIsDinamic(false);
        }

        handlerMachineState();
    }

    useEffect(() => {
        axios.get("http://localhost:5001").then((response) => {
            const data = response.data;
            const model = data.filter((model) => model.Torque > 64);
    
            setMachine(model);
        });
    }, [machine.length, predict.length]);

    return(
        <div className="div_predict_container">
            <NavBar/>
            
            <div className="div_body_container">
                <div className="div_sidebar_left_content">
                    <div className="div_img_container">
                        <img src={img} alt="logo predmaq" id="id_img_predmaq"/>
                    </div>
                    <div className="div_action_container">
                        <div className="div_action_group_conatiner">
                            <input type="text" value={modelValue} placeholder="Procurar..."
                            className="input_action_style action_style"
                            onChange={handlerChange}
                            onKeyDown={handlerPressKey}/>
                        </div>
                        <div className="div_action_group_conatiner">
                            <button className="btn_action_style action_style"
                            onClick={handlerActionTemperature}>Temperatura</button>
                        </div>
                        <div className="div_action_group_conatiner">
                            <button className="btn_action_style action_style"
                            onClick={handlerActionRotation}>Rotação</button>
                        </div>
                        <div className="div_action_group_conatiner">
                            <button className="btn_action_style action_style"
                            onClick={handlerActionToolWear}>Desgaste</button>
                        </div>
                        <div className="div_action_group_conatiner">
                            <button className="btn_action_dinamic_style action_style"
                            style={btnStyle}
                            onClick={handlerDinamic}>{btnTitle}</button>
                        </div>
                    </div>

                    <CountMachine
                        predict={predict}
                        modelValue={modelValue}
                        isKeyPress={isKeyPress}
                    />
                </div>

                <div className="div_sidebar_right_content">
                    {
                        !isDinamic ?
                        (<FixedPlot
                            machine={!isPredict ? machine : predict}
                            action={actionName}
                        />) :
                        (<DinamicPlot
                            machine={!isPredict ? machine : predict}
                            action="Pesquisa por Modelo"
                            isDinamic={isDinamic}
                        />)
                    }

                    <TablePage
                        machine={!isPredict ? machine : predict}
                    />
                </div>
            </div>
        </div>
    );
};

export default Predict;
