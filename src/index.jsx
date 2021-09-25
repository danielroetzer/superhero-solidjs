/** EXTERNALS **/


import { render } from "solid-js/web";
import { Router } from "solid-app-router";


/** LOCALS **/


import "./index.css";
import App from "@/app";


/** HELPERS **/


const RouterWrapper = function() {
    return (
        <Router>
            <App />
        </Router>
    );
};


/** MAIN **/


render(RouterWrapper, document.getElementById("root"));
