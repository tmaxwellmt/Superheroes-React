import React, { Component } from 'react';


class HomeContainer extends Component {
  render() {
    return (

        <div className="container">
          <h1>Hello</h1>
          <img className="homeImg" src="http://maxwell-creative.com/wp-content/uploads/2017/04/homebg.jpg" className="logo" alt="logo" />
          <div id="home-btns">
            <a href="/heroes" className="villButton">Villains</a>
            <a href="/villains" className="heroButton">Heroes</a>
          </div>
        </div>

    )
  }
}

export default HomeContainer;
