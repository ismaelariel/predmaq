import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Predict from "./components/Predict/Predict";

import "./App.css";

const App = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Predict/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
