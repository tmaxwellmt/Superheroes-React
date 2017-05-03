import React from 'react';

const PostHeroForm = (props) => {
  return (
    <div>
      <form onSubmit={(event) => props.handleSubmit(event)}>
        <h1>Create a New Hero</h1>
        <input type= "text" placeholder="Hero Name"
          onChange={(event) => props.updateName(event)}/>
        <input type= "text" placeholder="Super Power"
          onChange={(event) => props.updatesuperPower(event)}/>
        <input type= "text" placeholder="Universe"
          onChange={(event) => props.updateUniverse(event)}/>
        <input type= "text" placeholder="Evil" />
        <input type= "text" placeholder="Rank" />
        <input type= "image" placeholder="" />
        <button type="submit"> Post</button>
      </form>
    </div>
  )
}
export default PostHeroForm;
