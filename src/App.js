import './App.css';
import React from 'react';
import PizzaList from './pizzarias/pizzarias';
import LoginForm from './pizzarias/login_form';
import RegisterView from './pizzarias/register_form';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/pizza.jpeg" className="App-logo" alt="logo" />
        <h1>Register New User</h1>
        <RegisterView />
        <h1> Login here</h1>
        <LoginForm />
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
