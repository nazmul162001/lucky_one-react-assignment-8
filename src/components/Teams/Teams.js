import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Modals from '../Modals/Modals';
import Modals2 from '../Modals2/Modals2';
import Team from '../Team/Team';
import './Teams.css';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [details, setDetails] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setTeams(data))
  },[])

  // handleClick
  const handleClick = team => {
    if(details.length >= 4){
      setShow2(true)
    }
    else{
      if(details.find(item => item.id === team.id)){
        setShow(true)
      }
      else{
        setDetails([...details, team]);
      }
    }
  } 

  return (
    <div className='team-container row'>
      <Modals 
      show = {show}
      setShow = {setShow}
      />
      <Modals2 
      show2 = {show2}
      setShow2 = {setShow2}
      />
      <div className="col-lg-9 col-md-9 col-sm-12 text-center text-lg-start">
        {/* title section  */}
        <div className="title-section text-center">
            <h1 className='text-danger fw-bold'>Start Your Business</h1>
            <h3 className='text-secondary'>Choose 4 Employe </h3>
        </div>

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
      <div className="col-lg-3 col-md-3 col-sm-12 text-center text-lg-start cart-bg">
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