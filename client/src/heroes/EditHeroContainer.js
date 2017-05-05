import React, { Component } from 'react';

class EditHeroContainer extends Component {
  render() {
    return(
      <div>
        <h3> { this.props.params.heroId }</h3>
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
