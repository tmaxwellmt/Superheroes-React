import React from 'react';
import {Form, Button, FormControl} from 'react-bootstrap';

var PostSuperheroForm = (props) {
  return (
    <div>
      <form>
        <FormControl type= "text" placeholder="name" value={props.heroes.name} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="superPower" value={props.heroes.superPower} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="universe" value={props.heroes.universe} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="evil" value={props.heroes.evil} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "text" placeholder="rank" value={props.heroes.rank} onChangeHandler={(event) => props.onChangeHandler}/>
        <FormControl type= "image" placeholder="" value={props.heroes.img} onChangeHandler={(event) => props.onChangeHandler}/>

  )
}
export default PostSuperheroForm;
