import React from 'react';

import { Navbar } from "./Navbar.jsx";

import { Search } from "./Search.jsx";

import "./Header.css"

export const Header = () => {

    return (
        <>
        <Search/>
        <Navbar/>

        </>
    );

}