import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import "./index.scss";
import HomePage from "./Pages/HomePage/HomePage.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
