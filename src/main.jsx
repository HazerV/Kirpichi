import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    BrowserRouter, Routes, Route,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";
import ContactsPage from "./Pages/ContactsPage/ContactsPage.jsx";
import HistoriesPage from "./Pages/HistoriesPage/HistoriesPage.jsx";
import DeliveryPage from "./Pages/DeliveryPage/DeliveryPage.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import AboutPage from "./Pages/AboutPage/AboutPage.jsx";
import ProducersPage from "./Pages/ProducersPage/ProducersPage.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import SendRequestPage from "./Pages/SendRequestPage/SendRequestPage.jsx";
import {ModalContext} from "./Context/ModalContext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {FilterSaveProvider} from "./Context/FilterSave.jsx";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import "./index.scss";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <PrimeReactProvider>
            <BrowserRouter>
                <FilterSaveProvider>
                    <ModalContext>
                        <Routes>
                            <Route path='*' element={<ErrorPage/>}/>
                            <Route path='/' element={<HomePage/>}/>
                            <Route path='/categories/:categorySlug' element={<CategoryPage/>}/>
                            <Route path='/contacts' element={<ContactsPage/>}/>
                            <Route path='/histories' element={<HistoriesPage/>}/>
                            <Route path='/delivery' element={<DeliveryPage/>}/>
                            <Route path='/about' element={<AboutPage/>}/>
                            <Route path='/producers' element={<ProducersPage/>}/>
                            <Route path='/category' element={<CategoryPage/>}/>
                            <Route path="/product/:productSlug" element={<ProductPage/>}/>
                            <Route path='/sendRequest' element={<SendRequestPage/>}/>
                        </Routes>
                    </ModalContext>
                </FilterSaveProvider>
            </BrowserRouter>
        </PrimeReactProvider>

    </React.StrictMode>
);
