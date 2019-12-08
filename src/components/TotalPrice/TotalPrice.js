import React from "react";

const TotalPrice = props => {
  let totalPrice = 0;
  props.order.forEach((item) => {
    totalPrice += item.qty * item.price
  })
  return (<div>Total Price: {totalPrice} KGS</div>);
};

export default TotalPrice;
