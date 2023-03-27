import React, {useEffect, useState} from "react";
import axios from "axios";

const Machine = () => {
    const [machine, setMachine] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5001").then((response) => {
            const data = response.data;
            setMachine(data);
        });
    }, [machine.length]);

    return(
        <div className="div_machine_container">
            <div className="div_machine_list">
                {
                    machine.map((data, index) => {
                        return(
                            <p key={index}>{data["Air temperature"]}</p>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Machine;
