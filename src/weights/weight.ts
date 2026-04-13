import { Piece } from "../game/piece.js";

export abstract class Weight {

    public influence : number = 1

    private board: Piece[][];

    constructor(board : Piece[][], influence? : number) {
        this.board = board;
        this.influence = influence ?? 1;
    }

    public abstract generateWeights(column : number, board : Piece[][]) : number

    public getWeight(column : number): number {
        return this.influence*this.generateWeights(column, this.board)
    }
}