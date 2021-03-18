import React, {Component} from 'react';


class Nav extends React.Component{
    render(){
      let data = this.props.data;
      var lists =[];
      for(var i=0; i<data.length; i++){
        lists.push(
        <li key={data[i].id} class="memo-li">
          <a href="#" data-id={data[i].id} onClick={function(e){
            e.preventDefault();
            this.props.onChange(e.target.dataset.id);
          }.bind(this)}>{data[i].title} </a>
        </li>);
      }
      return(
        <ul className="memo-ul">
          {lists}
        </ul>
      );
    }
  }

  export default Nav;
  //nav라는 코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)