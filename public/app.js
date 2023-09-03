let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    const cell = document.querySelector(`.row:nth-child(${row + 1}) .btn:nth-child(${col + 1})`);
        
            if (cell.innerHTML === '' && !gameOver) {
                    cell.innerHTML = currentPlayer;
                            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                    checkWin();
                                        }
                                        }

                                        function checkWin() {
                                            const cells = document.querySelectorAll('.btn');
                                                const winningCombinations = [
                                                        [0, 1, 2],
                                                                [3, 4, 5],
                                                                        [6, 7, 8],
                                                                                [0, 3, 6],
                                                                                        [1, 4, 7],
                                                                                                [2, 5, 8],
                                                                                                        [0, 4, 8],
                                                                                                                [2, 4, 6],
                                                                                                                    ];

                                                                                                                        for (const combination of winningCombinations) {
                                                                                                                                const [a, b, c] = combination;
                                                                                                                                        if (cells[a].innerHTML && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
                                                                                                                                                    document.querySelector('.result').innerHTML = `Player ${cells[a].innerHTML} wins!`;
                                                                                                                                                                gameOver = true;
                                                                                                                                                                            return;
                                                                                                                                                                                    }
                                                                                                                                                                                        }

                                                                                                                                                                                            if ([...cells].every(cell => cell.innerHTML !== '')) {
                                                                                                                                                                                                    document.querySelector('.result').innerHTML = "It's a draw!";
                                                                                                                                                                                                            gameOver = true;
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                        document.querySelector('.result').innerHTML = `Player ${currentPlayer}'s Turn`;
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            function resetGame() {
                                                                                                                                                                                                                                const cells = document.querySelectorAll('.btn');
                                                                                                                                                                                                                                    cells.forEach(cell => {
                                                                                                                                                                                                                                            cell.innerHTML = '';
                                                                                                                                                                                                                                                    cell.disabled = false;
                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                            document.querySelector('.result').innerHTML = `Player X's Turn`;
                                                                                                                                                                                                                                                                currentPlayer = 'X';
                                                                                                                                                                                                                                                                    gameOver = false;
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    document.addEventListener('DOMContentLoaded', () => {
                                                                                                                                                                                                                                                                        document.querySelector('.result').innerHTML = `Player X's Turn`;
                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                        