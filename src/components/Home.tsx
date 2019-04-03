// components/Home.tsx
import React from 'react';

interface HomeProps {
    startValue: number;
}

interface HomeState {
    counter: number
}

export class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    refreshHome = () => {
        // defined in base class/React.Component
        // invoke render method
        this.forceUpdate();
    }

    // return virtual dom
    // render is called very first time when component created
    // render is called when setState invoked in update state
    // render is called when parent componetn render called
    // render is called when this.forceUpdate
    render() {
        // props for class component
        // this.props, props is a keyword
        console.log('Home render ', this.state.counter);

        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to App Store...</p>
                <p>Start: {this.props.startValue} </p>

                <p> Counter : {this.state.counter} </p>

                {/*
                    if counter is odd number, show 'Odd'
                    else show 'Even' using Ternary ?
                */}

                {
                    this.state.counter % 2 == 0? <p>Even</p>
                                               : <p>Odd</p>
                }

                <button onClick={this.increment}>
                    +1
                </button>

                <button onClick={this.refreshHome}>
                    Refresh
                </button>


            </div>
        )
    }
}