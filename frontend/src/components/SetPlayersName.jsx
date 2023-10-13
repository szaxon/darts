import PlayerInput from './PlayerInput';

const SetPlayersName = (props) => {



    const playerInputs = (number) => {
        const inputs = [];

        for (let i = 0; i < number; i++) {
            inputs.push(<PlayerInput playerPosition={i+1}/>)
        };
        
        return inputs;
    }

    return ( 
        <>
            {<form onSubmit={props.handleSubmit}>
                    {playerInputs(props.playerQuantity)}
                    <button>Let's start the game!</button>
            </form>}
        </> );
}
 
export default SetPlayersName;