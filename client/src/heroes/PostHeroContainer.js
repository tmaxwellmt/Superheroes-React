import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from "jquery";

class PostHeroContainer extends Component {

  state = {
    name: undefined,
    superPower: undefined,
    universe: undefined
  }

  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(event) {
    event.preventDefault()
    console.log(
      this.state.name,
      this.state.superPower,
      this.state.universe,
      "name and universe"
    )

  const hero={name: this.state.name, superPower: this.state.superPower, universe: this.state.universe}

  $.ajax({
    url: "/api/superheroes",
    method: "POST",
    data: hero
  }).done((response) =>
    console.log(response))
  }

  updateName = (event) => this.setState({name: event.target.value})

  updatesuperPower = (event) => this.setState({superPower: event.target.value})

  updateuniverse = (event) => this.setState({universe: event.target.value})


  render() {
    return (
      <div>
        <PostHeroForm handleSubmit={ this.handleSubmit }
          updateName={this.updateName}
          updatesuperPower={this.updatesuperPower}
          updateUniverse={this.updateUniverse}/>

      </div>
    )
  }
}

export default PostHeroContainer;
