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
    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.board[row]![column] === Piece.EMPTY) {
        this.board[row]![column] = piece;
        return row;
      }
    }
    return -1;
  }

  getBoard(): Piece[][] {
  return this.board;
}

  isWon() {
    if (this.checkHorizontals()!=null) return this.checkHorizontals();
    if (this.checkVerticals()!=null) return this.checkVerticals();
    if (this.checkDiagonals()!=null) return this.checkDiagonals();
    return null
  }
    
  checkFour(i1 : Piece, i2 : Piece, i3 : Piece, i4 : Piece) {
    if (i2==i1 && i3==i2 && i4==i3 && i1 !=Piece.EMPTY) {
      return i1;
    }
    return null;
  }

  checkHorizontals() {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col <= this.cols-4; col++) {
        let result = this.checkFour(this.board[row]![col]!, this.board[row]![col+1]!, this.board[row]![col+2]!, this.board[row]![col+3]!)
        if (result!=null) return result
      }
      
    }
    return null
  }

  checkVerticals() {
    for (let row = 0; row <= this.rows-4; row++) {
      for (let col = 0; col < this.cols; col++) {
        let result = this.checkFour(this.board[row]![col]!, this.board[row+1]![col]!, this.board[row+2]![col]!, this.board[row+3]![col]!)
        if (result!=null) return result
      }
      
    }
    return null
  }

  checkDiagonals() {
    for (let row = 0; row <= this.rows-4; row++) {
      for (let col = 0; col <= this.cols-4; col++) {
        let result = this.checkFour(this.board[row]![col]!, this.board[row+1]![col+1]!, this.board[row+2]![col+2]!, this.board[row+3]![col+3]!)
        if (result!=null) return result
      }
      
    }

    for (let row = 3; row < this.rows; row++) {
      for (let col = 0; col <= this.cols - 4; col++) {
        let result = this.checkFour(this.board[row]![col]!, this.board[row-1]![col+1]!, this.board[row-2]![col+2]!, this.board[row-3]![col+3]!)
        if (result !== null) return result;
    }

  }
    return null
  }

  logBoard() {
    let outputRow = "";
    for (let row = 0; row<this.rows; row++) {
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

  clear() {
    for (let i = 0; i<this.rows; i++) {
      for (let j = 0; j<this.cols; j++) {
        this.board[i]![j] = Piece.EMPTY
      }
    }
  }
}
