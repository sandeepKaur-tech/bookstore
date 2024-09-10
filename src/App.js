import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';
import BookDetail from './components/BookDetail';

function App() {
    return(
    <>

        <BrowserRouter>
        <header>
             
             <Link  to ="/books"className="logo-text">BookStore</Link>
             <nav className="main-nav">
                  <Link to="/books">Home</Link>
                  <Link to="">Login</Link>
                  <Link to=""><FaCartPlus  style={{ fontSize: '1.1em' , color:'brown' }}/></Link>
                  <Link to=""><FaRegHeart style={{ fontSize: '1.1em' , color:'red' }}/></Link>
              
             </nav>
        </header>
        <Routes>
            <Route path= "/books" element= {<Home/>}/>
            <Route path= "/books/:id" element= {<BookDetail/>}/>

        </Routes>
        </BrowserRouter>
        
    </>
        
    )
}

export default App;
