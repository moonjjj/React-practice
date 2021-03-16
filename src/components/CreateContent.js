import React, {Component} from 'react';

class CreateContent extends React.Component{
    render(){
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post" 
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <p>
              <textarea name="desc" placeholder="description"></textarea>
            </p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)