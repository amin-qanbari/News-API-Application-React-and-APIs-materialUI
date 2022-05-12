import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//context
import { ColorContextProvider } from "./components/store/colorContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <ColorContextProvider>
      <App />
    </ColorContextProvider>

);

