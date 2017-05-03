import React, { Component } from 'react';

class PostVillainContainer extends Component {

  updateVillain(id) {
    this.setState({ newVillain: id.target.value })
  }

  submitVillain(event){
    event.preventDefault();
    var villain = { text: this.state.newVillain}
    this.setState({ villains: this.state.villains.concat([villain]), newVillain: '' })
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>

      </div>
    )
  }
}

export default PostVillainContainer;
