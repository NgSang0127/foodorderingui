import React from 'react';
import {Route, Routes} from "react-router-dom";
import AdminRoute from "./AdminRoute";
import CustomerRouter from "./CustomerRouter";

const Routers = () => {
    return (
        <Routes>
            <Route path="/admin/restaurants/*" element={<AdminRoute/>}>
            </Route>
            <Route path="/*" element={<CustomerRouter/>}>
            </Route>
        </Routes>
    );
};

export default Routers;
