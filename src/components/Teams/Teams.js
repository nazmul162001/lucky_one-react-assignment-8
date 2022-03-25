import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Team from '../Team/Team';
import './Teams.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setTeams(data))
  },[])

  // handleClick
  const handleClick = team => {
    if(details.find(item => item.id === team.id)){
      alert('Already Exists')
    }
    else{
      setDetails([...details, team]);
    }
  } 

  return (
    <div className='team-container row'>
      <div className="col-lg-9 col-md-9 col-sm-12 text-center text-lg-start">
        <div className="our-employe">
          {
            teams.map(team => <Team 
            key = {team.id}
            team = {team}
            handleClick = {handleClick}

            />)
          }
        </div>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-12 text-center text-lg-start">
        <div className="cart-details">
          <Cart 
          teams = {teams}
          setDetails = {setDetails}
          details = {details}
          />
        </div>
      </div>
    </div>
  );
};

export default Teams;