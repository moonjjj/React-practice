import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>문제선</code>의 리액트 공부페이지입니다!
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          gazua
        </a>
      </header>
    </div>
  );
  }
}

export default App;
