import React from 'react';
import logo from './logo.svg';
import AccessVar from './AccessingVariable';
import AccessObject from './AccessObject';
import Expressions from './expression';

function App(){
  return(
    <React.Fragment>
      <h3>React Js </h3>
      <img src={logo} width={120} height={120} alt='logo'/>
      <p>
        {" "}
        React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>
      <AccessVar />
      <AccessObject />
      <Expressions />

    </React.Fragment>
  )
}

export default  App;