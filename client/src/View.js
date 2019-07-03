import React, { Component } from 'react';

class View extends Component {

  state = {
      products: [],
      product: {
        productName: 'Sample product',
        productPrice: 20
      }
    };
  
    componentDidMount() {
      this.getProducts();
    }

    getProducts = _ => {
      fetch(`http://localhost:3001/products`)
      .then(response => response.json())
      .then(response => this.setState({ products: response.data }))
      .catch(err => {console.error(err)})
    }

    addProduct = _ => {
      const { product } = this.state; 
      fetch(`http://localhost:3001/products/add?name=${product.productName}&price=${product.productPrice}`)
      .then(this.getProducts)
      .catch(err => {
        console.error(err)
      })
    }
  
    renderProduct = ({productID, productName, productPrice}) => <div key={productID}>{productName} ' - ' {productPrice},- </div>

    render() {
      const { products } = this.state;
        return (
          <div className="App text-center">
            {products.map(this.renderProduct)}
          </div>
        );
    }
}

export default View;