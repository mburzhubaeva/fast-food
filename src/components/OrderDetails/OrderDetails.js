import React from "react";


const OrderDetails = props => {
  return props.order.map(item => (
    <div>
      <div className="row">
        <div className="col-sm-6">
          {item.title}
        </div>
        <div className="col-sm-2">
          x {item.qty}
        </div>
        <div className="col-sm-2">
          {item.price * item.qty} KGS
        </div>
        <div className="col-sm-2">
          <button onClick={()=>props.removeItem(item)}>x</button>
        </div>
      </div>
    </div>))
};

export default OrderDetails;