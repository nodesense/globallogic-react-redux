// components/Home.tsx
import React from 'react';

interface HomeProps {
    startValue: number;
}

export class Home extends React.Component<HomeProps> {

    render() {
        // props for class component
        // this.props, props is a keyword
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to App Store...</p>
                <p>Start: {this.props.startValue} </p>
            </div>
        )
    }
}