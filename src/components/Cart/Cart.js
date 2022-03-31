import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = ({teams, details, setDetails}) => {

  const deleteCart = add => {
    setDetails(details.filter(item => item.id !== add.id));
    // console.log(remove.id);
  }

  // get random employe 
  const getRandom = () => {
    if(details.length > 0){
      const randomSelect = Math.floor(Math.random() * details.length)
      setDetails([details[randomSelect]])
    }
    else{
      alert('Select employe first')
    }
  }

  return (
    <div className='review-cart'>
      <h3>Total Employe: {teams.length}</h3>
      <h5>Selected Employe: {details.length}</h5>
      {
        details.map(add => {
          return (
            <div className="cart-details d-flex align-items-center" key = {add.id}>
              <img src= {add.img} alt="" />
              <h4 className='px-3'>{add.name}</h4>
            <div onClick= {() => deleteCart(add)} className="icon">
              <FontAwesomeIcon 
                icon = {faTrash}
                />
            </div>
            </div>
          )
        })
      }
      <button onClick={getRandom} className='btn-style-2 w-75 text-danger my-1'>SELECT 1 EMPLOYE FOR ME</button>
      <br />
      <button onClick={() => setDetails([])} className='btn-style-2 w-75 text-success'>SELECT AGAIN</button>
    </div>
  );
};

export default Cart;