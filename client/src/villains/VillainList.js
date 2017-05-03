import React from 'react';

const VillainList = (props) => {
  return (
    <div>
    { props.villains.map(item => {
      return (
        <div className="component">
          <div className="villain-panel">
            <h3 className="villain-name">{item.name}</h3>
            <img className="villain-image" src={item.img} alt="vil-img" />
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

export default VillainList;
