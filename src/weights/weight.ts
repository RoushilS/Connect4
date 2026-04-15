import { Board } from "../game/board.js";
import { Piece } from "../game/piece.js";

export abstract class Weight {
  public influence: number;

  constructor(influence: number = 1) {
    this.influence = influence;
  }

  abstract evaluate(board: Board, player: Piece): number;
}