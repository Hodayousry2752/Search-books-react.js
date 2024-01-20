import React from 'react';
import './Footer.css';
export default function Footer() {
    return (
        <>
            <footer className='footer padding-all py-4'>
                <div className="d-flex displayy justify-content-between">
                  <h2 className='  foot-head'>Booksure</h2>
                  <p className='text-white pt-2'>© Copyright 2020 <a className='text-white frag-link' href='https://github.com/LuisFrag' target='_blank'>LuisFrag</a>. All rights reserved.</p>
                  <div className='d-flex'>
                    <a href='https://github.com/Hodayousry2752' target='_blank' className='text-white'><i className="fa-brands fa-linkedin fa-2x me-2"></i></a>
                    <a href='https://www.linkedin.com/in/hoda-yousry-240257215' target='_blank' className='text-white'><i className="fa-brands fa-github fa-2x"></i></a>
                  </div>
                </div>
            </footer>
        </>
    )
}
