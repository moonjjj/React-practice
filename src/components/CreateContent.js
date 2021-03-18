import React, {Component} from 'react';

class CreateContent extends React.Component{
    render(){
      return(
        <article>
          <p class="title">공부한 내용 작성하기</p>
          <form action="/create_process" method="post" 
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <div class="input-div">
                <input type="text" name="title" placeholder="제목 작성" required></input>
                <input type="submit" class="submit-btn" value="✅"></input>
            </div>
            <p>
              <textarea name="desc" placeholder="공부한 내용 작성" required></textarea>
            </p>
          </form>
        </article>
      );
    }
  }

  export default CreateContent;
  //코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)