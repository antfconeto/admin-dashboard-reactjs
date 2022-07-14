import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
export default function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
    )
}   