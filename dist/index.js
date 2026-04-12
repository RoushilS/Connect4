import { Board } from "./game/board.js";
import { Piece } from "./game/piece.js";
let b = new Board();
b.logBoard();
b.dropPiece(Piece.RED, 1);
b.dropPiece(Piece.RED, 2);
b.dropPiece(Piece.RED, 3);
b.dropPiece(Piece.RED, 5);
b.logBoard();
if (b.isWon() == Piece.RED)
    console.log("RED");
//# sourceMappingURL=index.js.map