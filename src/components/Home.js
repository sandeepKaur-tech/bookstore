import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from './firebase';
import { FaCartPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home(){
 
    const [booksData, setBooksData]= useState([]);


  useEffect(() => {
    const fetchBooks = async () => {
          try {
        const data = await getDocs(collection(db, 'books'));
        const bookList = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBooksData(bookList)        
            } 
          catch (error) {
          console.error('Error fetching documents: ', error);
          }
         };

    fetchBooks();

  }, []);

  
return (
    <div>
      <h2>List of Books</h2>
      <div className='main-book-list'>
        {booksData.map(book => (
         <Link to = {`/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className='book-content'>
                <img className='book-image' src = {book.bookImage}/>
                <h2>{book.bookName}</h2>
                <p className='paragraph'>{book.bookDescription}</p>
                    <div className='icon'>
                        <p>{book.status}</p>
                            <div className='icon-gap'>
                            <FaRegHeart  style={{ fontSize: '1.4em', color:'red' }} />
                            <FaCartPlus  style={{ fontSize: '1.4em', color: 'brown'}}/>
                            </div>
                    </div>
            </div>
         </Link>
         
        ))}
      </div>
    </div>
  );
};



