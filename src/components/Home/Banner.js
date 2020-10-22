import React from 'react';

import "../../custom/btn_custom.scss"
import "bootstrap/dist/css/bootstrap.min.css";


export const Banner = () => {
    return (
        <div>
            <header className="">
                <div className="banner">
                <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
                <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
                <a href="/" class="btn-mix-noborder">Try it now</a>
                </div>
            </header>           
        </div>
        
    )
}

export default Banner