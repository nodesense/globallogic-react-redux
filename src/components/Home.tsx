// components/Home.tsx
import React from 'react';

interface HomeProps {
    startValue: number;
}

interface HomeState {
    counter: number
}

export class Home extends React.Component<HomeProps, HomeState> {

    timer: any;

    constructor(props: HomeProps) {
        super(props);

        this.state = {
            counter: 0
        }

        console.log('Home component created');
    }

    increment = () => {
        // calls the render
        this.setState({
            counter: this.state.counter + 1
        })
    }

    refreshHome = () => {
        // defined in base class/React.Component
        // invoke render method
        this.forceUpdate();
    }

    // life cycle method
    // called after first render
    componentDidMount() {
        console.log('Home componentDidMount');

        // increment function is called for every 5 seconds
        this.timer = setInterval( () => {
            console.log('counter timer ', this.state.counter);
            this.increment();
        }, 5000);
    }

    // destruction life cycle
    // invoked when the component destroyed
    componentWillUnmount() {
        console.log('Home component componentWillUnmount')
        // stop the timer function
        clearInterval(this.timer);
    }


    // prevent render function get called
    // keyword method
    shouldComponentUpdate(prevProps: HomeProps, 
                          nextState: HomeState) {

        // custom logic to decide whether to call render or not
        // return true: render will be called
        // return false: render will not be called

        console.log('shouldComponentUpdate called');
        const result = nextState.counter % 4 == 0; 
        console.log('nextState.counter % 4 == 0', result)
        return result;
    }

    // return virtual dom
    // render is called very first time when component created
    // render is called when setState invoked in update state
    // render is called when parent component render called
    // render is called when this.forceUpdate
    render() {
        // props for class component
        // this.props, props is a keyword
        console.log('Home render ', this.state.counter);

        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to App Store...</p>

                <div className="flex two">
                    <img src="/assets/ecommerce.png" />
                    <div>
                        <h2>Welcome to Mobile Store</h2>
                        <p>Find products in products pages
                            order them in check out page...
                        </p>
                    </div>
                </div>

                <h2>Categories</h2>
                <div className="flex three">

                <img src=" https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/07/05/Photos/Processed/flipkart9-krRC--621x414@LiveMint.JPG" 
                     height = "150"
                />

                <img src=" https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/07/05/Photos/Processed/flipkart9-krRC--621x414@LiveMint.JPG" 
                     height = "150"
                />
               

               <img src=" https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/07/05/Photos/Processed/flipkart9-krRC--621x414@LiveMint.JPG" 
                     height = "150"
                />
               
               
               </div>



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
                    Refresh Force update
                </button>


            </div>
        )
    }
}