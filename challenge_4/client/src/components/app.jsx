import React from 'react';
import Board from './Board.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player1: true,
            
        }
    }
    handleClick() {
        this.setState({
            player1: !this.state.player1
        })
    }
    



    render() {
        var status;
        if (this.state.player1) {
            status = "Player 1's Turn"
        } else {
            status = "Player 2's Turn"
        }
        


        return (
            <div>Let's Play!
                <div>{status}</div>
                <div><Board player1={this.state.player1} handleClick={this.handleClick.bind(this)}/></div>
            </div>
        )
    }
}









export default App;