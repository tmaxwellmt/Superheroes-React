import React from 'react';
import { Link } from 'react-router';

const HeroList = (props) => {
  return (
    <div className="hero-flex">
    { props.heroes.map(item => {
      return (
        <div className="hero-panel">
          <h3 className="hero-name">{item.name}</h3>
          <img className="hero-image" src={item.img} alt="img" />
          <ol>
            <li>{item.superPowers}</li>
            <li>{item.universe}</li>
            <li>{item.evil}</li>
            <li>{item.rank}</li>
          </ol>
          <Link className="heroButton" to={`/heroes/edit/${item._id}`}>Edit</Link>
        </div>
        )
      })
    }
    </div>
  )
}

export default HeroList;
