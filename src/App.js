import React, {Component} from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import './App.css';


class App extends React.Component {
  constructor(props){ 
    // 제일 먼저 실행되어서 초기화를 담당하는게 컨스트럭터
    super(props);
    this.state={
     sub:"babo",
      href:"https://www.naver.com"
      ,contents:[
        {id:1, list:'문제선 깃사이트',href:'https://github.com/moonjjj'},
        {id:2, list:'바닐라 먹킷리스트',href:'https://moonjjj.github.io/js_practice/'},
        {id:3, list:'문제선 포토폴리오 ver.1.0.0',href:'https://moonjjj.github.io/project-solo/'}
      ]
    }
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>문제선</code>의 리액트 공부페이지입니다!@@
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          gazua
        </a>
        <Nav data={this.state.contents} title1="프롭스를 이용해보았습니다!" sub={this.state.sub} url={this.state.href}></Nav>
      </header>
    </div>
  );
  }
}

export default App;
