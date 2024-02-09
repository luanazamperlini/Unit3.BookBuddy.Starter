/* TODO - Import the React components to authorize the log in and displays all the books reserved. Fetch the Books data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

//import {useState} from 'react';
import React, { useEffect } from 'react'
import Login from './components/login';
import Register from './components/register';
import Account from './components/account';
import Books from './components/books';
import bookLogo from './assets/bookLogo.png';
import Reservations from './components/reservations'


//GET RESERVATION 
const Reservation = () => {
  useEffect(()=> {
    function getReservation(){

      fetch('/api/reservations', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ""
        },
  
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    
    }

    getReservation()

  },[])
return(
  <div>
    <h1>Reservations</h1>
  </div>
)
}

export default Reservations;



