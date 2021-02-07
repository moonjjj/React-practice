import React, {Component} from 'react'; //필수!


class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      subject:{href:"https://www.youtube.com",
    name:"youtube"}
    }
  }  
  
  render(){
      return(
        <nav>
          <ul>
            <li><a href={this.state.subject.href}>{this.state.subject.name}</a></li>
            <li><a href="#">css</a></li>
            <li><a href="#">js</a></li>
            <li><a href={this.props.url}>{this.props.sub}</a></li>
          </ul>
        </nav>
      );
    }
  }

  export default Nav;
  //nav라는 코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)