import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewLeagueForm from './NewLeague';

const LeagueList = () => {
    const [league, setLeague] = useState([
        {leagueName: 'joe league one', id: 1},
        {leagueName: 'joe league two', id: 2},
        {leagueName: 'joe league three', id: 3},
    ]);
    const addLeague = (leagueName) => {
        setLeague([...league, {leagueName, id: uuid()}])
    }
useEffect(()=> {
    console.log('useEffect hook ran', league)
})
    return (
    <div className="league-list">
        <ul>
            {league.map(team => {return (<li key={team.id}>{team.leagueName}</li>)})}
        </ul>
        <NewLeagueForm addLeague = {addLeague} />
    </div>
    );
}

export default LeagueList;