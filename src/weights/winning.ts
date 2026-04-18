import { Weight } from "./weight.js";
import { Board } from "../game/board.js";
import { Piece } from "../game/piece.js";

export class WinningWeight extends Weight {
  evaluate(board: Board, player: Piece): number {
    return board.isWon() === player ? 1 : 0 
    }
}