import { Weight } from "./weight.js";
import { Board } from "../game/board.js";
import { Piece } from "../game/piece.js";

export class LosingWeight extends Weight {
  evaluate(board: Board, player: Piece): number {
    let winner = board.isWon();
    if (!winner) return 0;
    return winner !== player ? -1 : 0;
  }
}