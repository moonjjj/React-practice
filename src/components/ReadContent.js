import React, {Component} from 'react';

class ReadContent extends React.Component{
    render(){
      return(
        <article>
          <h2>{this.props.title}</h2>
          <span>{this.props.desc}</span>
        </article>
      );
    }
  }

  export default ReadContent;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)