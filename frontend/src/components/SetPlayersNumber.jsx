const SetPlayersNumber = (props) => {

    const numberOfOptions = Array.from({length: 8}, (_, i) => i + 1);

    const initOptions = numberOfOptions.map((numberOfPlayers, i) => (<option key={i} value={numberOfPlayers}>{numberOfPlayers}</option>))

    return (
    <>
        <label htmlFor="players">Choose number of players:</label>

        <select name="players" id="players" onChange={(e) => (props.handleChange(e))}>
        {initOptions}
        </select>
    </>);
}
 
export default SetPlayersNumber;