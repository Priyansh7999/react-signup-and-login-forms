import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import type React from "react";

const Layout = () : React.JSX.Element => {
    return (
        <>
            <Navbar />
            <Outlet />  
        </>
    )
}

export default Layout;