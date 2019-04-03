// components/Contact.tsx
import React from 'react';

import {Address} from './Address';

interface ContactProps {
}

interface ContactState {
    showAddress: boolean;
    showTime: boolean;
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
            showAddress: true,
            showTime: true
        };
    }

    // e is event
    showAlert (ev: any) {
        console.log('click event ', ev);
        alert('Button Clicked');
    }


    // Event handler using ES.next
    // recommended
    showAlert2 = (e: any) => {
        console.log('click event ', e);
        alert('Button Clicked');
    }

    toggleAddress = () => {
        // true to false, false to true
        const newValue = !this.state.showAddress;

        // to change the state, MUST call setState
        // setState is defined in React.Component class
        this.setState({
            showAddress: newValue
        })
    }

    toggleTime = () => {
        const newValue = !this.state.showTime;
        this.setState({
            showTime: newValue
        });
    }

    // jsx doesn't allow statements like 
    // for, if inside the jsx
    // but expressions are allowed

    render() {
        return (
            <div>
                <h2>Contact</h2>
                <p>Contact us</p>

                {/*
                    JSX Comments
                */}

                { this.state.showAddress && 
                   <Address state='UP' 
                         city='Noida'
                         pincode={100}
                         />
                }

                <button onClick={ (e) => this.showAlert(e) }>
                    Alert
                </button>

                <button onClick={this.showAlert2}>
                    Alert 2
                </button>

                <button onClick={this.toggleAddress}>
                    Toggle
                </button>


                {
                    this.state.showTime? 
                            <p>Contact us: 10:00 PM to 5:00 PM</p>
                        :
                            <p>Holidays non working hours...</p>
                }

                <button onClick={this.toggleTime}>
                    Toggle Time
                </button>

            </div>
        )
    }
}