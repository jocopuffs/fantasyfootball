import React, {useState} from 'react';
import './App.css';
import { Client } from 'espn-fantasy-football-api';
import LeagueList from './components/LeagueList';


const myClient = new Client({ leagueId: 58950239});
myClient.setCookies({ espnS2: 'AEAxAvlN7dGefUrKDnhqNIdJZaD8fTgUD8fQARKqAUoGwNk0Yo2%2BtiTnrES1HH0w6JQnpFI7b4%2FyfntfXJq2E8O9g84jIyhWZkvX1NFoSc%2BRdyts538tc76FoF4VeB1Qly9HUuyAw3%2BpJwJl0z8a0G3nNAoZrujDYphX6dqePwnjOcNtHTf%2BTOW7TsWapVQ4Q7AI%2FlArkQ%2FeWNBPTsqnEa6KnFsGrh5aKJSqACfI7sso9%2FJtRgbeDGE8NlYIu4ag4talHj1xXfUUhnxVhNECsPb4', SWID: '{048EDC5B-DBC9-4AF7-9A91-9DB57A99DFE2}' });

// const LeagueList = () => {
//   const [league, setLeague] = useState([
// 
//   title: 'joe league', id:58950239,
// }
//   ]);
// const addLeague = (title) => {
//   setLeague([...league, {title}])
// }

// }

// const NewLeagueForm = ({ addLeague }) => {
//   const [title, setTitle] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addLeague(title);
//   }
//   return(
//     <form onSubmit={handleSubmit}>
//       <label>ESPN League ID</label>
//       <input type="number" value={title} required onChange={(e)=> setTitle(e.target.value)}></input>
//       <input type="submit" value="add league"></input>
//     </form>
//   );
// }




function App() {

  return (
    <div className="App">
      <LeagueList>
        
      </LeagueList>
    </div>
  );
}



export default App;


//restructure