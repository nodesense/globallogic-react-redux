// components/Contact.tsx
import React from 'react';

import {Address} from './Address';

interface ContactProps {
}

interface ContactState {
    showAddress: boolean;
}

// state is owned by the component
// state is created when a component created 
// state is destroyed when the component destroyed
// state can be changed, immutable 

export class Contact extends React.Component<ContactProps, ContactState> {

    constructor(props: ContactProps) {
        super(props); // pass the props to parent class

        // state is react keyword
        this.state = {
            showAddress: false
        };
    }

    // e is event
    showAlert (e: any) {
        console.log('click event ', e);
        alert('Button Clicked');
    }


    render() {
        return (
            <div>
                <h2>Contact</h2>
                <p>Contact us</p>

                <Address state='UP' 
                         city='Noida'
                         pincode={100}
                         />

                <button onClick={ (e) => this.showAlert(e) }>
                    Alert
                </button>
                
            </div>
        )
    }
}