import React from 'react';
import Square from './Square.jsx';

var Row = (props) => (

    
    <div>
        
        {props.row.map((elem, index) => <Square value={elem} y={index} x={props.x} 
        handleClick={props.handleClick} player1={props.player1} 
        // color={props.color}
        />)}
        
    </div>


)






export default Row;