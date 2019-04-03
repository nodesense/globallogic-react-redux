// Address.tsx
import React from 'react';


// Props - properties
// share data from parent to child component
// address needs data
// state, city, pincode [optional]

interface AddressProps {
    state: string; // mandatory
    city: string;
    pincode? : number; // ? optional
}

// props are passed as function parameter
export function Address(props: AddressProps) {
    return (
        <div >
            <p>Address</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Pincode: {props.pincode}</p>
        </div>
    )
}