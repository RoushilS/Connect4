import { Weight } from "./weight.js";
export class LosingWeight extends Weight {
    evaluate(board, player) {
        let winner = board.isWon();
        if (!winner)
            return 0;
        return winner !== player ? -1 : 0;
    }
}
//# sourceMappingURL=losing.js.map