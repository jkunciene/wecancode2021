import React from 'react';
import { Toolbar, AppBar, Container } from "@mui/material";
import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <AppBar className="root" position="static">
            <Container className="header_container">
                <NavLink to="/">
                    <h2>PetBook</h2>
                </NavLink>
               
                <Toolbar>
                    <NavLink to="/" className="nav_item">
                        <h4>Home</h4>
                    </NavLink>
                    <NavLink to="/about" className="nav_item">
                        <h4>About</h4>
                    </NavLink>
                    
                </Toolbar>
            </Container>
        </AppBar>

    )
}

export default Header
