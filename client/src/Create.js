import React, { Component } from 'react';

class View extends Component {

  state = {
      product: {
        productName: 'Sample product',
        productPrice: 20
      }
    };

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
      const { product } = this.state;
        return (
            <div>
                <input value={product.productName} onChange={e => this.setState({ product: { ...product, productName: e.target.value} })}/>
                <input value={product.productPrice}  onChange={e => this.setState({ product: { ...product, productPrice: e.target.value} })}/>
                <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
            </div>
        );
    }
}

export default View;