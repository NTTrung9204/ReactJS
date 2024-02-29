import './Square.js';
import Square from './Square.js';
import { useState } from 'react';

function TicTacToe() {
    const [isTurnX, setIsTurnX] = useState(true);

    function handleClick(event) {
        const index = event.target.getAttribute('Square_id')
        document.querySelector(`[ChildSquare_id="${index}"]`).classList.add('Cross');
    }

    const squares = Array(9).fill(null);
    return (
        <div className="TicTacToe">
            {
                squares.map((square, index) => {
                    return (
                        <Square index={index} key={index} onClick={handleClick} />
                    )
                })
            }
        </div>
    )
}

export default TicTacToe;