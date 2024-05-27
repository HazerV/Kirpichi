import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import "./index.scss";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/categories' element={<CategoryPage/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
