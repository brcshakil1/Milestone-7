import { useState } from "react";

const Person = () => {
    const [person, setPerson] = useState(5);

    const handleAdd = () => {
        setPerson(person+1);
    }
    const handleRemove = () => {
        setPerson(person-1);
    }

    const personStyle = {
        border: '2px solid green',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }
    return (
        <div style={personStyle}>
            <h3>Person: {person}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}

export default Person;