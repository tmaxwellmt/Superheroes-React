import React, { Component } from 'react';
import logo from '../superhero-logo.svg';
import $ from "jquery";
import VillainList from './VillainList';
//import Jumbotron from 'react-bootstrap';

//initialize empty state for heroes
class VillainsContainer extends Component {

  state = {
    villains: undefined,
    newVillain: undefined
  }

  componentDidMount = () => this.loadVillains()

// create a () that gets villains from DB
  loadVillains(){
      $.ajax({
        url: "/api/villains",
        method: "GET"
      }).done((response) => {
        console.log(response)
        this.setState({ villains: response.data })
      })
    }

  deleteVillain(id) {
    $.ajax({
      url: '/api/villains/' + id,
      method: 'DELETE'
    }).done((data) => {
      console.log("deleted hero");
      this.setState({ villains: data.data })
    })
  }

// render a component that displays our data
  render() {
    return (
      <div className="container">
        <div className="">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="make-hero">
          <form onSubmit={this.submitVillain}>

            <button type="submit" className="villButton"> Create A Villain </button>
          </form>
        </div>
        <div className="">
          {this.state.villains ? <VillainList villains={this.state.villains}/> : undefined }
        </div>
      </div>
    );
  }
}

export default VillainsContainer;
