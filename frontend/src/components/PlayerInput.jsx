const PlayerInput = (props) => {

    return (
        <>
            <label htmlFor="playerName">{`${props.playerPosition}. Player name:`}
                <input type="text" id="fname" name="fname"/>
            </label><br></br>
        </>
    );
}
 
export default PlayerInput;