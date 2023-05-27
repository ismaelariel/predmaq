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
            <div className="div_navbar_content div_navbar_content_app_name">
                <h4>PredMaq</h4>
            </div>
            <div className="div_navbar_content div_navbar_content_datetime">
                <span className="text_datatime_navbar">{dateBase}</span>
            </div>
        </div>
    );
};

export default NavBar;