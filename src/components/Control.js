import React, {Component} from 'react';

class Control extends React.Component{
    render(){
      return(
        <ul>
          <li class="write-li"><a href="/create" class="write-btn" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>글쓰기모드</a>
          <span class="info-span">👇 아래 글을 클릭하면 상세정보를 볼 수 있습니다</span>
          </li>
          {/* <li><a href="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)}></input></li> */}
        </ul>
      );
    }
  }

  export default Control;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)