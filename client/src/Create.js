import React, { Component } from 'react';
import {Container, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';


class Create extends Component {

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
                <Form className="form">
                  <Col>
                    <FormGroup>
                      <Label>Product Naam</Label>
                      <Input value={product.productName} onChange={e => this.setState({ product: { ...product, productName: e.target.value} })}/>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Product Price</Label>
                      <Input value={product.productPrice}  onChange={e => this.setState({ product: { ...product, productPrice: e.target.value} })}/>
                    </FormGroup>
                  </Col>
                  <Col>
                    <Button onClick={this.addProduct}>Add Product</Button>
                  </Col>
                </Form>
            </div>
        );
    }
}

export default Create;