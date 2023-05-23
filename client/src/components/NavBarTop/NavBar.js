import React, {useState, useEffect} from "react";

import "./NavBar.css";

const NavBar = () => {
    const [dateBase, setDateBase] = useState("");

    useEffect(() => {
        const date = new Date();
        
        const stateTimeout = setTimeout(() => {
            setDateBase(date.toLocaleString());
        }, 1000);

        return () => {clearTimeout(stateTimeout)};

    }, [dateBase]);

    return(
        <div className="div_navbar_container">
            <div className="div_navbar_content">
                <h4>PredMaq</h4>
            </div>
            <div className="div_navbar_content">
                <small>{dateBase}</small>
            </div>
        </div>
    );
};

export default NavBar;