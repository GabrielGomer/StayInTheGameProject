import './App.css';
//import HomePage from './components/homePage';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/sign-in/SignIn';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import RegisterForm from './components/registerForm';



class App extends Component {

  
  constructor() {
    super();
    this.state = { loggedIn: false };
  }

  componentDidMount() { 
  
    /*
    fetch('https://localhost:5000/isLoggedIn', {
      method: 'GET',
      credentials: 'include',
      rejectUnauthorized: false,
      requestCert: true,
      agent: false,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({ loggedIn: result })
    });
  */

  }

  render(){
  return (
    <Router>
      <div className="App">
      <Route exact path="/" render={() => {
         // if(this.state.loggedIn === true){
            return <SignIn></SignIn>//<Dashboard />;
         // }
        //  return <SignIn />//<Redirect to="/login" />
          }} />

<Route exact path="/register">
            <RegisterForm></RegisterForm>
          </Route>


          <Route exact path="/signin">
            <SignIn></SignIn>
          </Route>

          <Route exact path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
      </div>
    </Router>

    
  );
}
}

export default App;