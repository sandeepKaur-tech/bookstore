import React from "react";
import { Link } from "react-router-dom";

export default function Admin(){
    return(
        <>
         <nav className="main-nav  admin">
                  <Link to="/admin/addBook">Add book</Link>
                  <Link to="">Update book</Link>
                  <Link to="">Delete book</Link>
                 
            </nav>
        </>
    )
}