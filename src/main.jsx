import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import "./index.scss";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";
import ContactsPage from "./Pages/ContactsPage/ContactsPage.jsx";
import HistoriesPage from "./Pages/HistoriesPage/HistoriesPage.jsx";
import DeliveryPage from "./Pages/DeliveryPage/DeliveryPage.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ProducersPage from "./Pages/ProducersPage/ProducersPage.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import InterestingPage from "./Pages/InterestingPage/InterestingPage.jsx";
import {PaginationContext, ButtonContext} from "./Context/PaginationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <PaginationContext>
                    <Routes>
                        <Route path='*' element={<ErrorPage/>}/>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/categories' element={<CategoryPage/>}/>
                        <Route path='/contacts' element={<ContactsPage/>}/>
                        <Route path='/histories' element={<HistoriesPage/>}/>
                        <Route path='/delivery' element={<DeliveryPage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                        <Route path='/producers' element={<ProducersPage/>}/>
                        <Route path='/category' element={<CategoryPage/>} />
                        <Route path='/product' element={<ProductPage/>} />
                        <Route path='/interesing' element={<InterestingPage/>} />
                    </Routes>
            </PaginationContext>
        </BrowserRouter>
    </React.StrictMode>
);
