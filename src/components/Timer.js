import React, {Component} from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div class="study-time">
          공부한지 벌써 <strong>{this.state.seconds}</strong>초나 됐다구?!
        </div>
      );
    }
  }
  
//   ReactDOM.render(
//     <Timer />,
//     document.getElementById('timer-example')
//   );
export default Timer;