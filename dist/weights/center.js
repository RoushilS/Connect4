import { Weight } from "./weight.js";
import { Piece } from "../game/piece.js";
export class CenterWeight extends Weight {
    evaluate(board, player) {
        let score = 0;
        let columnWeights = [0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25];
        const opponent = player === Piece.RED ? Piece.YELLOW : Piece.RED;
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                let cell = board.getBoardIndex(row, col);
                if (cell === player) {
                    score += columnWeights[col];
                }
                else if (cell === opponent) {
                    score -= columnWeights[col];
                }
            }
        }
        return score;
    }
}
//# sourceMappingURL=center.js.map