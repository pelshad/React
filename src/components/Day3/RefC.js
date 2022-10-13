import React, { Component } from 'react';
import './ref.css';

class RefC extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    };

    handleChange = e => {
        this.setState({
            password: e.target.value, //2
        });
    };

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password == '0000',
        });
    };


    render() {
        return (
            <div>
                <input 
                type="password"
                value={this.state.password}
                onChange={this.handleChange} //1
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''} />
                <button onClick={this.handleButtonClick}>Validate</button>
            </div>
        );
    }
}

export default RefC;