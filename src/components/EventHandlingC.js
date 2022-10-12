import React, { Component } from 'react';

class EventHandlingC extends Component {

    state = {
        message: '',
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
    handleChange = (e) => {
        this.setState({
            message : e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                type="text"
                name="message"
                placeholder="type something"
                value={this.state.message}
                onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
}

export default EventHandlingC;