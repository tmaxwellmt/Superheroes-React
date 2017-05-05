import React, { Component } from 'react';
import $ from "jquery";
import HeroList from './HeroList';


//initialize empty state for heroes
class HeroesContainer extends Component {

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

  deleteHero(id) {
    $.ajax({
      url: '/api/superheroes/' + id,
      method: 'DELETE'
    }).done((data) => {
      console.log("deleted hero");
      this.setState({ heroes: data.data })
    })
  }

// render a component that displays our data
  render() {
    return (
      <div className="container">
        <div className="">

        </div>
        <div className="make-hero">
          <form onSubmit={this.submitHero}>


          </form>
        </div>
        <div className="her">
          {this.state.heroes ? <HeroList heroes={this.state.heroes}/> : undefined }
        </div>
      </div>
    );
  }
}

export default HeroesContainer;
