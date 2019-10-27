import React, { Component } from 'react';
import "./notes.css";

const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

class Notes extends Component {

  getNotes = (money, balance) => {
    let currentMoney = money;
    let notesMap = {};
    let count = 0;
    notes.map(note => {
      notesMap[note] = parseInt(currentMoney / note, 10);
      count += notesMap[note];
      currentMoney = currentMoney % note;
    });

    return { total: count, data: notesMap, remaining: balance - money };
  }

  render() {
    const { money, balance } = this.props;
    let { total, data, remaining } = this.getNotes(money, balance);
    return (
      <div>
        <h2 className="note-heading">Transaction Details</h2>
        <h3>Total note dispensed: {total}</h3>
        <h3>Denominations </h3>
        <h4>{notes.map(note => { if (data[note] > 0) return `${note}'s Note : ${data[note]} , ` })}</h4>
        <h3>Remaining Amount: ₹{remaining}</h3>
      </div>
    )
  }
}

export default Notes;