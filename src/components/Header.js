import React from "react";
import "../index.css"
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';
export default function Header(){
    return(
    <BrowserRouter>
        <header>
             <Link className="logo-text">BookStore</Link>
             <nav className="main-nav">
                  <Link to="">Home</Link>
                  <Link to="">Login</Link>
             </nav>
        </header>
         
    </BrowserRouter>
    )
}