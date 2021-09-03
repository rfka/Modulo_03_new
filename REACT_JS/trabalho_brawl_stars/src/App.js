import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Nav from './Nav'
import './Nav.css';

export default class App extends React.Component{
  render(){
    return(
      <>
        <section id='home'>
          <div className='nav'>
            <Nav/>
          </div>
          <div>
            <Header/>
            <Main/>
          </div>
        </section>
      </>
    );
  }
}