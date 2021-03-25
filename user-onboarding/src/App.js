// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
// import schema from "./validation/formSchema";
// import * as yup from 'yup';

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  termsOfService: false
};

const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);

  // Assign the POST request to some sort of action in order for the request to fire
  // axios
  //   .post('https://regres.in/api/users', users)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch(
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
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

  // build
  // use GET request to get to populate the data of users - the function
  // I don't need a get request because there's no external data needing to be pulled
  // const getUsers = () => {
  //   axios
  //     .get()
  //     .then()
  //     .catch()
  // };


  // POST REQUEST AFTER YOU'VE BUILT OUT WHAT A SINGLE USER LOOKS LIKE


  // use a hook to pull users using a GET request
  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced Form Project:</h1>
      </header>
      <Form values={ formValues }/>
    </div>
  );
}

export default App;
