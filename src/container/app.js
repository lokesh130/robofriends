import React,{Component} from 'react';
import SearchBox from '../component/searchbox'
import CardList from '../component/cardlist';
import Scroll from '../component/scroll'
import './app.css'

class App extends Component
{
  constructor()
  {
    super();
    this.state={searchfield:"",robots:[]};
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({robots:users}))
  }

 onSearchFunc=(event)=>{
  this.setState({searchfield:event.target.value});
  }

  render()
  {
    const newrobots=this.state.robots.filter((robot)=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    if(this.state.robots.length===0)
    {
      return (
        <h1>Loading</h1>
      );
    }
    else {
      return (
        <div className="tc">
          <h1>Robo Friends </h1>
          <SearchBox func={this.onSearchFunc}/>
          <Scroll>
              <CardList array={newrobots}/>
          </Scroll>
        </div>
      );
    }

  }

};

export default App;
