import React, { useState } from 'react';

const NewLeagueForm = ({ addLeague }) => {
    const [leagueId, setLeague] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addLeague(leagueId);
        setLeague('');
    }
    return (
    <form onSubmit={handleSubmit}>
        <label>league id:</label>
        <input type="number" value={leagueId} required onChange={(e) => setLeague(e.target.value)}/>
        <input type="submit" value="add league"/>
    </form>
    );
}


export default NewLeagueForm;