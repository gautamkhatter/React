import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      let row = [];
      for (let j = 0; j < this.props.ncols; j++) {
        row.push(
          Math.random() < this.props.chanceLightStartsOn
        );
      }
      board.push(row);
    }
    return board;
  }

  flipCellsAroundMe(coordinates) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [i, j] = coordinates.split("-").map(Number);

    function flipCell() {
      
    }
  }

  render() {
    let tableBoard = [];
    for (let i = 0; i < this.props.nrows; i++){
      let row = [];
      for (let j = 0; j < this.props.ncols; j++){
        let coordinates = `${i}-${j}`;
        row.push(
          <Cell
            key={coordinates} i
            isLit={this.state.board[i][j]}
            flipCellsAroundMe={
              () => this.flipCellsAroundMe(coordinates)
            }
          />
        )
      }
      tableBoard.push(<tr key={i}>{row}</tr>)
    }

    
    return (
      <table className="Board">
        <tbody>
          <tr>{tableBoard}</tr>
        </tbody>
      </table>
    );
  }
}

export default Board;
