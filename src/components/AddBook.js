import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export default function AddBook(){

     const [formData, setFormData]= useState({
        bookName:'',
        bookDescription:'',
        bookImage:'',
        status:''
     })

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Add a new document with a generated id
          await addDoc(collection(db, 'books'), {
            bookName: formData.bookName,
            bookDescription:formData.bookDescription,
            status: formData.status,
            bookImage: formData.bookImage
          });
          alert('Data added successfully!');
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>bookName:</label>
                    <input
                    type="text"
                    name="bookName"
                    value={formData.bookName}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div>
                <label>bookImage:</label>
                    <input
                    type="text"
                    name="bookImage"
                    value={formData.bookImage}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div>
                <label>bookDescription:</label>
                    <textarea
               
                    name="bookDescription"
                    value={formData.bookDescription}
                    onChange={handleChange}
                    required
                    />
            </div>
            <div>
                <label>status:</label>
                    <input
                    type="text"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    />
            </div>
            <button type="submit">Add Data</button>
        </form>

        
        </>
    )
}