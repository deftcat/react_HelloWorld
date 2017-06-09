import React, { Component } from 'react';

class Square extends Component {
    state = {}
    render() {
        return (
            <button className='square'>
                {this.props.value}
            </button>
        )
    }
}

class Board extends Component {
    state = {};
    randerSquare(i) {
        return <Square value={i} />
    }
    render() {
        const status = 'The next player is X';
        return (
            <div>
                <div className="status"> {status}</div>
        <div className="board-row">
            {this.randerSquare(0)}
            {this.randerSquare(1)}
            {this.randerSquare(2)}
        </div>
            </div>
        )
    }
}



class Game extends Component {
    state = {}
    render() {
        return (
            <div className="game">
                <h2>this is the Game</h2>
                <div className="board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status*/}</div>
                    <ol>{/*list*/}</ol>
                </div>
            </div>
        )
    }
}

export default Game
