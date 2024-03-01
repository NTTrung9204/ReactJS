import './Square.js';
import Square from './Square.js';
import { useState } from 'react';

function checkWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function TicTacToe() {
    const [isTurnX, setIsTurnX] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(event) {
        try{
            const index = event.target.getAttribute('Square_id')
            const label = isTurnX ? 'Cross' : 'Circle';
            const newSquares = squares.map((square, i) => i === parseInt(index) ? label : square)
            
            setTimeout(()=>{
                const winner = checkWinner(newSquares);
                if(winner) {
                    alert(`${winner} wins!`);
                    resetGame();
                    return;
                }
            }, 300)
            setSquares(newSquares);
            setIsTurnX(!isTurnX);

        }
        catch{
            console.log("Can't fill this blank space!");
        }
    }

    function resetGame(){
        console.log('reset')
        setSquares(Array(9).fill(null));
        setIsTurnX(true);
    }

    return (
        <div className="TicTacToe">
            {
                squares.map((square, index) => {
                    return (
                        <Square value={square} index={index} key={index} onClick={handleClick} />
                    )
                })
            }
            <button onClick={resetGame} className='ResetGame'>Reset</button>
        </div>
    )
}

export default TicTacToe;