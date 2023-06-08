import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import Fixed from "../Fixed/Fixed";
import Dinamic from "../Dinamic/Dinamic";

import img from "../../images/predmaq.png";
import "./Predict.css";

export const pathAPI = "http://localhost:5001";

const Predict = () => {
    const [machine, setMachine] = useState([]);
    const [predict, setPredict] = useState([]);
    const [isPredict, setIsPredic] = useState(false);
    const [isDinamic, setIsDinamic] = useState(false);
    const [modelValue, setModelValue] = useState("");
    const [descMachine, setDescMachine] = useState("");
    const [btnTitle, setBtnTitle] = useState("Pausada");
    const [nameState, setNameState] = useState("Temperatura");

    const btnStyle = { backgroundColor: isDinamic ? "#008000" : "#ff0000" };

    const handlerActionTemperature = () => {
        if (predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.ProcessTemperature > 311.1);

        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredic(true);
        setIsDinamic(false);
        setNameState("Temperatura");
        setDescMachine(`${data.length}`);
    };

    const handlerActionRotation = () => {
        if (predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.RotationalSpeed < 1229);

        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredic(true);
        setIsDinamic(false);
        setNameState("Rotação");
        setDescMachine(`${data.length}`);
    };

    const handlerActionToolWear = () => {
        if (predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.ToolWear > 200);

        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }

        setIsPredic(true);
        setIsDinamic(false);
        setNameState("Desgaste");
        setDescMachine(`${data.length}`);
    };

    const handlerChange = (event) => {
        const value = event.target.value.toUpperCase();

        if (value.length < 1) {
            handlerMachineState();

            setIsPredic(true);
            setIsDinamic(false);
            setDescMachine("");
            setNameState("Temperatura");
        }

        setModelValue(value);
    }

    const handlerPressKey = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();

            if (predict.length > 0) {
                setPredict([]);
            }

            const data = machine.filter((model) => model.Torque > 64 &&
                (model.Type === modelValue || model.ProductID === modelValue));

                if(data) {
                    setPredict(data);
                } else {
                    setPredict([]);
                }

            setIsPredic(true);
            setIsDinamic(false);
            setNameState("Pesquisa por Modelo");
            setDescMachine(`${modelValue} - ${data.length}`);
        }
    };

    const handlerDinamic = () => {
        if (!isDinamic) {
            setBtnTitle("Analizando");
            setIsDinamic(true);
        } else {
            setBtnTitle("Pausada");
            setDescMachine("");
            setIsDinamic(false);
        }
        
        handlerMachineState();
    }

    const handlerMachineState = () => {
        if (predict.length > 0) {
            setPredict([]);
        }

        const data = machine.filter((model) => model.Torque > 64);

        if(data) {
            setPredict(data);
        } else {
            setPredict([]);
        }
    };

    useEffect(() => {
        axios.get(pathAPI).then((response) => {
            const data = response.data;
            const model = data.filter((model) => model.Torque > 64);

            setMachine(model);
        }).catch((error) => {
            console.log(error);
        });
    }, [machine.length]);

    return (
        <div className="div_predict_container">
            <NavBar />

            <div className="div_body_container">
                <div className="div_sidebar_left_content">
                    <div className="div_img_container">
                        <img src={img} alt="logo predmaq" id="id_img_predmaq" />
                    </div>

                    <div className="div_action_container">
                        <div className="div_action_group_conatiner">
                            <input type="text" value={modelValue} placeholder="Procurar..."
                                aria-label="cost-input" className="input_action_style action_style"
                                onChange={handlerChange} onKeyDown={handlerPressKey} />
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

                    <div className="div_count_container">
                        <h4 id="id_count_info">{descMachine}</h4>
                    </div>
                </div>
                
                <div className="div_sidebar_right_content">
                    {
                        !isDinamic ?
                        <Fixed
                            predict={!isPredict ? machine : predict}
                            nameState={nameState}
                        /> :
                        <Dinamic
                            machine={machine}
                            descMachine={descMachine}
                            setDescMachine={setDescMachine}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Predict;
