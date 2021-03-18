import React, {Component} from 'react';
import logo from '../logo.svg';


class Header extends React.Component{
    render(){
      return(
        <div class="greeting">
          <img src={logo} className="App-logo" alt="logo" />
          <span><a href="#" onClick={function(e){
            e.preventDefault();
            this.props.onChange();
          }.bind(this)}>{this.props.title}</a></span>
          <p>{this.props.subTitle}</p>
        </div>
      );
    }
  }

  export default Header;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)