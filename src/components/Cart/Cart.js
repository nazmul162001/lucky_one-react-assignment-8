import React from 'react';
import './Cart.css'

const Cart = ({teams, details}) => {
  return (
    <div>
      <h3>Total Employe: {teams.length}</h3>
      <h5>Selected Employe </h5>
      {
        details.map(add => {
          return (
            <div className="cart-details d-flex align-items-center" key = {add.id}>
              <img src= {add.img} alt="" />
              <h4 className='px-3'>{add.name}</h4>
            </div>
          )
        })
      }
      <button className='btn-style-2 w-75 text-danger my-1'>SELECT 1 EMPLOYE FOR ME</button>
      <br />
      <button className='btn-style-2 w-75 text-success'>SELECT AGAIN</button>
    </div>
  );
};

export default Cart;