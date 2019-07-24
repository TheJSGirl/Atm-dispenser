import React, { Component } from 'react';
import "./notes.css";

class Notes extends Component {
    render() {
        const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        const { money } = this.props;
        const newNote = notes.map((note) => {
            if (money === note) {
                return <li>Number. of notes is: {money} </li>
            }
        })

        return (
            <React.Fragment>
                <h2 className="note-heading">You will get the following amount</h2>
                <div>
                    <ul>
                        <li>{newNote}</li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Notes;