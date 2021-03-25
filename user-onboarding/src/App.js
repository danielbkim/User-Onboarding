// import axios from 'axios';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import schema from "./validation/formSchema";
import * as yup from 'yup';

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

  // Craft POST request using axios to send form data
  // POST REQUEST AFTER YOU'VE BUILT OUT WHAT A SINGLE USER LOOKS LIKE
  const postUser = (newUser) => {
    // take the newUser object and send the axios post call to the endpoint
    axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
      // I want to reset the users since I'm posting them with whatever data in the payload I have
      // then I want to reset the form value state to what it was before
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  // YUP LIBRARY EVENT HANDLERS

  // handler for any changes to the inputs
  const inputChange = (inputName, inputValue) => {
    // function takes the name of the form input and the form value takes in the input name and input value
    yup
    // REACH - allows to peer into schema and reach for only one part to test
    // get to a specific part of the schema using the inputName
      .reach(schema, inputName)
      .validate(inputValue)
  };


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
