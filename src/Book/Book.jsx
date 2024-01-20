import React from 'react'
import { useParams  } from 'react-router';
import {useState,useEffect} from 'react';
import axios  from 'axios';
import './Book.css';
import notFound from '../Search/not-found.png';

export default function Book() {
    const [bookDetails, setBookDetails] = useState()
    const param= useParams();
    const bookId=param.id;
    async function getBook(id) {
  
        const responce =await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBookDetails(responce.data);        
         
      }
    useEffect(() => {
        getBook(bookId)
        
    }, [])
    return (
        <>
            <div className="padding-all  pb-5 ">
              <div className="container mb-5">
              {bookDetails?
                <div className="row pt-5 mt-5">
                 <div className="col-md-4 pt-4 bg-white me-3 rounded">
                    <div>
                        <h5>{bookDetails.volumeInfo.title}</h5>
                        {bookDetails.volumeInfo.imageLinks === undefined?<img className='my-4 w-50' src={notFound}/>
                        :<img className='my-4' src={bookDetails.volumeInfo.imageLinks.thumbnail}/> 
                     } 
                    </div>
                    <div className='text-start '>
                        <p className='prag-book'><span className='h6'>Authers: </span>{bookDetails.volumeInfo.authors}</p>
                        <p className='prag-book'><span className='h6'>Publisher: </span>{bookDetails.volumeInfo.publisher}</p>
                        <p className='prag-book'><span className='h6'>Published Date: </span>{bookDetails.volumeInfo.publishedDate}</p>
                        <p className='prag-book'><span className='h6'>Number of pages: </span>{bookDetails.volumeInfo.pageCount} pages</p>
                        <p className='prag-book'><span className='h6'>Critics' Opinion: </span><i className='fas fa-star text-primary'></i></p>

                    </div>
                  </div>
                  <div className="col-md-7 bg-white rounded  p-4">
                    <div className='text-start'>
                     <h5 >Book Description</h5>
                     <p className='prag-book py-4 '>{bookDetails.volumeInfo.description}</p>
                    </div>
                    <div className='text-end'>
                      <a className='btn btn-bluee text-white me-3' href={bookDetails.accessInfo.webReaderLink}>Read a sample</a>
                      <a className='btn btn-bluee text-white' href={bookDetails.saleInfo.buyLink}>Buy this book</a>

                    </div>
                  </div>
                </div>:<div className='not-found text-center '><i className='fas fa-spin fa-spinner text-primary fa-3x'></i></div>}
              </div>
            </div>
        </>
    )
}