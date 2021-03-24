import axios from 'axios';
import React from 'react';
import './App.css';
import Form from './components/Form';

function App() {

  // yup is a library that helps validate inputs in forms
  // if a user cannot post data into the backend if they're missing a field

  // axios call in the APP?
  // we have to make payload look like
  // send the object you built out from the inputs and POST it to the endpoint API you give it

  // axios
  //   .post('url', payload)
  //   .then

  // Craft POST request using axios to send form data

  // need slices of state

  // build out formSchema with 'yup' syntax

  // use the get request here

  // const get people
  // const getPeople = () => {
  //   axios
  //     .get()
  //     .then()
  //     .catch()
  // };

  // const postNewFriend = (newFfriend) {
  //   axios
  //     .post('http://buddies.com/api/friends', newFriend)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch()
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced Form Project:</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
