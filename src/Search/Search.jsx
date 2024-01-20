import React from 'react'
import './Search.css';
import {useState,useEffect} from 'react';
import axios  from 'axios';
import searchIcon from './search-icon.svg';
import searchWaiting from './search.svg';
import searching from './searching.svg';
import notFound from './not-found.png';
import { Link } from 'react-router-dom';


export default function Search() {

    const input= document.getElementById('input');
    const [searchBooks, setSearchBooks] = useState();
    const [displayNone, setDisplayNone] = useState(false);
    const [textNone, setTextNone] = useState(false);
    const [showDivs, setShowDivs] = useState(false);

    async function getBooks(query) {
      if(query!==''){

      const responce =await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`);
        setSearchBooks(responce.data);        

       }else{
        setTextNone(true)
       }
    }
    useEffect(() => {
        if (showDivs) {
          getBooks(input.value);
          setDisplayNone(true);
        }
      }, [showDivs]);
    
      const handleButtonClick= () => {

          setShowDivs(!showDivs); 
       
      };
      
    return (
        <> 
          <div className="padding-all pt-5 ">
            <div className='text-md-start py-5 my-5'>
                <p className='about'>You don't need to know the name of the book, if you know the name<br/> of the author or publisher, just type, search and find</p>
            </div>
            <div className=' form-cont  mx-auto d-flex bg-white'>
                <input id='input' className='form-control fs-6 w-100 border-0 input' type='text' placeholder='Type auther,book name...'/>
                <div onClick={handleButtonClick} >
                <button className='btn search-icon p-2'  ><img alt='search-icon' className='searchIcon ' src={searchIcon}/></button>
                </div>
            </div>
            <div className={`py-5 ${displayNone?'d-none':''}`}>
                  <img className='my-3' src={searchWaiting} alt='search Waiting'/>
            </div>
            {showDivs ?

            <div className= ' container py-5'>
              <div className="row py-3">
               <div className='text-start'>

                {searchBooks?<p className='prag-book'>About <span className='h6'> {searchBooks.totalItems}</span> books found</p>:''}
               </div>
              {searchBooks? searchBooks.items.map((book,i)=><div key={i} className='col-md-4 order-3'>
              <div className='container bg-white order-2  border-radus mx-2 mb-4 px-0'>
                  <div className="row">
                    <div className="col-5">
                      {book.volumeInfo.imageLinks === undefined?<img className='w-100 img-height' alt='book cover' src={notFound}/>
                      :<img className='w-100 img-height' alt='book cover' src={book.volumeInfo.imageLinks.thumbnail}/>}
                    </div>
                    <div className="col-7 py-3 px-2 text-start">
                      <Link className='text-Link' to={`/book/${book.id}`}>
                        <h5 className='fs-6'>{book.volumeInfo.title}</h5>
                        <p className='prag-book'><span className='h6'>Authers:</span>{book.volumeInfo.authers}</p>
                        <p className='prag-book'><span className='h6'>Published Date:</span>{book.volumeInfo.publishedDate}</p>
                        <p className='prag-book'><span className='h6'>Publisher:</span>{book.volumeInfo.publisher}</p>
                      </Link>
                      <Link className='text-white btn btn-bluee' to={`/book/${book.id}`}>More <i className=" fa-solid fa-chevron-right"></i></Link>
                    </div>
                  </div>
              </div>
              </div>

            ): <div><div className=''><img src={searching} alt='searching'/></div>
               <div className='text-start'>
               {textNone?<p className='prag-book order-2'>About <span className='h6'> 0</span> books found</p>:''}

               </div>
            </div>}
            </div>
          </div>:''}
            
          </div>
        </>
    )
}
