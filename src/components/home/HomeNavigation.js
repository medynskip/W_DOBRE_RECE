import React from 'react';

import {
    Link
} from "gatsby"

import scrollTo from 'gatsby-plugin-smoothscroll';

export default (props) => {

    const handleClick = (e) => {
        const url = typeof window !== 'undefined' ? window.location.href : '';
        if (url === 'http://localhost:8000/') {
            e.preventDefault();
            scrollTo(`#${e.target.name}`)
        } else {
            scrollTo(`#${e.target.name}`)
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="main-nav">
                    <Link name="header" to="/" onClick={handleClick}>Start</Link>
                    <Link name="columns" to="/" onClick={handleClick} >O co chodzi?</Link>
                    <Link name="about" to="/" onClick={handleClick} >O nas</Link>
                    <Link name="partners" to="/" onClick={handleClick} >Fundacja i organizacje</Link>
                    <Link name="contact" to="/" onClick={handleClick} >Kontakt</Link>
                </div>
            </div>
        </div>
    )
}