import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from "jquery";
import {browserHistory} from "react-router";

class PostHeroContainer extends Component {

  state = {
    name: undefined,
    superPowers: undefined,
    universe: undefined,
    img: undefined
  }

  handleSubmit = this.handleSubmit.bind(this)

  handleSubmit(event) {
    event.preventDefault()
    console.log(
      this.state.name,
      this.state.superPowers,
      this.state.universe,
      this.state.img,
      "name and universe"
    )

  const hero={name: this.state.name,
              img: this.state.img,
              superPowers: this.state.superPowers,
              universe: this.state.universe
            }

  $.ajax({
    url: "/api/superheroes",
    method: "POST",
    data: hero
  }).done((response) =>
    browserHistory.push('/heroes'))
  }

  updateName = (event) => this.setState({name: event.target.value})
  updateImg = (event) => this.setState({img: event.target.value})
  updatesuperPowers = (event) => this.setState({superPowers: event.target.value})
  updateUniverse = (event) => this.setState({universe: event.target.value})


  render() {
    return (
      <div>
        <PostHeroForm handleSubmit={ this.handleSubmit }
          updateName={this.updateName}
          updateImg={this.updateImg}
          updatesuperPowers={this.updatesuperPowers}
          updateUniverse={this.updateUniverse}/>

      </div>
    )
  }
}

export default PostHeroContainer;
