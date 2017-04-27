import React from 'react';

const HeroList = (props) => {
  return (
    <div>
    { props.heroes.map(item => {
      return (
        <div className="component">
          <div className="hero-panel">
            <h3 className="hero-name">{item.name}</h3>
            <img className="hero-image" src={item.img} />
            <ul>
              <li>{item.superPower}</li>
              <li>{item.universe}</li>
              <li>{item.evil}</li>
              <li>{item.rank}</li>
            </ul>
          </div>
        </div>
        )
      })
    }
    </div>
  )
}

export default HeroList;
