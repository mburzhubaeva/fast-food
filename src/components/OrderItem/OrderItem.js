import React from 'react';
import { FaBeer, FaUtensils } from 'react-icons/fa';

import './OrderItem.css';

const OrderItem = props => {
  return(
    <div key={props.id} className="OrderItem" onClick={props.onClick}>
      <div className="container">
        { props.drink ? <FaBeer /> : <FaUtensils /> }
        <h4><b>{props.item.title}</b></h4>
        <p>Price: {props.item.price} KGS</p>
      </div>
    </div>
  );
};

export default OrderItem;