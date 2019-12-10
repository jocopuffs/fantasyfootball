import React, { useState, useEffect } from 'react';

const NewLeagueForm = ({ addLeague }) => {
    const [leagueName, setLeague] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addLeague(leagueName);
        setLeague('');
    }
    return (
    <form onSubmit={handleSubmit}>
        <label>league id:</label>
        <input type="text" value={leagueName} required onChange={(e) => setLeague(e.target.value)}/>
        <input type="submit" value="add league"/>
    </form>
    );
}


export default NewLeagueForm;