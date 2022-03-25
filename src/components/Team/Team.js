import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Team.css';

const Team = (props) => {

  const {name, img, salary} = props.team;
  const {handleClick, team} = props;

  return (
    <div className='employe-info position-relative'>
      <img src= {img} alt="" />
      <h4 className='pt-4'>{name}</h4>
      <p>Salary: {salary}</p>
      <button onClick= {() => handleClick(team)} className='btn-style position-absolute border-0 d-flex justify-content-center align-items-center'>
        <p className='m-0 px-2'>Select Employe</p>

        <FontAwesomeIcon 
        icon = {faShoppingCart}

        />
      </button>
    </div>
  );
};

export default Team;