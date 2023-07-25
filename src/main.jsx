import React from "react";
import ReactDOM from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GifExpertApp />
    </React.StrictMode>
    /* el estricMode es lo que hace que se duplique  las salidas pero no es algo que afecte realmente solo se suele utilizar el producción para poder ver que todo está funcionando como debe */
);
