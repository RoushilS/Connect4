export class Model {
    constructor(weights) {
        this.weights = weights;
    }
    determineMove(board, player) {
        let columns = Array(7).fill(0);
        let currentBoard = board;
        for (let j = 0; j < 7; j++) {
            console.log("col", j, "score before:", columns[j]);
            currentBoard = board.clone();
            let row = currentBoard.dropPiece(player, j);
            if (row === -1) {
                columns[j] = -Infinity;
                continue;
            }
            for (let i = 0; i < this.weights.length; i++) {
                columns[j] += this.weights[i].evaluate(currentBoard, player) * this.weights[i].influence;
            }
            console.log("col", j, "score after:", columns[j]);
        }
        return columns.indexOf(Math.max(...columns));
    }
}
//# sourceMappingURL=model.js.map