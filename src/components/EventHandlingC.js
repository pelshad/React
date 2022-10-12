import React, { Component } from 'react';

class EventHandlingC extends Component {
    state = {
        type:''
    }
    
    //생성자를 통한 함수 바인딩
    // constructor(props){
    //     super(props);
    //     //HTML(return)에서 사용하는 함수를 연결하기 위해 바인딩,
    //     this.handChange = this.handChange.bind(this);
    //     this.handClick = this.handClick.bind(this); 
    // }

    // handChange(e){
    //     this.setState({
    //         type:e.target.value
    //     });
    // }

    // handClick(){
    //     alert(this.state.type);
    //     this.setState({
    //         type:''
    //     });
    // }

    //바인딩 없이 하는 방법(화살표 함수 사용)
    handleChange = e => {
        this.setState({
            type:e.target.value
        });
    }

    handlClick = () => {
        alert(this.state.type);
        this.setState({
            type:''
        });
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    name="message"
                    value={this.state.type}
                    onChange={this.handChange}/>
                <button
                    onClick={this.handClick}>Test</button>
            </div>
        );
    }
}

export default EventHandlingC;