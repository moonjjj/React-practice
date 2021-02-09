import React, {Component} from 'react'; //필수!


class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      subject:{href:"https://www.youtube.com",name:"youtube"}
    }
  }  
  
  render(){
      var lists=[];
      var data = this.props.data //app에서 주입된 정보를 여기서 사용할 땐 props로 받아야함!
      var i = 0;
      for(i=0; i<data.length; i++){
        lists.push(<li><a href={data[i].href} className={data[i].id}>{data[i].list}</a></li>);
      }
      return(
        <nav>
          <ul>
            <li><a href={this.state.subject.href}>{this.state.subject.name}</a></li>
            <li><a href="#">{this.props.title1}</a></li>
            <li><a href="#">js</a></li>
            <li><a href={this.props.url}>{this.props.sub}</a></li>
            {lists}
            <li><a href="#" onClick={function(e){
              console.log("온클릭 테스트합니다! react는 onClick이라고 적어줘야하구요");
              console.log("{}안에 값을 넣어야해요! 그리고 function 인자에 e를 받아서");
              console.log("preventDefault()메소드를 이용해서 원래 태그의 기본 이벤트를 저지 시켜줍니다");
              e.preventDefault();
            }}>온클릭 이벤트에 대한 설명(f12-console 참고)</a></li>
          </ul>
        </nav>
      );
    }
  }

  export default Nav;
  //nav라는 코드를 사용할 수 있게 되는 것!(다른 컴포넌트[외부]에서)