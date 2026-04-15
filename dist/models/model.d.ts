import { Piece } from "../game/piece.js";
import { Weight } from "../weights/weight.js";
import { Board } from "../game/board.js";
export declare class Model {
    weights: Weight[];
    constructor(weights: Weight[]);
    determineMove(board: Board, player: Piece): number;
}
//# sourceMappingURL=model.d.ts.map