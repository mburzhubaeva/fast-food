import React, { Component } from 'react';
import OrderList from '../../components/OrderList/OrderList';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import './App.css';
import OrderDetails from "../../components/OrderDetails/OrderDetails";

class App extends Component {

  state = {
    orderItems: {
      drinks: [
        {id: 'drink_1', title: 'Coffee', price: 70},
        {id: 'drink_2', title: 'Tea', price: 50},
        {id: 'drink_3', title: 'Cola', price: 40},
      ],
      foods: [
        {id: 'food_1', title: 'Hamburger', price: 80},
        {id: 'food_2', title: 'Cheeseburger', price: 90},
        {id: 'food_3', title: 'Fries', price: 45},
      ]
    },
    currentOrder: [
      {id: 'drink_1', title: 'Coffee', price: 70, qty: 1}
    ]
  }

  addItem = (e) => {
    let currentOrder = [...this.state.currentOrder];
    let newItem = currentOrder.find(item => item.id === e.id);
    if (!newItem) {
      newItem = e;
      newItem.qty = 1;
      currentOrder.push(newItem);
    } else {
      newItem.qty += 1;
    }
    this.setState({currentOrder});
  };

  removeItem = (e) => {
    let currentOrder = [...this.state.currentOrder];
    let item = currentOrder.find(item => item.id === e.id);
    if (item.qty === 1) {
      const index = currentOrder.findIndex(item => item.id === e.id);
      currentOrder.splice(index, 1);
    } else {
      item.qty--;
    }
    this.setState({currentOrder});
  };


  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-6">
            <h3>Order Details</h3>
            {this.state.currentOrder.length === 0 ?
              <div>Order is empty! Please add some items!</div>
              :
              <OrderDetails order={this.state.currentOrder}
                            removeItem={this.removeItem}/>
            }
            <TotalPrice order={this.state.currentOrder}/>
          </div>
          <div className="col-sm-6">
            <h3>Add items</h3>
            <OrderList items={this.state.orderItems}
                       onClick={this.addItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
