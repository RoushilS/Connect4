import { Piece } from "./piece.js";
export declare class Board {
    private rows;
    private cols;
    private board;
    constructor();
    dropPiece(piece: Piece, column: number): number;
    getBoard(): Piece[][];
    isWon(): Piece.RED | Piece.YELLOW | null;
    checkFour(i1: Piece, i2: Piece, i3: Piece, i4: Piece): Piece.RED | Piece.YELLOW | null;
    checkHorizontals(): Piece.RED | Piece.YELLOW | null;
    checkVerticals(): Piece.RED | Piece.YELLOW | null;
    checkDiagonals(): Piece.RED | Piece.YELLOW | null;
    logBoard(): void;
    clear(): void;
}
//# sourceMappingURL=board.d.ts.map