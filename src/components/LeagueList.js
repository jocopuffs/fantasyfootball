import React, {useState, useEffect} from 'react';
import uuid from 'uuid/v1';
import NewLeagueForm from './NewLeague';
import { Client } from 'espn-fantasy-football-api';

const LeagueList = () => {
    const [league, setLeague] = useState([
        {leagueName: 'joe league one', leagueId: 58950239},
    ]);
    const addLeague = (leagueName) => {
        setLeague([...league, {leagueName, leagueId: 3}])
    }
useEffect(()=> {
    console.log('useEffect hook ran', league)
})
    return (
    <div className="league-list">
        <ul>
            {league.map(team => {return (<li key={team.leagueId}>{team.leagueName}</li>)})}
        </ul>
        <NewLeagueForm addLeague = {addLeague} />
    </div>
    );
}

export default LeagueList;