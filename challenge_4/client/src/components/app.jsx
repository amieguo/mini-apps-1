import React from 'react';
import Board from './Board.jsx';
import Square from './Square.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: [],
            player1: 1,
            player2: 2,
            currentplayer: null,
            gameover: false,
            message: ''

        }
    }

    startGame() {
        let board = [];
    for (let r = 0; r < 6; r++) {
      let row = [];
      for (let c = 0; c < 7; c++) { row.push(null) }
      board.push(row);
    }
    
        this.setState({
            board,
            currentplayer: 1,
            message: 'start game!'
        })
        // console.log(this.state.currentplayer)
    }

    togglePlayer() {
        return (this.state.currentplayer === this.state.player1) ? this.state.player2 : this.state.player1;
    }

    handleClick(x, y) {
        
        var newboard = this.state.board;
        
        // if (!this.state.gameover) {
        // for (var x = 5; x >= 0; x--) {
            // console.log(x, y)
            // if (!board[x][y]) {
              newboard[x][y] = this.state.currentplayer;
            // }
        //   }
        // }
        
        this.setState({ board: newboard, currentplayer: this.togglePlayer() });
        // console.log(this.state.currentplayer)
        // console.log(this.state.board)
        // return (<Square style={{backgroundColor: color}}/>)
    }
    



    render() {
        var status;

        if (this.state.player1) {
            status = "Player 1's Turn";
        } else {
            status = "Player 2's Turn";
        }
        


        return (
            <div>
                <button className='start' onClick={this.startGame.bind(this)}>Press to Play!</button>
                <div>{this.state.message}</div>
                <div>{status}</div>
                <div>
                    <Board player1={this.state.player1} handleClick={this.handleClick.bind(this)} 
                    board={this.state.board}
                    // color={color}
                    />
                </div>
            </div>
        )
    }
}









export default App;