import React from 'react'
import axios from 'axios'

const CreateStory = (props) => {

  const createStory = () => {
    const newStory = {}
    newStory.title = document.getElementById('createTitle').value
    newStory.numberUsers = document.getElementById('createNUsers').value
    newStory.storyLength = document.getElementById('createLength').value
    axios.post('http://127.0.0.1:8081/stories', newStory)
    .then( res => {
      console.log(res)
    })
  }

  return (
    <div className="createStoryWrap">
      <h3>Our story begins...</h3>
      <form onSubmit={createStory}>
        <div>  
          <input className="createStoryInput createTitleInput" id="createTitle" type="text" placeholder="A super creative name..." />
        </div>
        <div>
          <h3>Number of users</h3>
          <input className="createStoryInput createNumberInput" id="createNUsers" type="number" min="1" max="10" placeholder="5"/>
        </div>
        <div>  
          <h3>Story Length</h3>
          <input className="createStoryInput createNumberInput" id="createLength" type="number" min="5" max="20" placeholder="10"/>
        </div>
        <div className='createButtonWrap'>
          <input className="standardButton blackButton" type="submit" value="Create" />
        </div>
      </form>
    </div>
  )
}

export default CreateStory