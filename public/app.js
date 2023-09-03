let currentPlayer = 'X';
let gameOver = false;

function makeMove(cell) {
    if (cell.innerHTML === '' && !gameOver) {
            cell.innerHTML = currentPlayer;
                    checkWinner();
                            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                                    document.querySelector('.result').textContent = `Player ${currentPlayer}'s turn`;
                                        }
                                        }

                                        function checkWinner() {
                                            const cells = document.querySelectorAll('.cell');
                                                // Add logic to check for a win or a draw
                                                }

                                                function resetGame() {
                                                    const cells = document.querySelectorAll('.cell');
                                                        cells.forEach(cell => {
                                                                cell.innerHTML = '';
                                                                    });
                                                                        currentPlayer = 'X';
                                                                            gameOver = false;
                                                                                document.querySelector('.result').textContent = `Player ${currentPlayer}'s turn`;
                                                                                }