import React from 'react';
import Row from './Row.jsx';

var Board = (props) => (
    
    <div className="board-row"> {props.board.map((row, index) => 
            <Row x={index} row={row} handleClick={props.handleClick} player1={props.player1}
        //  color={this.props.color}
            />
    )}
    </div>
                  
)


// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             board: [Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null), Array(6).fill(null)],
//             selected: ''
//         }
//     }

   
    
//       render() {
//           return (
//             <div className="board-row"> {this.state.board.map((row, index) => 
//                  <Row x={index} row={row} handleClick={this.props.handleClick} player1={this.props.player1}
//                 //  color={this.props.color}
//                  />
//             )}
//             </div>
//           )
//     }
// } 




export default Board;