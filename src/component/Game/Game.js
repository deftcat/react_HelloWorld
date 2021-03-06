import React, { Component } from 'react';

class Square extends Component {
    state = {};
    constructor() {
        super();
        this.state = {
            value: null,
        }
    }
    render() {
        return (
            <button className='square' onClick={() => {
                this.setState({ value: 'x' })
                console.log('====================================')
                console.log(this.props )
                console.log(this.state.value)
                console.log('====================================')
            }}>
                {this.state.value}
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
                <div className="board-row">
                    {this.randerSquare(3)}
                    {this.randerSquare(4)}
                    {this.randerSquare(5)}
                </div>
                <div className="board-row">
                    {this.randerSquare(6)}
                    {this.randerSquare(7)}
                    {this.randerSquare(8)}
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
