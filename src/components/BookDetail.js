import React, { useState ,useEffect} from "react";
import "../index.css";
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { db, collection, getDoc,doc } from './firebase';

export default function BookDetail(){

    const [book, setBookDetail] = useState({});
    const params=  useParams()
   
    useEffect(() => {
        const fetchDocument = async () => {
          try {
            const docRef = doc(db, 'books', params.id); 
            const docSnap = await getDoc(docRef);
            setBookDetail(docSnap.data())
    
          } catch (err) {
          
            console.error('Error fetching document:', err);
          } 
        };
    
        fetchDocument();
      }, [params.id]);
   
   
    console.log(book.bookName)
   
   return(
         <div className="book-datail-page">
            <img  className= "detial-image"src = {book.bookImage}/>
            <h2>{book.bookName}</h2>
            <p className="detail-para">{book.bookDescription}</p>
            <div>
                        <p >{book.status}</p>
                            <div className='icon-gap'>
                                <button className="checkout-btn"> Checkout </button>
                                <FaRegHeart  style={{ fontSize: '1.4em', color:'red' }} />                        
                            </div>
                    </div>
         </div>
    )
}