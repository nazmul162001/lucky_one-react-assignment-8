import React from 'react';
import './Team.css';

const Team = (props) => {

  const {name, img, id, salary} = props.team;
  const {handleClick, team} = props;

  return (
    <div className='employe-info position-relative'>
      <img src= {img} alt="" />
      <h4 className='pt-4'>{name}</h4>
      <p>Salary: {salary}</p>
      <button onClick= {() => handleClick(team)} className='btn-style position-absolute border-0'>
        <p className='m-0'>Select Employe</p>
      </button>
    </div>
  );
};

export default Team;