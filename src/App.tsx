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

import {NotFound} from './components/NotFound';

import {BrowserRouter as Router, 
        Route,
        Switch,
        Redirect
    } from 'react-router-dom';


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
            <Router>
            <div>
                <h2>Product App</h2>
               
               <Header />

             <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/products' component={ProductList} />
                <Route path='/checkout' component={Checkout} />

                <Redirect path="/dashboard" to="/about" />

                <Route path='*' component={NotFound} />
              </Switch>
              
                <Footer />

          
               
            </div>
            </Router>
        );
    }
}