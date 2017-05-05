import React from 'react';

const PostHeroForm = (props) => {
  return (
    <div className="basic-grey">
      <form className="form" onSubmit={(event) => props.handleSubmit(event)}>
      <h1 className="form-header">Make A Hero</h1>
        <div className="form-group">
          <label className="label" for="name">Hero Name:</label>
          <input type= "text" placeholder="Name"
            onChange={(event) => props.updateName(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="img">Image:</label>
          <input type= "text" placeholder="Enter URL"
            onChange={(event) => props.updateImg(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="superPowers">Super Power:</label>
          <input type= "text" placeholder="Super Power"
            onChange={(event) => props.updatesuperPowers(event)}/>
        </div>
        <div className="form-group">
          <label className="label" for="universe">Universe:</label>
          <input type= "text" placeholder="Universe"
            onChange={(event) => props.updateUniverse(event)}/>
        </div>
          <button type="submit" className="btn btn-default">Post</button>
      </form>
    </div>
  )
}
export default PostHeroForm;
