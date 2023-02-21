// src/App.js
import './App.css'
import contacts from "./contacts.json";
import React, { useState } from 'react'

function App() {
  
//Creating an array of 5 contacts 
    const[firstFive, setFirstFive] = useState(contacts.slice(0,5));

// Selecting a random Celeb
    const remainingContacts = contacts.slice(5);
    const addRandomContact = () => {
      // Get a random contact from the remainingContacts array
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      // Update the firstFive array in state by creating a new array with the original firstFive array and the new random contact
      setFirstFive([...firstFive, randomContact]);
    };

// Sorting contacts alphabetically
const sortAlpha = () => {
  const sortedFirstFive = firstFive.slice().sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  setFirstFive(sortedFirstFive);
};
  

    
    return(
      <div className = "App">

        <h1>Contact List</h1>

        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortAlpha}>Sort by name</button>

          <table>
              <thead>
                <tr>
                  <th> Pictures</th>
                  <th> Name</th>
                  <th> Popularity</th>
                  <th> Won an Oscar</th>
                  <th> Won an Emmy</th>
                </tr>
              </thead>
          
              <tbody>
              {firstFive.map((celeb, index) => (
                <tr key={index}>
                  <td>
                    <img className='pic' src={celeb.pictureUrl} alt="celeb" />
                  </td>
                  <td>{celeb.name}</td>
                  <td>{celeb.popularity}</td>
                  <td>{celeb.wonOscar ? "🏆" : null} </td>
                  <td>{celeb.wonEmmy ? "🏆" : null} </td>
                </tr>
              ))}
            </tbody>
          </table>


      </div>
    )
  }




export default App
