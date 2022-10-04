import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Cursor from "./Cursor";
import About from "./About";

const Layout = () => {
    return (
        <>
            <Navbar active={'home'}/>
            <Home/>
        </>
    );
};

export default Layout;
