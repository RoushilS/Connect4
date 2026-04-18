import { Weight } from "./weight.js";
export class WinningWeight extends Weight {
    evaluate(board, player) {
        return board.isWon() === player ? 1 : 0;
    }
}
//# sourceMappingURL=winning.js.map