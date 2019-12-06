import React from 'react';
import logo from './logo.svg';
import "./styles.scss";
import axios from 'axios'
import PlayerCard from './components/PlayerCard'
import Header from './components/Header'


class App extends React.Component {
  constructor() {
    super()
    this.state ={
      players: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response);
      this.setState({ players: response.data });
    })
    .catch(error => {
      console.log("err", error)
    })

  }

  

  
  render(){
  return (
    <div className="container">
      <Header />
      {this.state.players.map(player => (
            <PlayerCard key={player.id} data={player} />
          ))}
      {/* <PlayerCard players={this.players} playerText={this.playerText}/> */}
    </div>
  );
  }
}
export default App;
