import React, {Component} from 'react';
import './App.css';
import { Client } from 'espn-fantasy-football-api';
import LeagueList from './components/LeagueList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class Player extends Component {
  constructor() {
      super()
      this.state = {
          isSelected: false,
      }
  }

  handleClick= () => {
      this.setState(state =>({
      isSelected: !state.isSelected}))
      }

  render() {
      const {name } = this.props;
      const {predicted} = this.props;
      const {isSelected} = this.state;

      return(
          
          <div onClick={this.handleClick} className={'Player_Container'}>
              <h3>{name}</h3>
              {isSelected && <p>{predicted}</p>}
          </div>

   
      )
  }
}


class Team extends Component {
    constructor() {
        super()
        this.state = {
            isSelected: false,
        }
    }

    handleClick= () => {
        this.setState(state =>({
        isSelected: !state.isSelected}))
        }

    render() {
        const {name} = this.props;
        const {predicted} = this.props;
        const {isSelected} = this.state;

        return(
            
            <div onClick={this.handleClick} className={'Team_Container'}>
                <h3>{name}</h3>
                {isSelected && <p>{predicted}</p>}
            </div>

     
        )
    }
}




const myClient = new Client({ leagueId: 109192});
console.log(myClient);

const HomePage = () => (
  <h2 className="home">Hello! For my application lab side project, I decided to make an app which uses an ESPN API to take the predicted scores of my current lineup, and see whether there are players on the waiver wire available to pick up which have a higher predicted score, to hopefully help optimize my final team performance. If there is such a player available, they will appear on the avaiailable player tab</h2>
)

class App extends Component {

  render() {
    return(
<Router>
<div className="App">
  <AppBar posistion="static" color="default">
    <Toolbar>
      <Typography variant="h4" color="inherit">Joe's Fantasy Football Side Project</Typography>
    </Toolbar>
  </AppBar>
      <header className="App-header">
        <h1 className="App-title">
          fantasy football players
        </h1>
        <div className="toolbar">
          <Link to ="/">Home</Link>
          <Link to ="/my-team">My Team</Link>
          <Link to ="/free-agents">Available Players</Link>
        </div>
      </header>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/free-agents" component = {FreeAgentsPage}></Route>
      <Route path="/my-team"component={MyTeamPage}></Route>
      <div className="App-body">
        
      </div>
    </div>
</Router>
    );
  }
}

const FreeAgentsPage = () => (
  <div>
    <div>
      <h5 className="headings">WR</h5>
    </div>
    <Player name="Darius Slayton" predicted="11.1 vs DJ Chark 9.8"></Player>
    <Player name="Anthony Brown" predicted="10.5 vs DJ Chark 9.8"></Player>
    <Player name="Will Fuller" predicted="10.4 vs DJ Chark 9.8"></Player>
    <Player name="Tajh Boyd" predicted="9.9 vs DJ Chark 9.8"></Player>
    <div>
      <h5 className="headings">TE</h5>
      <Player name="Mark Andrews" predicted="10.4 vs Jared Cook 9.4"></Player>
    <Player name="Tyler Higbee" predicted="10.1 vs Jared Cook 9.4" ></Player>
    </div>
  </div>
  
)

const MyTeamPage = () => (
  <div>
    <div>
      <h5 className="headings">QB</h5>
    </div>
    <Team name="Drew Brees" predicted="19.9"></Team>
    <div>
      <h5 className="headings">RB</h5>
    </div>
    <Team name="Ezikiel Elliot" predicted="18.7"></Team>
    <Team name="Chrisitan McCaffrey" predicted="24.3"></Team>
    <div>
      <h5 className="headings">WR</h5>
    </div>
    <Team name="Keenan Allen" predicted="12.5"></Team>
    <div className="rote">
    <Team name="DJ Chark" predicted ="9.8 && CHECK AVAILABLE"></Team>
    </div>
    <div>
      <h5 className="headings">TE</h5>
    </div>
    <div className="rote">
    <Team name="Jared Cook" predicted="9.4 && CHECK AVAILABLE"></Team>
    </div>
    <div>
      <h5 className="headings">K</h5>
    </div>
    <Team name="Younghoe Koo" predicted="8.5"></Team>
  </div>
)

export default App;

