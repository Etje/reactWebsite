import React, { Component } from 'react'
import axios from 'axios';

class Create extends Component {

    state = {
        data: [],
        name: null,
        price: 0,
        intervalIsSet: false,
        idToDelete: null,
        idToUpdate: null,
        objectToUpdate: null,
      };
    
      componentDidMount() {
        this.getDataFromDb();
        if (!this.state.intervalIsSet) {
          let interval = setInterval(this.getDataFromDb, 1000);
          this.setState({ intervalIsSet: interval });
        }
      }
    
      // never let a process live forever
      // always kill a process everytime we are done using it
      componentWillUnmount() {
        if (this.state.intervalIsSet) {
          clearInterval(this.state.intervalIsSet);
          this.setState({ intervalIsSet: null });
        }
      }
    
      getDataFromDb = () => {
        fetch('http://localhost:3001/products')
        .then((data) => data.json())
        .then((res) => this.setState({ data: res.data }));
      };
    
      insertDataInDb = (name, price) => {
    
        axios.post('http://localhost:3001/products/add', {
          productName: name,
          productPrice: price,
        });
      };

      render() {
            return (
                <div>
                    <div>
                        <input type="text" onChange={(e) => this.setState({ message: e.target.value })} placeholder="INSERT product name" style={{ width: '200px' }}/>
                        <input type="text" onChange={(e) => this.setState({ message: e.target.value })} placeholder="INSERT product price" style={{ width: '200px' }}/>
                        <button onClick={() => this.insertDataInDb(this.state.name, this.state.price)}>Toevoegen</button>
                    </div>
                </div>
            );
    }
}

export default Create;