import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Machine from "./MachinePage/Machine";

import "./App.css";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Machine/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
