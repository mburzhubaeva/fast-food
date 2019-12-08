import React from 'react';
import OrderItem from "../OrderItem/OrderItem";



const OrderList = props => {
  const drinks = props.items.drinks;
  const foods = props.items.foods;
  return (
    <div className="row">
      <div className="col-sm-6">
        {drinks.map(drink =>(<OrderItem item={drink}
                                        drink={true}
                                        onClick={()=>props.onClick(drink)}
                                        key={drink.id}
        />))}
      </div>
      <div className="col-sm-6">
        {foods.map(food =>(<OrderItem item={food}
                                      key={food.id}
                                      onClick={()=>props.onClick(food)}/>))}
      </div>
    </div>
  );
}

export default OrderList;