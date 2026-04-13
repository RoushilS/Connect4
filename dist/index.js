import { Board } from "./game/board.js";
import { Piece } from "./game/piece.js";
const gameBoard = new Board();
const boardDiv = document.getElementById("board");
const resetButton = document.getElementById("resetButton");
const currentPlayerText = document.getElementById('current-player-text');
resetButton.addEventListener("click", handleReset);
let currentPlayer = Piece.RED;
function render() {
    boardDiv.innerHTML = "";
    const grid = gameBoard.getBoard();
    console.log("rendering");
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            const value = grid[row][col];
            console.log(row, col);
            if (value === Piece.RED)
                cell.classList.add("red");
            else if (value === Piece.YELLOW)
                cell.classList.add("yellow");
            cell.addEventListener("click", () => handleMove(col));
            boardDiv.appendChild(cell);
        }
    }
}
function handleMove(col) {
    const row = gameBoard.dropPiece(currentPlayer, col);
    if (row === -1)
        return;
    const winner = gameBoard.isWon();
    if (winner !== null) {
        render();
        alert(winner === Piece.RED ? "Red wins!" : "Yellow wins!");
        return;
    }
    currentPlayer =
        currentPlayer === Piece.RED ? Piece.YELLOW : Piece.RED;
    updatePlayerTurn();
    render();
}
function handleReset() {
    gameBoard.clear();
    currentPlayer = Piece.RED;
    updatePlayerTurn();
    render();
}
function updatePlayerTurn() {
    if (currentPlayer == Piece.RED) {
        currentPlayerText.textContent = "Current Player: RED";
        currentPlayerText.style.color = 'red';
    }
    if (currentPlayer == Piece.YELLOW) {
        currentPlayerText.textContent = "Current Player: YELLOW";
        currentPlayerText.style.color = 'yellow';
    }
}
render();
//# sourceMappingURL=index.js.map