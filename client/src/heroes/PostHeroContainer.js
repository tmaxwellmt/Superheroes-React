import React, { Component } from 'react';

class PostHeroContainer extends Component {

  updateHero(id) {
    this.setState({ newHero: id.target.value })
  }

  submitHero(event){
    event.preventDefault();
    var hero = { text: this.state.newHero}
    this.setState({ heroes: this.state.heroes.concat([hero]), newHero: '' })
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>

      </div>
    )
  }
}

export default PostHeroContainer;
