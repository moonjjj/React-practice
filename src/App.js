import React, {Component} from 'react';
import logo from './logo.svg';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import ReadContent from './components/ReadContent.js';
import CreateContent from './components/CreateContent.js';
import Control from './components/Control.js';
import Timer from './components/Timer.js';
import './App.css';





class App extends React.Component {
  constructor(props){
    super(props);
    this.max_content_id=3;
    this.state={
      contents:[
        {id:1,title:"component란?",desc:"컴포넌트는 쉽게말해 html을 유지보수 및 직관성을 높이기 위해 사용하는 리액트의 기본개념으로서, 각 코드들을 컴포넌트화 시켜 따로따로 저장할 수 있습니다!"},
        {id:2,title:"props란?",desc:"props란 웹을 이용하는 사람이 조정 할 수 있는 값으로, 이해를 돕기 쉽게 예를 들면 휴대폰의 볼륨버튼같은 존재입니다."},
        {id:3,title:"state란?",desc:"state는 내부의 개발자가 설정해 놓은 값으로, 이해를 돕기 쉽게 예를 들면 휴대폰 내부의 시스템 같은 존재입니다."}

      ],
      mode:"create",
      subject:{title:'component',desc:"컴포넌트는 쉽게말해 html을 유지보수 및 직관성을 높이기 위해 사용하는 리액트의 기본개념입니다."},
      welcome:{title:'Welcome',desc:'Hello,React~'}
    }
  }
  render(){
    var _title,_desc,_article = null;
    if(this.state.mode == "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode == "read"){
      for(var i =0; i<this.state.contents.length; i++){
        var data = this.state.contents[i];
        if(data.id=== this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode == "create"){
      _article = <CreateContent onSubmit={function(_title,_desc){
      this.max_content_id = this.max_content_id+1;

      var _contents = this.state.contents.concat(
        {id:this.max_content_id,title:_title,desc:_desc}
      )
      this.setState({contents:_contents});
      }.bind(this)}></CreateContent>
    }

  return (
    <div className="App">
      <div class="video-wrap">
        <iframe src="https://www.youtube.com/embed/XMb0w3KMw00?list=PLuHgQVnccGMCRv6f8H9K5Xwsdyg4sFSdi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <header className="App-header">
        <Header title="안녕하세요" subTitle="리액트 공부페이지입니다 💻"
        onChange={function(){
          this.setState({mode:"welcome"});
        }.bind(this)}
        >
        </Header>
        {_article}
      <Control onChangeMode={function(_mode){
        this.setState({mode:_mode});
      }.bind(this)}></Control>
        <Nav data={this.state.contents} 
          onChange={function(id){
            this.setState({mode:'read',selected_content_id:Number(id)});
          }.bind(this)}
          />
          <Timer/>
      </header>
    </div>
  );
  }
}

export default App;
