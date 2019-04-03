// Checkout.tsx
import React from 'react';

interface CheckoutProps {

}

interface City {
    id: string;
    name: string;
}

interface CheckoutState {
    fullName: string;
    selectedCity: string;
    cities: City[];
}


export class Checkout extends 
                    React.Component<CheckoutProps, CheckoutState> {

    constructor(props: CheckoutProps) {
        super(props);
        this.state = {
            fullName: '',
            selectedCity: '',
            cities: [ 
                {
                    id: 'DL',
                    name: 'Delhi'
                },
                {
                    id: 'BLR',
                    name: 'Bangalore'
                },
                {
                    id: 'HYD',
                    name: 'Hyderabad'
                }
            ]
        }
    }

    onNameChange = (e: any) => {
        // target is input REAL DOM element
        console.log('Value', e.target.name, 
                             e.target.value);

        // render method
        this.setState({
            fullName:  e.target.value
        });
    }

    onCityChange = (e: any) => {
        console.log('City change ', e.target.name, 
                                e.target.value);

        this.setState({
            selectedCity: e.target.value
        });
    }

    render() {
        console.log('Checkout render', this.state.fullName);

        return (
            <div>
                <h2>Checkout</h2>

                <p> Name is {this.state.fullName}</p>
                <p> City Code is {this.state.selectedCity} </p>
            <form >
                Name 
                <input name='fullName'
                       type='text'
                       onChange={this.onNameChange}
                       value={this.state.fullName}
                       />

                City
                <select name='city' 
                        onChange = {this.onCityChange}
                        value={this.state.selectedCity} >
                    {
                        this.state.cities.map(city => (
                            <option value={city.id} key={city.id}  > 
                                    {city.name} 
                            </option>
                        ))
                    }
                </select>
            </form>
            </div>
        )
    }

}