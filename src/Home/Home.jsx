import React  from 'react'
import  './Home.css';
import { Link } from 'react-router-dom';
import mainImg from './main-apresentation.svg';
import home1 from './home-1.svg';
import home2 from './home-2.svg';
import home3 from './home-3.svg';
import home4 from './home-4.svg';
import home5 from './home-5.svg';
import home6 from './home-6.svg';
import angular from './angular.svg';
import google from './google.svg';
import nodejs from './nodejs.svg';

export default function Home() {
    return (
        <>
          <div className="home-all padding-all mt-5 pt-2">
            <header>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-start pt-5 mt-5 text-alain">
                    <h2 className='head-header'>Find the<span className='blue-text'> books</span> you <br/>are looking for <br/>anywhere</h2>
                    <p className='about'>Search for books anywhere, you don't need to know the name of<br className='br-none'/> the book, if you know the name of the author or the publisher,<br className='br-none'/> just type and search.</p>
                    <Link to='/search' className='btn btn-bluee px-5 py-2 border-0 text-white'>search now <i className="fa-solid fa-arrow-right" /></Link>
                  </div>
                  <div className='col-md-6 main-img'>
                    <img className='w-100' src={mainImg} alt='reading'/>
                  </div>
                </div>
              </div>
            </header>
            <section className=' pt-5 my-5 section-two'>
              <div className='text-center pt-2'>
                <h3>THE IMPORTANCE OF READING BOOKS</h3>
              </div>
              <div className="container pt-4">
                <div className="row">
                  <div className="col-md-6 text-start pt-5 mt-4 READING">
                    <h5>READING PRACTICE IMPROVES VOCABULARY</h5>
                    <p className='about pt-2'>Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation.</p>
                  </div>
                  <div className="col-md-6 text-end text-alain">
                    <img src={home1} alt='reading'/>
                  </div>
                </div>
              </div>
              <div className="container div-none">
                <div className="row">
                  <div className="col-md-6 text-start">
                    <img src={home2} alt='reading'/>
                  </div>
                  <div className="col-md-6 text-end pt-5 mt-4">
                    <h5>ADVANCING TECHNOLOGY</h5>
                    <p className='about pt-2'>With the advancement of technologies in the modern world, people are less and less interested in reading.</p>
                  </div>
                </div>
              </div>
              <div className="container ">
                <div className="row">
                  <div className="col-md-6 text-start pt-5 mt-4">
                    <h5>DYNAMIC READING</h5>
                    <p className='about pt-2'>Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc.</p>
                  </div>
                  <div className="col-md-6 text-end text-alain">
                    <img src={home3} alt='reading'/>
                  </div>
                </div>
              </div>
            </section>
            <section className=' pt-5 text-center position-absolute  position'>
              <div className=' '>
                <h3>ALL THE BOOKS YOU LOOK FOR IN ONE PLACE</h3>
                <img className='pt-5' src={home4} alt='reading'/>
              </div>
            </section>
            <section className='section-above'>
              <div className="container text-alain">
                <div className="row">
                  <div className="col-md-6">
                    <img src={home5} alt='reading'/>
                    <p className='about'>Download samples in PDF or EPUB of your favorite books</p>
                  </div>
                  <div className="col-md-6">
                    <img src={home6} alt='reading'/>
                    <p className='about'>Buy the books you're looking for from your phone or PC</p>
                  </div>
                </div>
              </div>
              <div className='py-5'>
                <h3>THE TECHNOLOGIES USED</h3>
                <div className="d-flex justify-content-center pt-5">
                  <img src={angular} alt='angular-icon'/>
                  <img className='mx-4' src={nodejs} alt='node.js-icon'/>
                  <img src={google} alt='google-icon'/>
                </div>
              </div>
            </section>
          </div>
        </>
    )
}

