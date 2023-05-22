import React from "react";
import ReactDOM from "react-dom/client";
import App from "../../App";

it("render app view root", () => {
    const div = document.createElement("div");
    const room = ReactDOM.createRoot(div);
    room.render(<App />);
});
