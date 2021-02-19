import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Board(){
    return(
        <div>
            <div className="board-row">
                <button className = "square">X</button>
                <button className = "square">X</button>
                <button className = "square">X</button>
            </div>
            <div className="board-row">
                <button className = "square">X</button>
                <button className = "square">X</button>
                <button className = "square">X</button>
            </div>
            <div className="board-row">
                <button className = "square">X</button>
                <button className = "square">X</button>
                <button className = "square">X</button>
            </div>
        </div>
    );
}


//criação do componnete Game
function Game(){
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>

            <div className="game-info">
                Info

            </div>

        </div>
    );
}

ReactDOM.render(
    //Elemento que sera rederizado
    <Game/>,
    //Local que esse lemento sera renderizado
    document.getElementById('root')
);