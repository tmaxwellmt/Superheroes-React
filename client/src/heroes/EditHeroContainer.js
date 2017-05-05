import React, { Component } from 'react';
import EditHeroForm from './EditHeroForm';
import $ from "jquery";
import {browserHistory} from "react-router";

class EditHeroContainer extends Component {
  state = {
    isFetching: true,
    name: undefined,
    superPowers: undefined,
    universe: undefined,
    newPowers: undefined,
    img: undefined
  }
  updateField  = this.updateField.bind(this);

  componentDidMount = () => this.loadHeroes()

  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadHeroes(){
      $.ajax({
        url: `/api/superheroes/${this.props.params.heroId}`,
        method: "GET"
      }).done(data => {
        console.log(data.name, "HERO NAME")
        this.setState({ name: data.name,
          superPowers: data.superPowers,
                        universe: data.universe,
                        img: data.img,
                        isFetching: false
        })
      })
    }

    handleSubmit = this.handleSubmit.bind(this)

    handleSubmit(event) {
      event.preventDefault();
      const data = {
        name: this.state.name,
        superPowers: this.state.superPowers,
        universe: this.state.universe,
        img: this.state.img,
      }

    $.ajax({
      url: `/api/superheroes/${this.props.params.heroId}`,
      method: "PUT",
      data: data
    }).done(response => {
      console.log(response);
    })}

    updateName = (event) => this.setState({name: event.target.value})
    updateImg = (event) => this.setState({img: event.target.value})
    updatesuperPowers = (event) => this.setState({superPowers: event.target.value})
    updateUniverse = (event) => this.setState({universe: event.target.value})

  updatePowers(event){
    event.preventDefault();
    const tempArray = [];
    tempArray.push(this.state.newPowers);
    this.setState({ superPowers: tempArray});
    this.setState({ newPowers: ''});
    console.log(this.state.superPowers);
  }

  removePowers(event){
    event.preventDefault();
    let tempArray = this.state.superPowers;
    tempArray = tempArray.length > 0 ? tempArray.splice(-1) : tempArray;
    console.log('tempArray', tempArray);
    this.setState({ superPowers: tempArray});
    console.log(this.state.superPowers);
  }

  render() {
    return(
      <div>
        <div>
          <h3> { this.props.params.heroId }</h3>
            {!this.state.isFetching ?
                      <EditHeroForm
                        handleSubmit={this.handleSubmit}
                        updateField={this.updateField}
                        name={this.state.name}
                        superPowers={this.state.superPowers}
                        updatePowers={(event) => this.updatePowers(event)}
                        removePowers={(event) => this.removePowers(event)}
                        universe={this.state.universe}
                        img={this.state.img} />
                        : <h3> Still Thinking... </h3>
        }
        </div>
      </div>
    )
  }
}

// var EditHeroContainer = React.createClass({
//   getInitialState: function () {
//     return (
//       {
//         name: null,
//         img: null,
//         superPower: null,
//         universe: null
//       }
//     );
//   },
//   componentWillMount: function () {
//     getHeroesFromServer();
//   },
//   getHeroesFromServer: function () {
//     $.ajax({
//       url: '/api/superheroes/' + this.props.hero,
//       method: 'GET',
//       data: this.state
//     }).done(function (data) {
//       self.setState(data);
//     });
//   },
//   onChangeHandler: function (feild, value) {
//     var newData = {};
//     newData[field] = value;
//     this.setState(newData);
//   },
//   onSubmitHandler: function () {
//     var self = this;
//     $.ajax({
//       url: './api/superheroes' + this.props.hero,
//       method: 'PUT',
//       data: this.state
//     }).done(function (data) {
//       console.log(data);
//       self.props.setActiveComp('activeComp', 'viewAll');
//     });
//   },
// var EditHeroContainer = React.createClass({
//   render () {
//     return (
//       <div>
//         <EditHeroContainer hero={this.state} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
//       </div>
//     )
//   }
// })
export default EditHeroContainer;
