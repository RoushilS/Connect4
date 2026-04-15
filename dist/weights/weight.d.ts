import { Board } from "../game/board.js";
import { Piece } from "../game/piece.js";
export declare abstract class Weight {
    influence: number;
    constructor(influence?: number);
    abstract evaluate(board: Board, player: Piece): number;
}
//# sourceMappingURL=weight.d.ts.map