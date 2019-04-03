import React from 'react';

import {Address} from './Address';

export function Footer() {
    const year = 2019;
    const company = 'Global Logic';

    return (
        <div>
            <hr />
            <p>Copyrights {year}, {company} </p>
            
            <Address state='KA' 
                         city='Bangalore'
                         pincode={56001} />
        </div>
    )
}