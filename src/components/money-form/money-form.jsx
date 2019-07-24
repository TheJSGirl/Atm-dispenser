import React, { Component } from 'react';
import './money-form.css';

class MoneyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(event) {
        event.preventDefault();
        this.setState({ money: event.target.value })
    }
    render() {
        return (
            <div className="money-form">
                <div  >
                    <h1 className="form-heading">Welcome to ATM</h1>
                    <div>
                        <div> <label>Enter Amount</label></div>
                        <input
                            className="form-input"
                            type="text"
                            value={this.state.money}
                            name="money"
                            onChange={this.handleOnchange}

                        />
                    </div>

                    <div className="form-btn">
                        <button className="btn">Get Money</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyForm;