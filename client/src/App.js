import React, { Component } from 'react';
import logo from './superhero-logo.svg';
import './App.css';
import $ from "jquery";
import HeroList from './HeroList';


//initialize empty state for heroes
class App extends Component {

  state = {
    heroes: undefined,
    newHero: undefined
  }

  componentDidMount = () => this.loadHeroes()

// create a () that gets heroes from DB
  loadHeroes(){
      $.ajax({
        url: "/api/superheroes",
        method: "GET"
      }).done((response) => {
        console.log(response)
        this.setState({ heroes: response.data })
      })
    }

// call this function when comp mounts


// use this new data to update our state
  submitHero(event){
    event.preventDefault();
    var hero = { text: this.state.newHero}
    this.setState({ heroes: this.state.heroes.concat([hero]), newHero: '' })
  }

  deleteHero(id) {
    $.ajax({
      url: '/api/Superheroes' + id,
      method: 'DELETE'
    }).done(data) {
      console.log("deleted hero");
      this.setState({ heroes: data.data })
    })
  }

  updateHero(id) {
    this.setState({ newHero: id.target.value })
  }


// render a component that displays our data


  render() {
    return (
      <div className="">
        <div className="">
          <img src={logo} className="" alt="logo" />
          <h1>Superheroes & Villains</h1>
        </div>
        <div>
          <form onSubmit={this.submitHero}>
            <input placeholder="Make a Superhero" onChange={ this.updateHero} value={this.state.newHero} />
            <button type="submit" className="btn btn-success"> Create </button>
          </form>
        </div>
        <div className="">
          {this.state.heroes ? <HeroList heroes={this.state.heroes}/> : undefined }
          <button type="Delete" className="btn btn-success" onClick={ this.deleteHero } > DELETE </button>
        </div>
      </div>
    );
  }
}

export default App;
