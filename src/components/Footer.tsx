import React from 'react';

import {Address} from './Address';

import './Footer.css';

export function Footer() {
    const year = 2019;
    const company = 'Global Logic';

    return (
        <div className='footer'>
            <hr />
            <p>Copyrights {year}, {company} </p>
            
            <Address state='KA' 
                         city='Bangalore'
                         pincode={56001} />
        </div>
    )
}