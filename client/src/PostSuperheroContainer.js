import React from 'react';
import $ from 'jquery';

var PostSuperherContainer = React.createClass({
  getInitialState: function () {
    return (
      {
        name: null;
        superPower: null;
        universe: null;
        evil: null;
        rank: null;
        img: null;
      }
    );
  },
  onChangeHandler: function (feild, value) {
    var newData = {};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function () {
    var self = this;
    $.ajax({
      url: './api/Superheroes',
      method: 'POST',
      data: this.state
    }).done(function (data) {
      console.log(data);
      self.props.setActiveComp('activeComp', 'viewAll');
    });
  },
    render (){
      return (
      <div>
        <PostSuperheroForm onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
      </div>
    )
  }
})
export default PostSuperheroContainer;
