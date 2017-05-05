import React from 'react';

const EditHeroForm = (props) => {
  return (
    <div className="basic-grey">
      <form className="form" onSubmit={props.handleSubmit}>
        <h1 className="form-header">Edit A Hero</h1>
        <div className="form-group">
          <label className="label">Name: </label>
          <input type="text" value={props.name} placeholder="Name"
            onChange={(event) => props.updateField("name", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Image: </label>
          <input type= "text" value={props.img} placeholder="Enter URL"
            onChange={(event) => props.updateField("img", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Super Power: </label>
          <input type= "text" value={props.superPowers} placeholder="Super Power"
            onChange={(event) => props.updateField("Super Power", event.target.value)}/>
        </div>
        <div className="form-group">
          <label className="label">Universe: </label>
          <input type= "text" value={props.universe} placeholder="Universe"
            onChange={(event) => props.updateField("Universe", event.target.value)}/>
        </div>
        <div className="col-md-12">
         <div className="row">
           <div className="powerList">{
             props.superPowers.map((power,index) =>
               <h3 key={index}>{power}</h3>
             )
           }
           </div>
           <input type="text" placeholder=" Enter Super Power." onChange={(event) => props.updateField("newPower",event.target.value)}/>
         </div>
         <div className="row">
          <button onClick={(event) => props.updatePowers(event)} className="btn btn-default">Add Power +</button>
          <button onClick={(event) => props.removePowers(event)} className="btn btn-default">Remove Power -</button>
         </div>
        </div>
          <button type="submit" className="heroButton">Post</button>
      </form>
    </div>
  )
}
export default EditHeroForm;
