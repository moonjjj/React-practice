import React, {Component} from 'react';

class Header extends React.Component{
    render(){
      return(
        <div>
          <h1><a href="#" onClick={function(e){
            e.preventDefault();
            this.props.onChange();
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.subTitle}</p>
        </div>
      );
    }
  }

  export default Header;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)