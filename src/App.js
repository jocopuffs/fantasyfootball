import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Client } from 'espn-fantasy-football-api';
const myClient = new Client({ leagueId: 58950239});
myClient.setCookies({ espnS2: 'AEAxAvlN7dGefUrKDnhqNIdJZaD8fTgUD8fQARKqAUoGwNk0Yo2%2BtiTnrES1HH0w6JQnpFI7b4%2FyfntfXJq2E8O9g84jIyhWZkvX1NFoSc%2BRdyts538tc76FoF4VeB1Qly9HUuyAw3%2BpJwJl0z8a0G3nNAoZrujDYphX6dqePwnjOcNtHTf%2BTOW7TsWapVQ4Q7AI%2FlArkQ%2FeWNBPTsqnEa6KnFsGrh5aKJSqACfI7sso9%2FJtRgbeDGE8NlYIu4ag4talHj1xXfUUhnxVhNECsPb4', SWID: '{048EDC5B-DBC9-4AF7-9A91-9DB57A99DFE2}' });



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div class="background">
         <div class="title">
           <p>fantasy football hub</p>
         </div>
         <div class="add">
           <p>add league</p>
         </div>
       </div>
      </header>
    </div>
  );
}

function standPop() {
  
}

export default App;
