import React, { Component } from 'react';

class EventHandlingC extends Component {

    state = {
        username:'', //input의 username : username의 value로 연결
        message: ''  //input의 message
      };

    //메소드 호출 ver.1(생성자 바인딩)
    //   constructor(props) {
    //     super(props);
    //     //html(return)에서 함수를 찾지 못하기 때문에 바인딩이 필요하다.
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    //   }
    
    //   handleChange(e) {
    //     this.setState({
    //       message: e.target.value,
    //     });
    //   }
    
    //   handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //       message: '',
    //     });
    //   }
    
    //메소드 호출 ver.2(화살표 함수)
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value,
            //[e.target.name] 객체 안의 각 필드값을 가져온다.
        });
    };

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message : '',
            username: ''
        });
    }

    handleKeyPress = e =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    };

    //핸들러 함수 
    //onClick 클릭이벤트, onKeyPress 키를 눌렀을때, onChange 변화가 생겼을때
    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                type="text"
                name="username"
                placeholder="type something"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="message"
                placeholder="type something"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default EventHandlingC;