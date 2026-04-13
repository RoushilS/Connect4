import { Piece } from "../game/piece.js";
import { Weight } from "./weight.js";

class RandomWeight extends Weight {
    public override generateWeights(column: number, board: Piece[][]): number {
        return Math.random();
    }
}