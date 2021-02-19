import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//criação do componnete Game
function Game(){
    return <div>Jogo</div>
}

ReactDOM.render(
    //Elemento que sera rederizado
    <Game></Game>,
    //Local que esse lemento sera renderizado
    document.getElementById('root')
);