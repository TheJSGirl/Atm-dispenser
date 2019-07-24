import React, { Component } from 'react';
import './money-form.css';
import Notes from '../notes/notes';

class MoneyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            money: ''
        }
        this.handleOnchange = this.handleOnchange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
    }

    handleOnchange(event) {
        event.preventDefault();
        this.setState({ money: event.target.value })
    }
    handleOnclick() {
        this.setState({ money: "" });
    }
    render() {
        return (
            <div className="money-form">
                <div className="demo">
                    <div className="form" >
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
                            <button className="btn" onClick={this.handleOnclick}>Get Money</button>
                        </div>
                    </div>
                    {this.state.money && <div className="notes">
                        <Notes money={this.state.money} />
                    </div>}
                </div>
            </div>
        )
    }
}

export default MoneyForm;