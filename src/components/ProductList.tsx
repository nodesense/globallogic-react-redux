// ProductList.tsx
import React from 'react';

interface ProductListProps {
}

interface Product {
    id: number;
    name: string;
    price: number;
    year: number;
}

interface ProductListState {
    products: Product[];
}

export class ProductList 
    extends React.Component<ProductListProps, ProductListState> {

        constructor(props: ProductListProps) {
            super(props);
            this.state = {
                products: []
            }
        }

        // keyword
        // called by react
        // called after the render method
        // view loaded
        componentDidMount() {
            console.log('productlist component did mount');

            console.log('before fetch');
            fetch('http://api.nodesense.ai/api/products')
            .then ( response => { //callback, called after getting result
                console.log('response is ', response);
                return response.json(); // convert the response to JavaScript objects
            })
            .then ( products => { // products is an array of products
                console.log('products ', products);
                this.setState({
                    products: products
                })
            })
            console.log('after fetch');
        }

        render() {
            console.log('productlist render');

            return (
                <div>
                    <h2>Product List {this.state.products.length}</h2>
                    <table>
                        <thead>
                            <tr>
                                 <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Year</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products
                                          .map (product => (
                                              <tr key={product.id}>
                                                <td>
                                                    <img src="/assets/android-tablet.png" 
                                                         width="64"
                                                         height="64"
                                                    />
                                                </td>
                                                 <td>{product.name}</td>
                                                 <td>{product.price}</td>
                                                 <td>{product.year}</td>
                                                 <td>
                                                     <button>edit</button>
                                                 </td>
                                              </tr>
                                          ))
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
}