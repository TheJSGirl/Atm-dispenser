import React, { Component } from 'react';
import "./notes.css";

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

class Notes extends Component {


    getNotes = (money) => {
       let currentMoney = money;
       let notesMap = {};
       let count = 0;
       for(let a = 0; a < notes.length; a++ ){
           
            notesMap[notes[a]] = parseInt(currentMoney / notes[a], 10);
            count += notesMap[notes[a]]; 
            currentMoney = currentMoney % notes[a];
       }

       return { total: count, data: notesMap };
    }

    render() {
        const {money} =  this.props;
        let {total, data} = this.getNotes(money);
        return (
            <React.Fragment>
                <h2 className="note-heading">You will get the following amount</h2>
                <div>
                    <ul>
                        <li>Total note despensed: {total}</li>
                    </ul>
                </div>
              <div>{JSON.stringify(data)}</div>
            </React.Fragment>
        )
    }
}

export default Notes;