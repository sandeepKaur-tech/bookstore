import React, { useEffect, useState } from 'react';
import { db, collection, getDocs } from './firebase';
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
      <div>
        {booksData.map(book => (
            <>
            <img src = {book.bookImage}/>
            <h1>{book.bookName}</h1>
            <p>{book.bookDescription}</p>
            <p>{book.status}</p>
            </>
         
        ))}
      </div>
    </div>
  );
};



