import { useState } from "react";

const PlayerBoard = (props) => {

    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0]); 

    const clickHandle = (index) => {
        const increaseValue = [...points].map((point, i) => (i === index && point < 3) ? point + 1 : point);
        setPoints(increaseValue);
    }

    const columns = points.map((point, i) => (<td key={i} onClick={() => clickHandle(i)}>{point}</td>));

    return (<tr>
        <td className="name">{props.playerName}</td>
        {columns}
        </tr>
    );
}
 
export default PlayerBoard;