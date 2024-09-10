import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';
import BookDetail from './components/BookDetail';
import Layout from './components/Layout';
import Login from './components/Login';
import Admin from './components/Admin';
import AddBook from './components/AddBook';
function App() {
    return(
     <BrowserRouter>
        <Routes>
            <Route path ="/"element ={<Layout/>}>
                <Route path="books" element= {<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path= "books/:id" element= {<BookDetail/>}/>
                <Route path="admin" element= {<Admin/>}/>
                <Route path="/admin/addBook" element={<AddBook/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
     

        
    )
}

export default App;
