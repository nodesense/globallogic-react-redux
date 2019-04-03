// App.tsx
// Application Component

// Component = HTML + TS/JS + Styles

// react is from node_modules, installed via npm
import React from 'react';

import {Home} from './components/Home';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Checkout} from './components/Checkout';
import {ProductList} from './components/ProductList';

// class component
export class App extends React.Component {
    // MUST render function 
    //react keyword

    // returns a Virtual DOM
    // render function is called by react 
    render() {
        // TSX - TypeScript + XML
        // Include XML inside the TS file
        return (
            <div>
                <h2>Product App</h2>
               
               <Header />
               
                <ProductList  />
                
                <Home startValue={100} />
                <About />
                <Contact />
                <Checkout />

                <Footer />
               
            </div>
        );
    }
}