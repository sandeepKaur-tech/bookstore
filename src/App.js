import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter ,Routes,Route,Link } from 'react-router-dom';

function App() {
    return(
    <>
        <Header/>
        <Home/>
    </>
        
    )
}

export default App;
