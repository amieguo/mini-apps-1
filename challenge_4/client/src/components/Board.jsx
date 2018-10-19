import React from 'react';
import Row from './Row.jsx';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null)],
            selected: ''
        }
    }

   
    
      render() {
          return (
            <div className="board-row"> {this.state.board.map((row, index) => 
                 <Row x={index} row={row} handleClick={this.props.handleClick} player1={this.props.player1}/>
            )}
            </div>
          )
    }
} 




export default Board;