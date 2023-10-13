import PlayerBoard from './PlayerBoard';
import { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

export default function BoardHeader(props) {

    const playerNames = props.playerNames;
    
    const headerValues = ["", "15", "16", "17", "18", "19", "20", "B"];
    
    const initTableHeader = headerValues.map((value, i) => (<th key={i} >{value}</th>));

    const buildPlayerBoards = (number) => {
        const playerBoards = [];

        for (let i = 0; i < number; i++) {
            playerBoards.push(<PlayerBoard playerName={playerNames[i]}/>);
        }
        
        return playerBoards;
    }

    return (
    <table id="board">
        <thead>
            <tr>
                {initTableHeader}
            </tr>
        </thead>
        <tbody>
                {buildPlayerBoards(playerNames.length)}
        </tbody>
    </table>
    )
}
          
