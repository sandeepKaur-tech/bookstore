import React from "react";
import "../index.css"
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';
export default function Header(){
    return(
      <header>
           <Link  to ="/books"className="logo-text">BookStore</Link>
             <nav className="main-nav">
                  <Link to="/books">Home</Link>
                  <Link to="/login">Login</Link>
                  <Link to=""><FaCartPlus  style={{ fontSize: '1.1em' , color:'brown' }}/></Link>
                  <Link to=""><FaRegHeart style={{ fontSize: '1.1em' , color:'red' }}/></Link>
            </nav>
      </header>
      
 
    )
}