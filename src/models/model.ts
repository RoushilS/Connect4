import { Piece } from "../game/piece.js";
import { Weight } from "../weights/weight.js";
import { Board } from "../game/board.js";

export class Model {
    weights :  Weight[]

    constructor(weights : Weight[]) {
        this.weights = weights
    }

    determineMove(board : Board, player : Piece) : number{
        let columns = Array(7).fill(0);
        
        let currentBoard = board
        for (let j = 0; j<7; j++) {
            console.log("col", j, "score before:", columns[j]);
            currentBoard = board.clone();
            let row = currentBoard.dropPiece(player, j);
            if (row === -1) {
                columns[j] = -Infinity
                continue;
            }
            for (let i = 0; i<this.weights.length; i++) {
                columns[j]!+=this.weights[i]!.evaluate(currentBoard, player)*this.weights[i]!.influence
            }
            console.log("col", j, "score after:", columns[j]);
        }
        return columns.indexOf(Math.max(...columns));
    }
}