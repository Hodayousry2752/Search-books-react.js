import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg  padding-all pt-2">
                <div className="container-fluid">
                    <Link className="navbar-brand booksure" to='home'>Booksure</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <a className="nav-link  about link-ank" target='_blank' aria-current="page" href="https://github.com/awkiamaru/booksure/blob/master/README.md">About</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link about link-ank" target='_blank' href="https://www.linkedin.com/in/hoda-yousry-240257215">Contact</a>
                        </li>
                      </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
