import { Board } from "./game/board.js";
import { Piece } from "./game/piece.js";
let b = new Board();
b.logBoard();
b.dropPiece(Piece.RED, 5);
b.logBoard();
