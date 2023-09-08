import { useState } from "react";

const Team = () => {
    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        setTeam(team + 1)
    }
    const handleRemove = () => {
        setTeam(team - 1)
    }

    const teamStyle = {
        border: '2px solid blue',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Player</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    );
};

export default Team;