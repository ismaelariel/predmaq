import {StrictMode} from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', ' ', 'PredMaq'], '');
    return element;
};

document.body.appendChild(component());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
