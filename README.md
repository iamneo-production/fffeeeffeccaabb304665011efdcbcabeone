<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tic Tac Toe</title>
                <link rel="stylesheet" href="styles.css">
                </head>
                <body>
                    <h1 class="header">Tic Tac Toe</h1>
                        <div class="box">
                                <div class="row">
                                            <button class="btn" onclick="makeMove(0, 0)"></button>
                                                        <button class="btn" onclick="makeMove(0, 1)"></button>
                                                                    <button class="btn" onclick="makeMove(0, 2)"></button>
                                                                            </div>
                                                                                    <div class="row">
                                                                                                <button class="btn" onclick="makeMove(1, 0)"></button>
                                                                                                            <button class="btn" onclick="makeMove(1, 1)"></button>
                                                                                                                        <button class="btn" onclick="makeMove(1, 2)"></button>
                                                                                                                                </div>
                                                                                                                                        <div class="row">
                                                                                                                                                    <button class="btn" onclick="makeMove(2, 0)"></button>
                                                                                                                                                                <button class="btn" onclick="makeMove(2, 1)"></button>
                                                                                                                                                                            <button class="btn" onclick="makeMove(2, 2)"></button>
                                                                                                                                                                                    </div>
                                                                                                                                                                                        </div>
                                                                                                                                                                                            <div class="result-container">
                                                                                                                                                                                                    <p class="result">Player X's Turn</p>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                            <div class="reset">
                                                                                                                                                                                                                    <button class="reset-btn" onclick="resetGame()">Reset</button>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                            <script src="script.js"></script>
                                                                                                                                                                                                                            </body>
                                                                                                                                                                                                                            </html>
                                                                                                                                                                                                                            
