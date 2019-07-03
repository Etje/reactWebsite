import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
            <BootstrapTable striped hover condensed ref='table' keyField='productID' data={ products }>
              <TableHeaderColumn dataField='productID' hidden={true} >ProductID</TableHeaderColumn>
              <TableHeaderColumn dataField='productName' dataAlign='center'>Product naam</TableHeaderColumn>
              <TableHeaderColumn dataField='productPrice' dataAlign='center'>Product prijs (€)</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}

export default View;