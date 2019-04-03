// Checkout.tsx
import React from 'react';

interface CheckoutProps {

}

interface CheckoutState {

}

export class Checkout extends 
                    React.Component<CheckoutProps, CheckoutState> {

    constructor(props: CheckoutProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
            <form >
                Name 
                <input name='fullName'
                       type='text'
                       
                       value="Hello"
                       /> 
            </form>
            </div>
        )
    }

}