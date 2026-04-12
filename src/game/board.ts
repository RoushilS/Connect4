import { Piece } from "./piece.js";

export class Board {
  private rows = 6;
  private cols = 7;
  private board: Piece[][];

  constructor() {
    this.board = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => Piece.EMPTY),
    );
  }

  dropPiece(piece: Piece, column: number): number {
    for (let row = 0; row < this.rows; row++) {
      if (this.board[row]![column] === Piece.EMPTY) {
        this.board[row]![column] = piece;
        return row;
      }
    }
    return -1;
  }

  logBoard() {
    let outputRow = "";
    for (let row = this.rows - 1; row >= 0; row--) {
      outputRow = "";
      for (let column = 0; column < this.cols; column++) {
        if (this.board[row]![column] == Piece.YELLOW) outputRow += "Y";
        else if (this.board[row]![column] == Piece.RED) outputRow += "R";
        else outputRow += "0";
      }
      console.log(outputRow);
    }
    console.log("");
  }
}
